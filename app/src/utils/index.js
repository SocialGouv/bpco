import { beforeToday, formatDay } from "./date/helpers";
import localStorage from "./localStorage";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  STORAGE_KEY_SURVEY_RESULTS,
  STORAGE_KEY_START_DATE,
  STORAGE_KEY_SYMPTOMS,
  STORAGE_KEY_INDICATEURS,
  STORAGE_KEY_IS_FIRST_LAUNCH,
  STORAGE_KEY_USER_TYPE,
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
  STORAGE_KEY_USER_WEIGHT,
  STORAGE_KEY_USER_BIRTHYEAR,
  STORAGE_KEY_USER_SEX,
  STORAGE_KEY_FAMILY_PHONE_NUMBER,
  STORAGE_KEY_REMINDER,
  STORAGE_KEY_VENTILATION_DEVICE,
  STORAGE_KEY_OXYGEN,
  STORAGE_KEY_LAST_NPS_SHOWN,
} from "../utils/constants";

export const classNames = (...classes) => {
  return classes.filter(Boolean).join(" ");
};

export const getScoreWithState = ({ patientState, category }) => {
  if (
    patientState[category]?.value !== undefined &&
    patientState[category]?.value !== null &&
    !(
      typeof patientState[category]?.value === "number" &&
      isFinite(patientState[category]?.value)
    )
  )
    return;

  if (patientState[category]?.value) return patientState[category]?.value;

  // -------
  // the following code is for the retrocompatibility
  // -------

  // if the patient state doesnt have any info on question 1, return
  if (!patientState[category]) {
    return;
  }
  const [categoryName, suffix] = category.split("_");

  // if it is a 1 question category, return the level of the question
  if (!suffix) {
    return patientState[category].level;
  } else {
    // else if there is 2 question...

    // if it is never, the score is max, we dont look at the intensity,
    // i.e. 5
    if (patientState[category].id === "NEVER") {
      return 5;
    }

    // else we compute both frequence & intensity
    const frequence = patientState[category];
    const intensity = patientState[`${categoryName}_INTENSITY`];
    return frequence.level + intensity.level - 1;
  }
};

export const computeHasOxygen = async () => {
  const oxygenStorage = await localStorage.getOxygen();
  const ventilationDevice = await localStorage.getVentilationDevice();
  return !!oxygenStorage || !!ventilationDevice;
};

// TODO : peut etre indexer sur le score ? plutot que le resultat "string"
export const renderAlertText = (alert) => {
  switch (alert) {
    case "green":
      return "Il semblerait ne pas exister de signes d’alarmes.";
    case "orange":
      return "Il semblerait important de consulter votre médecin dans les prochains jours.";
    // case "red":
    case "red":
      return "D'après vos réponses, il semblerait nécessaire d’appeler et consulter en urgence !";
    default:
      return "";
  }
};

export const renderAlertIcon = (alert) => {
  switch (alert) {
    case "green":
      return "Lungs";
    case "orange":
      return "AlertOrangeSVG";
    case "red":
      return "AlertSVG";

    default:
      return "";
  }
};

export const computeNewSurveyAvailable = (diaryData) => {
  // TODO: what if the user does his survey late in the night (before 23:59:59) and comes back early (after 00:00:00)? Currently, two surveys can be done within less than 24h
  return !diaryData || !diaryData[formatDay(beforeToday(0))];
};

export const computeShowNPS = async (diaryData) => {
  const lastNPS = await localStorage.getLastNPSShown();
  if (!!lastNPS) return false;

  const daysAnswered = Object.keys(diaryData).filter((day) => !!diaryData[day]);
  if (daysAnswered.length < 3) return false;

  await localStorage.setLastNPSShown(formatDay(beforeToday(0)));
  return true;
};

export const wipeData = async () => {
  await AsyncStorage.removeItem(STORAGE_KEY_START_DATE);
  await AsyncStorage.removeItem(STORAGE_KEY_SURVEY_RESULTS);
  await AsyncStorage.removeItem(STORAGE_KEY_SYMPTOMS);
  await AsyncStorage.removeItem(STORAGE_KEY_INDICATEURS);
  await AsyncStorage.removeItem(STORAGE_KEY_IS_FIRST_LAUNCH);
  await AsyncStorage.removeItem(STORAGE_KEY_USER_TYPE);
  await AsyncStorage.removeItem(STORAGE_KEY_MEDICAL_TREATMENT);
  await AsyncStorage.removeItem(STORAGE_KEY_NOTES_VERSION);
  await AsyncStorage.removeItem(STORAGE_KEY_VISIT_PRO_NPS);
  await AsyncStorage.removeItem(STORAGE_KEY_CUSTOM_DRUGS);
  await AsyncStorage.removeItem(STORAGE_KEY_IS_BECK_ACTIVATED);
  await AsyncStorage.removeItem(STORAGE_KEY_BECK_WHERE_LIST);
  await AsyncStorage.removeItem(STORAGE_KEY_BECK_WHO_LIST);
  await AsyncStorage.removeItem(STORAGE_KEY_BECK_SENSATION_LIST);
  await AsyncStorage.removeItem(STORAGE_KEY_BECK_EMOTION_LIST);
  await AsyncStorage.removeItem(STORAGE_KEY_ONBOARDING_STEP);
  await AsyncStorage.removeItem(STORAGE_KEY_ONBOARDING_DONE);
  await AsyncStorage.removeItem(STORAGE_KEY_USER_WEIGHT);
  await AsyncStorage.removeItem(STORAGE_KEY_USER_BIRTHYEAR);
  await AsyncStorage.removeItem(STORAGE_KEY_USER_SEX);
  await AsyncStorage.removeItem(STORAGE_KEY_FAMILY_PHONE_NUMBER);
  await AsyncStorage.removeItem(STORAGE_KEY_REMINDER);
  await AsyncStorage.removeItem(STORAGE_KEY_VENTILATION_DEVICE);
  await AsyncStorage.removeItem(STORAGE_KEY_OXYGEN);
  await AsyncStorage.removeItem(STORAGE_KEY_LAST_NPS_SHOWN);
  await AsyncStorage.removeItem("@Reminder");
};
