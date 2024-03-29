import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  STORAGE_KEY_SURVEY_RESULTS,
  STORAGE_KEY_START_DATE,
  STORAGE_KEY_SYMPTOMS,
  STORAGE_KEY_INDICATEURS,
  STORAGE_KEY_IS_FIRST_LAUNCH,
  STORAGE_KEY_USER_TYPE,
  STORAGE_KEY_CUSTOM_SYMPTOMS,
  STORAGE_KEY_CUSTOM_DRUGS,
  STORAGE_KEY_MEDICAL_TREATMENT,
  STORAGE_KEY_NOTES_VERSION,
  STORAGE_KEY_VISIT_PRO_NPS,
  STORAGE_KEY_IS_BECK_ACTIVATED,
  STORAGE_KEY_BECK_WHERE_LIST,
  STORAGE_KEY_BECK_WHO_LIST,
  STORAGE_KEY_BECK_SENSATION_LIST,
  STORAGE_KEY_BECK_EMOTION_LIST,
  STORAGE_KEY_ONBOARDING_STEP,
  STORAGE_KEY_ONBOARDING_DONE,
  STORAGE_KEY_NEED_SURVEY_FEEDBACK,
} from "../utils/constants";
import {
  fakeDiaryData,
  fakeDiaryData2,
  fake3,
  startDate as fakeStartDate,
  fake4,
} from "../scenes/status/fake-diary-data";
import { beforeToday, formatDay, getArrayOfDates } from "../utils/date/helpers";

const wipeData = async () => {
  // await AsyncStorage.removeItem(STORAGE_KEY_START_DATE);
  // await AsyncStorage.removeItem(STORAGE_KEY_SURVEY_RESULTS);
  // await AsyncStorage.removeItem(STORAGE_KEY_SYMPTOMS);
  // await AsyncStorage.removeItem(STORAGE_KEY_INDICATEURS);
  // await AsyncStorage.removeItem(STORAGE_KEY_IS_FIRST_LAUNCH);
  // await AsyncStorage.removeItem(STORAGE_KEY_USER_TYPE);
  // await AsyncStorage.removeItem(STORAGE_KEY_MEDICAL_TREATMENT);
  // await AsyncStorage.removeItem(STORAGE_KEY_NOTES_VERSION);
  // await AsyncStorage.removeItem(STORAGE_KEY_VISIT_PRO_NPS);
  // await AsyncStorage.removeItem(STORAGE_KEY_CUSTOM_DRUGS);
  // await AsyncStorage.removeItem(STORAGE_KEY_IS_BECK_ACTIVATED);
  // await AsyncStorage.removeItem(STORAGE_KEY_BECK_WHERE_LIST);
  // await AsyncStorage.removeItem(STORAGE_KEY_BECK_WHO_LIST);
  // await AsyncStorage.removeItem(STORAGE_KEY_BECK_SENSATION_LIST);
  // await AsyncStorage.removeItem(STORAGE_KEY_BECK_EMOTION_LIST);
  // await AsyncStorage.removeItem(STORAGE_KEY_ONBOARDING_STEP);
  // await AsyncStorage.removeItem(STORAGE_KEY_ONBOARDING_DONE);
  // await AsyncStorage.removeItem(STORAGE_KEY_NEED_SURVEY_FEEDBACK);
  // await AsyncStorage.removeItem("@Reminder");
};

export const setupFakeData = async () => {
  await AsyncStorage.setItem(STORAGE_KEY_START_DATE, formatDay(fakeStartDate));
  await AsyncStorage.setItem(STORAGE_KEY_SURVEY_RESULTS, JSON.stringify(fake4));
};

const fillUpEmptyDates = (startDate, data) => {
  const sortedDates = getArrayOfDates({ startDate, reverse: true });
  const diary = {};
  for (let date of sortedDates) {
    diary[date] = data[date] || null;
  }
  return diary;
};

const DiaryDataContext = React.createContext([{}, () => {}]);

const DiaryDataProvider = ({ children }) => {
  const [diaryData, setDiaryData] = useState();

  const setDiaryDataRequest = ({ date, data }) => {
    const newDiaryData = {
      ...diaryData,
      [date]: data,
    };
    setDiaryData(newDiaryData);
    AsyncStorage.setItem(
      STORAGE_KEY_SURVEY_RESULTS,
      JSON.stringify(newDiaryData)
    );
  };

  useEffect(() => {
    const getDiaryDataFromStorage = async () => {
      // await wipeData();
      // await setupFakeData();
      // await AsyncStorage.clear();

      // start date is needed to populate empty dates
      let startDate = await AsyncStorage.getItem(STORAGE_KEY_START_DATE);
      let data =
        (await AsyncStorage.getItem(STORAGE_KEY_SURVEY_RESULTS)) || "{}";

      // if no start date, it's the first time the user opens the app
      // so we initialize it
      if (!startDate) {
        const tempStartDate = formatDay(new Date());
        await AsyncStorage.setItem(STORAGE_KEY_START_DATE, tempStartDate);
        let tempStartDateMinus7 = beforeToday(0, tempStartDate);
        const tempDiary = fillUpEmptyDates(tempStartDateMinus7, data);
        return setDiaryData(tempDiary);
      }

      // we set data first for a better UX
      data = JSON.parse(data);
      setDiaryData(data);

      let startDateMinus7 = beforeToday(0, startDate);

      const diary = fillUpEmptyDates(startDateMinus7, data);
      setDiaryData(diary);
    };

    getDiaryDataFromStorage();
  }, [setDiaryData]);

  return (
    <DiaryDataContext.Provider value={[diaryData, setDiaryDataRequest]}>
      {children}
    </DiaryDataContext.Provider>
  );
};

export { DiaryDataContext, DiaryDataProvider };
