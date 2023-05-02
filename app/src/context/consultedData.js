import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { STORAGE_KEY_CONSULTED_RESULTS } from "../utils/constants";

const ConsultedDataContext = React.createContext([{}, () => {}]);

const ConsultedDataProvider = ({ children }) => {
  const [consultedData, setConsultedData] = useState({});

  const setConsultedDataRequest = ({ date, data }) => {
    const newConsultedData = {
      ...consultedData,
      [date]: data,
    };
    setConsultedData(newConsultedData);
    AsyncStorage.setItem(
      STORAGE_KEY_CONSULTED_RESULTS,
      JSON.stringify(newConsultedData)
    );
  };

  useEffect(() => {
    const getDiaryDataFromStorage = async () => {
      // await wipeConsultedResultsData();

      let data =
        (await AsyncStorage.getItem(STORAGE_KEY_CONSULTED_RESULTS)) || "{}";

      data = JSON.parse(data);
      setConsultedData(data);
    };

    getDiaryDataFromStorage();
  }, [setConsultedData]);

  return (
    <ConsultedDataContext.Provider
      value={[consultedData, setConsultedDataRequest]}
    >
      {children}
    </ConsultedDataContext.Provider>
  );
};

export { ConsultedDataContext, ConsultedDataProvider };

const wipeConsultedResultsData = async () => {
  await AsyncStorage.removeItem(STORAGE_KEY_CONSULTED_RESULTS);
};
