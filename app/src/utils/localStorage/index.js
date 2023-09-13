import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  STORAGE_KEY_IS_FIRST_LAUNCH,
  STORAGE_KEY_SYMPTOMS, //legacy
  STORAGE_KEY_INDICATEURS,
  STORAGE_KEY_USER_TYPE,
  STORAGE_KEY_CUSTOM_SYMPTOMS,
  STORAGE_KEY_MEDICAL_TREATMENT,
  STORAGE_KEY_NOTES_VERSION,
  STORAGE_KEY_VISIT_PRO_NPS,
  STORAGE_KEY_CUSTOM_DRUGS,
  STORAGE_KEY_ONBOARDING_STEP,
  STORAGE_KEY_ONBOARDING_DONE,
  STORAGE_KEY_NPS_PRO_CONTACT,
  STORAGE_KEY_PNEUMOLOGUE,
  STORAGE_KEY_OXYGEN,
  STORAGE_KEY_VENTILATION_DEVICE,
  STORAGE_KEY_REMINDER,
  STORAGE_KEY_FAMILY_PHONE_NUMBER,
  STORAGE_KEY_USER_SEX,
  STORAGE_KEY_USER_BIRTHYEAR,
  STORAGE_KEY_USER_WEIGHT,
  STORAGE_KEY_LAST_NPS_SHOWN,
  STORAGE_KEY_NEED_SURVEY_FEEDBACK,
} from "../constants";
import { updateSymptomsFormatIfNeeded } from "./utils";

const getSymptoms = async () => {
  const symptoms = await AsyncStorage.getItem(STORAGE_KEY_SYMPTOMS);
  if (symptoms) {
    return JSON.parse(symptoms);
  }
};

const setSymptoms = async (symp) => {
  await AsyncStorage.setItem(STORAGE_KEY_SYMPTOMS, JSON.stringify(symp));
};

const getIndicateurs = async () => {
  let _indicateurs = await AsyncStorage.getItem(STORAGE_KEY_INDICATEURS);
  if (!_indicateurs) {
    // si on n'a pas d'indicateurs, on les récupère depuis le localStorage de symptoms, et on migre si besoin
    // sinon, c'est qu'on ne l'a pas encore configuré
    const symptoms = await AsyncStorage.getItem(STORAGE_KEY_SYMPTOMS);
    if (symptoms) {
      _indicateurs = updateSymptomsFormatIfNeeded(JSON.parse(symptoms));
      _indicateurs = JSON.stringify(_indicateurs);
    }
    if (_indicateurs) {
      // si on a migré, on sauvegarde
      await AsyncStorage.setItem(STORAGE_KEY_INDICATEURS, _indicateurs);
    }
  }
  if (_indicateurs) {
    _indicateurs = updateSymptomsFormatIfNeeded(JSON.parse(_indicateurs));
    return _indicateurs;
  }
};

const setIndicateurs = async (v) => {
  await AsyncStorage.setItem(STORAGE_KEY_INDICATEURS, JSON.stringify(v));
};
const addIndicateur = async (indicateur) => {
  let _indicateurs = await AsyncStorage.getItem(STORAGE_KEY_INDICATEURS);
  _indicateurs = JSON.parse(_indicateurs);
  _indicateurs.push(indicateur);
  await AsyncStorage.setItem(
    STORAGE_KEY_INDICATEURS,
    JSON.stringify(_indicateurs)
  );
};

const getIsFirstAppLaunch = async () =>
  await AsyncStorage.getItem(STORAGE_KEY_IS_FIRST_LAUNCH);

const setIsFirstAppLaunch = async (isAppFirstLaunch) => {
  await AsyncStorage.setItem(
    STORAGE_KEY_IS_FIRST_LAUNCH,
    JSON.stringify(isAppFirstLaunch)
  );
};
const getOnboardingStep = async () =>
  await AsyncStorage.getItem(STORAGE_KEY_ONBOARDING_STEP);

const setOnboardingStep = async (step) => {
  await AsyncStorage.setItem(STORAGE_KEY_ONBOARDING_STEP, step);
};
const getOnboardingDone = async () => {
  const onboardingDone = await AsyncStorage.getItem(
    STORAGE_KEY_ONBOARDING_DONE
  );
  if (onboardingDone) {
    return JSON.parse(onboardingDone);
  }
};

const setOnboardingDone = async (value) => {
  await AsyncStorage.setItem(
    STORAGE_KEY_ONBOARDING_DONE,
    JSON.stringify(value)
  );
};

const getUserType = async () => {
  const userType = await AsyncStorage.getItem(STORAGE_KEY_USER_TYPE);
  if (userType) {
    return JSON.parse(userType);
  }
};

const setUserType = async (userType) =>
  await AsyncStorage.setItem(STORAGE_KEY_USER_TYPE, JSON.stringify(userType));

const getCustomSymptoms = async () => {
  const customSymptoms = await AsyncStorage.getItem(
    STORAGE_KEY_CUSTOM_SYMPTOMS
  );
  return JSON.parse(customSymptoms) || [];
};

const setCustomSymptoms = async (symp) => {
  await AsyncStorage.setItem(STORAGE_KEY_CUSTOM_SYMPTOMS, JSON.stringify(symp));
};

const addCustomSymptoms = async (sym) => {
  const customSymptoms = await getCustomSymptoms();
  customSymptoms.push(sym);
  await AsyncStorage.setItem(
    STORAGE_KEY_CUSTOM_SYMPTOMS,
    JSON.stringify(customSymptoms)
  );
};

const getMedicalTreatment = async () => {
  const a = await AsyncStorage.getItem(STORAGE_KEY_MEDICAL_TREATMENT);
  return JSON.parse(a);
};

const setMedicalTreatment = async (v) => {
  await AsyncStorage.setItem(STORAGE_KEY_MEDICAL_TREATMENT, JSON.stringify(v));
};

const removeDrugFromTreatment = async (drugId) => {
  let treatment = await getMedicalTreatment();
  treatment = treatment.filter((e) => e.id !== drugId);
  await AsyncStorage.setItem(
    STORAGE_KEY_MEDICAL_TREATMENT,
    JSON.stringify(treatment)
  );
  return treatment;
};

const getNotesVersion = async () => {
  const a = await AsyncStorage.getItem(STORAGE_KEY_NOTES_VERSION);
  return JSON.parse(a);
};

const setNotesVersion = async (v) => {
  await AsyncStorage.setItem(STORAGE_KEY_NOTES_VERSION, JSON.stringify(v));
};

const getVisitProNPS = async () => {
  const a = await AsyncStorage.getItem(STORAGE_KEY_VISIT_PRO_NPS);
  return JSON.parse(a);
};

const setVisitProNPS = async (v) => {
  await AsyncStorage.setItem(STORAGE_KEY_VISIT_PRO_NPS, JSON.stringify(v));
};

const setNpsProContact = async (v) => {
  await AsyncStorage.setItem(STORAGE_KEY_NPS_PRO_CONTACT, JSON.stringify(v));
};

const getNpsProContact = async () => {
  const v = await AsyncStorage.getItem(STORAGE_KEY_NPS_PRO_CONTACT);
  return JSON.parse(v);
};

const getCustomDrugs = async () => {
  const customDrugs = await AsyncStorage.getItem(STORAGE_KEY_CUSTOM_DRUGS);
  return JSON.parse(customDrugs) || [];
};

const addCustomDrug = async (drug) => {
  const customDrugs = await getCustomDrugs();
  customDrugs.push(drug);
  await AsyncStorage.setItem(
    STORAGE_KEY_CUSTOM_DRUGS,
    JSON.stringify(customDrugs)
  );
  return customDrugs;
};

const getPneumologue = async () => {
  const pneumologue = await AsyncStorage.getItem(STORAGE_KEY_PNEUMOLOGUE);
  if (pneumologue) {
    return JSON.parse(pneumologue);
  }
};

const setPneumologue = async (pneumologue) =>
  await AsyncStorage.setItem(
    STORAGE_KEY_PNEUMOLOGUE,
    JSON.stringify(pneumologue)
  );

const getOxygen = async () => {
  const oxygen = await AsyncStorage.getItem(STORAGE_KEY_OXYGEN);
  if (oxygen) {
    return JSON.parse(oxygen);
  }
};

const setOxygen = async (oxygen) =>
  await AsyncStorage.setItem(STORAGE_KEY_OXYGEN, JSON.stringify(oxygen));

const getVentilationDevice = async () => {
  const ventilationDevice = await AsyncStorage.getItem(
    STORAGE_KEY_VENTILATION_DEVICE
  );
  if (ventilationDevice) {
    return JSON.parse(ventilationDevice);
  }
};

const setVentilationDevice = async (ventilationDevice) =>
  await AsyncStorage.setItem(
    STORAGE_KEY_VENTILATION_DEVICE,
    JSON.stringify(ventilationDevice)
  );

const getReminder = async () => {
  const reminder = await AsyncStorage.getItem(STORAGE_KEY_REMINDER);
  if (reminder) {
    return JSON.parse(reminder);
  }
};

const setReminder = async (reminder) =>
  await AsyncStorage.setItem(STORAGE_KEY_REMINDER, JSON.stringify(reminder));

const getFamilyPhoneNumber = async () => {
  const phone = await AsyncStorage.getItem(STORAGE_KEY_FAMILY_PHONE_NUMBER);
  if (phone) {
    return JSON.parse(phone);
  }
};

const setFamilyPhoneNumber = async (phone) =>
  await AsyncStorage.setItem(
    STORAGE_KEY_FAMILY_PHONE_NUMBER,
    JSON.stringify(phone)
  );

const getUserSex = async () => {
  const sex = await AsyncStorage.getItem(STORAGE_KEY_USER_SEX);
  if (sex) {
    return JSON.parse(sex);
  }
};
const setUserSex = async (sex) =>
  await AsyncStorage.setItem(STORAGE_KEY_USER_SEX, JSON.stringify(sex));

const getBirthyear = async () => {
  const age = await AsyncStorage.getItem(STORAGE_KEY_USER_BIRTHYEAR);
  if (age) {
    return JSON.parse(age);
  }
};
const setBirthyear = async (age) =>
  await AsyncStorage.setItem(STORAGE_KEY_USER_BIRTHYEAR, JSON.stringify(age));

const getUserWeight = async () => {
  const weight = await AsyncStorage.getItem(STORAGE_KEY_USER_WEIGHT);
  if (weight) {
    return JSON.parse(weight);
  }
};
const setUserWeight = async (weight) =>
  await AsyncStorage.setItem(STORAGE_KEY_USER_WEIGHT, JSON.stringify(weight));

const getLastNPSShown = async () => {
  const lastNPSShown = await AsyncStorage.getItem(STORAGE_KEY_LAST_NPS_SHOWN);
  if (lastNPSShown) {
    return JSON.parse(lastNPSShown);
  }
};
const setLastNPSShown = async (lastNPSShown) =>
  await AsyncStorage.setItem(
    STORAGE_KEY_LAST_NPS_SHOWN,
    JSON.stringify(lastNPSShown)
  );

const getNeedSurveyFeedback = async () => {
  const needSurveyFeedback = await AsyncStorage.getItem(
    STORAGE_KEY_NEED_SURVEY_FEEDBACK
  );
  return JSON.parse(needSurveyFeedback) || [];
};

const addNeedSurveyFeedbackItem = async (needSurveyFeedbackItem) => {
  const needSurveyFeedback = await getNeedSurveyFeedback();
  needSurveyFeedback.push(needSurveyFeedbackItem);
  await AsyncStorage.setItem(
    STORAGE_KEY_NEED_SURVEY_FEEDBACK,
    JSON.stringify(needSurveyFeedback)
  );
  return needSurveyFeedback;
};

const deleteNeedSurveyFeedbackItem = async ({ date }) => {
  console.log("✍️  deleteNeedSurveyFeedbackItem date:", date);
  let needSurveyFeedback = await getNeedSurveyFeedback();
  needSurveyFeedback = needSurveyFeedback.filter((e) => e.date !== date);
  await AsyncStorage.setItem(
    STORAGE_KEY_NEED_SURVEY_FEEDBACK,
    JSON.stringify(needSurveyFeedback)
  );
  return needSurveyFeedback;
};

export default {
  getLastNPSShown,
  setLastNPSShown,
  getBirthyear,
  setBirthyear,
  getUserWeight,
  setUserWeight,
  getUserSex,
  setUserSex,
  getFamilyPhoneNumber,
  setFamilyPhoneNumber,
  getReminder,
  setReminder,
  getPneumologue,
  setPneumologue,
  getOxygen,
  setOxygen,
  getVentilationDevice,
  setVentilationDevice,
  getSymptoms,
  setSymptoms,
  getIsFirstAppLaunch,
  setIsFirstAppLaunch,
  getOnboardingStep,
  setOnboardingStep,
  getOnboardingDone,
  setOnboardingDone,
  getUserType,
  setUserType,
  getCustomSymptoms,
  addCustomSymptoms,
  setCustomSymptoms,
  getMedicalTreatment,
  setMedicalTreatment,
  removeDrugFromTreatment,
  getNotesVersion,
  setNotesVersion,
  getVisitProNPS,
  setVisitProNPS,
  addCustomDrug,
  getCustomDrugs,
  setNpsProContact,
  getNpsProContact,
  getIndicateurs,
  setIndicateurs,
  addIndicateur,
  getNeedSurveyFeedback,
  addNeedSurveyFeedbackItem,
  deleteNeedSurveyFeedbackItem,
};
