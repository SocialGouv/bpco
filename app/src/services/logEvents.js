import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import Matomo from "./matomo";
import {
  MATOMO_DIMENSION,
  STORAGE_KEY_USER_TYPE,
  STORAGE_KEY_USER_SEX,
  STORAGE_KEY_USER_WEIGHT,
  STORAGE_KEY_USER_BIRTHYEAR,
} from "../utils/constants";
import api from "./api";
import app from "../../app.json";

const CONSTANTS = {
  STORE_KEY_USER_ID: "STORE_KEY_USER_ID",
  STORE_KEY_NUMBER_OF_VISITS: "STORE_KEY_NUMBER_OF_VISITS",
};

const initMatomo = async () => {
  let userId = await AsyncStorage.getItem(CONSTANTS.STORE_KEY_USER_ID);
  if (!userId) {
    userId = Matomo.makeid();
    await AsyncStorage.setItem(CONSTANTS.STORE_KEY_USER_ID, userId);
  }

  const previousVisits = await AsyncStorage.getItem(
    CONSTANTS.STORE_KEY_NUMBER_OF_VISITS
  );
  const newVisits = previousVisits ? Number(previousVisits) + 1 : 1;
  await AsyncStorage.setItem(
    CONSTANTS.STORE_KEY_NUMBER_OF_VISITS,
    `${newVisits}`
  );

  Matomo.init({
    baseUrl: "https://matomo.fabrique.social.gouv.fr/piwik.php",
    idsite: 87,
    userId,
    _idvc: newVisits,
  });

  let userType = await AsyncStorage.getItem(STORAGE_KEY_USER_TYPE);
  let userSex = await AsyncStorage.getItem(STORAGE_KEY_USER_SEX);
  let userBirthyear = await AsyncStorage.getItem(STORAGE_KEY_USER_BIRTHYEAR);
  let userWeight = await AsyncStorage.getItem(STORAGE_KEY_USER_WEIGHT);

  Matomo.setDimensions({
    [MATOMO_DIMENSION.VERSION]: app.expo.version,
    [MATOMO_DIMENSION.SYSTEM]: Platform.OS,
    [MATOMO_DIMENSION.USER_TYPE]: userType ? JSON.parse(userType) : "",
    [MATOMO_DIMENSION.USER_SEX]: userSex ? JSON.parse(userSex) : "",
    [MATOMO_DIMENSION.USER_BIRTHYEAR]: userBirthyear
      ? JSON.parse(userBirthyear)
      : "",
    [MATOMO_DIMENSION.USER_WEIGHT]: userWeight ? JSON.parse(userWeight) : "",
  });
};

const checkNetwork = async () => {
  const networkState = await NetInfo.fetch();
  return networkState.isConnected;
};

const logEvent = async ({ category, action, name, value }) => {
  if (!Matomo.initDone) await initMatomo();
  try {
    const canSend = await checkNetwork();
    if (!canSend) {
      throw new Error("no network");
    }
    Matomo.logEvent({ category, action, name, value });
    api.post({
      path: "/event",
      body: {
        event: { category, action, name, value },
        userId: Matomo.userId,
        userProperties: Matomo.userProperties,
        dimensions: Matomo.dimensions,
      },
    });
  } catch (error) {
    console.log("logEvent error", error);
    console.log("logEvent error", { category, action, name, value });
  }
};

const getUserId = () => Matomo.userId;

const CATEGORIES = {
  APP: "APP",
  ONBOARDING: "ONBOARDING",
  NPS: "NPS",
  PAGE_VIEW: "PAGE_VIEW",
  RECOMMEND: "RECOMMEND",
  PROFILE: "PROFILE",
  SURVEY: "SURVEY",
  CONSULTED: "CONSULTED",
};
const ACTIONS = {
  APP_OPEN: "APP_OPEN",
  APP_CLOSE: "APP_CLOSE",
  ONBOARDING_NEXT_CLICK: "ONBOARDING_NEXT_CLICK",
  NPS_OPEN: "NPS_OPEN",
  NPS_SEND: "NPS_SEND",
  PRO_NPS_SEND: "PRO_NPS_SEND",
  ONBOARDING_USER_TYPE_CHOOSE: "ONBOARDING_USER_TYPE_CHOOSE",
  ONBOARDING_USER_OXYGEN_SELECT: "ONBOARDING_USER_OXYGEN_SELECT",
  ONBOARDING_USER_OXYGEN_CLICK: "ONBOARDING_USER_OXYGEN_CLICK",
  ONBOARDING_USER_VENTILATION_DEVICE_SELECT:
    "ONBOARDING_USER_VENTILATION_DEVICE_SELECT",
  ONBOARDING_USER_VENTILATION_DEVICE_CLICK:
    "ONBOARDING_USER_VENTILATION_DEVICE_CLICK",
  ONBOARDING_FAMILY_PHONE_NUMBER_VALIDATE:
    "ONBOARDING_FAMILY_PHONE_NUMBER_VALIDATE",
  ONBOARDING_FAMILY_PHONE_NUMBER_LATER: "ONBOARDING_FAMILY_PHONE_NUMBER_LATER",
  RECOMMEND_SHOW_MODAL: "RECOMMEND_SHOW_MODAL",
  RECOMMEND_SENT: "RECOMMEND_SENT",
  RECOMMEND_DISMISSED: "RECOMMEND_DISMISSED",
  RECOMMEND_ERROR: "RECOMMEND_ERROR",
  PROFILE_VALIDATE_CLICK: "PROFILE_VALIDATE_CLICK",
  PROFILE_SEX_SELECT: "PROFILE_SEX_SELECT",
  PROFILE_BIRTHYEAR_SELECT: "PROFILE_BIRTHYEAR_SELECT",
  PROFILE_WEIGHT_SELECT: "PROFILE_WEIGHT_SELECT",
  PROFILE_FAMILY_PHONE_NUMBER_VALIDATE: "PROFILE_FAMILY_PHONE_NUMBER_VALIDATE",
  SURVEY_VALIDATE: "SURVEY_VALIDATE",
  SURVEY_SCORE: "SURVEY_SCORE",
  SURVEY_ALERT: "SURVEY_ALERT",
  SURVEY_ITEM_CLICK: "SURVEY_ITEM_CLICK",
  CONSULTED_ANSWER: "CONSULTED_ANSWER",
  CONSULTED_DETAILS: "CONSULTED_DETAILS",
  CONSULTED_DATE_ANSWERED: "CONSULTED_DATE_ANSWERED",
  CONSULTED_PREVIOUS_SCREEN: "CONSULTED_PREVIOUS_SCREEN",
};

const logAppVisit = async () => {
  await logEvent({
    category: CATEGORIES.APP,
    action: ACTIONS.APP_OPEN,
  });
};

const logAppClose = async () => {
  await logEvent({
    category: CATEGORIES.APP,
    action: ACTIONS.APP_CLOSE,
  });
};

const logOnboardingSwipe = async (page) => {
  await logEvent({
    category: CATEGORIES.ONBOARDING,
    action: ACTIONS.ONBOARDING_NEXT_CLICK,
    name: "page",
    value: page,
  });
};

const logSurveyValidate = async () => {
  await logEvent({
    category: CATEGORIES.SURVEY,
    action: ACTIONS.SURVEY_VALIDATE,
  });
};

const logSurveyScore = async (score) => {
  await logEvent({
    category: CATEGORIES.SURVEY,
    action: ACTIONS.SURVEY_SCORE,
    name: "score",
    value: score,
  });
};

const logSurveyAlert = async (alert) => {
  await logEvent({
    category: CATEGORIES.SURVEY,
    action: ACTIONS.SURVEY_ALERT,
    name: alert,
  });
};

const logConsultedAnswer = async (answer) => {
  await logEvent({
    category: CATEGORIES.CONSULTED,
    action: ACTIONS.CONSULTED_ANSWER,
    name: answer,
  });
};

const logConsultedDateAnswered = async (date) => {
  await logEvent({
    category: CATEGORIES.CONSULTED,
    action: ACTIONS.CONSULTED_DATE_ANSWERED,
    name: date,
  });
};

const logConsultedPreviousScreen = async (previousScreen) => {
  await logEvent({
    category: CATEGORIES.CONSULTED,
    action: ACTIONS.CONSULTED_PREVIOUS_SCREEN,
    name: previousScreen,
  });
};

const logConsultedDetails = async (answer) => {
  await logEvent({
    category: CATEGORIES.CONSULTED,
    action: ACTIONS.CONSULTED_DETAILS,
    name: answer,
  });
};

const logSurveyItemClick = async ({ questionLabel, value }) => {
  await logEvent({
    category: CATEGORIES.SURVEY,
    action: ACTIONS.SURVEY_ITEM_CLICK,
    name: questionLabel,
    value,
  });
};

const FEELING = "FEELING";
const FEELING_START = "FEELING_START";
const FEELING_DATE_CHOOSE = "FEELING_DATE_CHOOSE";
const FEELING_START_YESTERDAY = "FEELING_START_YESTERDAY";

const logFeelingStart = async () => {
  await logEvent({
    category: FEELING,
    action: FEELING_START,
  });
};

const logFeelingDateChoose = async (date) => {
  await logEvent({
    category: FEELING,
    action: FEELING_DATE_CHOOSE,
    name: date,
  });
};

const logFeelingStartYesterday = async (v) => {
  await logEvent({
    category: FEELING,
    action: FEELING_START_YESTERDAY,
    name: v,
  });
};

// todo : pas besoin d'edit ?
const logFeelingEditButtonClick = async () => {
  await logEvent({
    category: FEELING,
    action: "FEELING_EDIT_BUTTON_CLICK",
  });
};

const logNPSOpen = async () => {
  await logEvent({
    category: CATEGORIES.NPS,
    action: ACTIONS.NPS_OPEN,
  });
};

// todo: remove reco
const logNPSSend = async (useful, reco) => {
  await logEvent({
    category: CATEGORIES.NPS,
    action: ACTIONS.NPS_SEND,
    name: "notes",
    value: `${useful}-${reco}`,
  });
};

const logNPSUsefulSend = async (value) => {
  await logEvent({
    category: CATEGORIES.NPS,
    action: ACTIONS.NPS_SEND,
    name: "notes-useful",
    value,
  });
};

// todo : besoin ?
const logProNPSSend = async () => {
  await logEvent({
    category: CATEGORIES.NPS,
    action: ACTIONS.PRO_NPS_SEND,
  });
};

const logUserTypeSelect = async (userType) => {
  await logEvent({
    category: CATEGORIES.ONBOARDING,
    action: ACTIONS.ONBOARDING_USER_TYPE_CHOOSE,
    name: userType,
  });
};

const logUserOxygenSelect = async (oxygen) => {
  await logEvent({
    category: CATEGORIES.ONBOARDING,
    action: ACTIONS.ONBOARDING_USER_OXYGEN_SELECT,
    name: oxygen,
  });
};
const logUserOxygenClick = async (oxygen) => {
  await logEvent({
    category: CATEGORIES.ONBOARDING,
    action: ACTIONS.ONBOARDING_USER_OXYGEN_CLICK,
    name: oxygen,
  });
};
const logUserVentilationDeviceSelect = async (ventilationDevice) => {
  await logEvent({
    category: CATEGORIES.ONBOARDING,
    action: ACTIONS.ONBOARDING_USER_VENTILATION_DEVICE_SELECT,
    name: ventilationDevice,
  });
};
const logUserVentilationDeviceClick = async (ventilationDevice) => {
  await logEvent({
    category: CATEGORIES.ONBOARDING,
    action: ACTIONS.ONBOARDING_USER_VENTILATION_DEVICE_CLICK,
    name: ventilationDevice,
  });
};

const logOnboardingFamilyPhoneNumberValidate = async () => {
  await logEvent({
    category: CATEGORIES.ONBOARDING,
    action: ACTIONS.ONBOARDING_FAMILY_PHONE_NUMBER_VALIDATE,
  });
};
const logOnboardingFamilyPhoneNumberLater = async () => {
  await logEvent({
    category: CATEGORIES.ONBOARDING,
    action: ACTIONS.ONBOARDING_FAMILY_PHONE_NUMBER_LATER,
  });
};
const logFamilyPhoneNumberValidate = async () => {
  await logEvent({
    category: CATEGORIES.PROFILE,
    action: ACTIONS.PROFILE_FAMILY_PHONE_NUMBER_VALIDATE,
  });
};

const logValidateProfile = async () => {
  await logEvent({
    category: CATEGORIES.PROFILE,
    action: ACTIONS.PROFILE_VALIDATE_CLICK,
  });
};

const logSetSexProfile = async (sex) => {
  await logEvent({
    category: CATEGORIES.PROFILE,
    action: ACTIONS.PROFILE_SEX_SELECT,
    name: sex,
  });
};
const logSetBirthyearProfile = async (birthyear) => {
  await logEvent({
    category: CATEGORIES.PROFILE,
    action: ACTIONS.PROFILE_BIRTHYEAR_SELECT,
    name: birthyear,
  });
};
const logSetWeightProfile = async (weight) => {
  await logEvent({
    category: CATEGORIES.PROFILE,
    action: ACTIONS.PROFILE_WEIGHT_SELECT,
    name: weight,
  });
};

// besoin ?
const logEditNoteDiary = async () => {
  await logEvent({
    category: "DIARY",
    action: "DIARY_EDIT_NOTE",
  });
};

// besoin ?
const logDeleteNoteDiary = async () => {
  await logEvent({
    category: "DIARY",
    action: "DIARY_DELETE_NOTE",
  });
};

const logPageView = async (tab) => {
  await logEvent({
    category: CATEGORIES.PAGE_VIEW,
    action: `PAGE_VIEW_${tab.toUpperCase()}`,
  });
};

const logRecommendAppShow = async () => {
  await logEvent({
    category: CATEGORIES.RECOMMEND,
    action: ACTIONS.RECOMMEND_SHOW_MODAL,
  });
};
const logRecommendAppSent = async (type) => {
  await logEvent({
    category: CATEGORIES.RECOMMEND,
    action: ACTIONS.RECOMMEND_SENT,
    type,
  });
};
const logRecommendAppDismissed = async () => {
  await logEvent({
    category: CATEGORIES.RECOMMEND,
    action: ACTIONS.RECOMMEND_DISMISSED,
  });
};
const logRecommendAppError = async () => {
  await logEvent({
    category: CATEGORIES.RECOMMEND,
    action: ACTIONS.RECOMMEND_ERROR,
  });
};

const logPushNotifTokenRegisterSuccess = async () => {
  await logEvent({
    category: "PUSH_NOTIFICATION_TOKEN_REGISTER",
    action: "SUCCESS",
  });
};
const logPushNotifTokenRegisterError = async () => {
  await logEvent({
    category: "PUSH_NOTIFICATION_TOKEN_REGISTER",
    action: "ERROR",
  });
};
const logPushNotifReceiveClicked = async () => {
  await logEvent({
    category: "PUSH_NOTIFICATION_RECEIVE",
    action: "CLICKED",
  });
};

export default {
  initMatomo,
  logAppVisit,
  logAppClose,
  logOnboardingSwipe,
  logFeelingStart,
  logFeelingDateChoose,
  getUserId,
  logNPSOpen,
  logNPSSend,
  logUserTypeSelect,
  logUserOxygenSelect,
  logUserOxygenClick,
  logUserVentilationDeviceSelect,
  logUserVentilationDeviceClick,
  logFeelingStartYesterday,
  logProNPSSend,
  logNPSUsefulSend,
  logEditNoteDiary,
  logDeleteNoteDiary,
  logPageView,
  logFeelingEditButtonClick,
  logRecommendAppShow,
  logRecommendAppSent,
  logRecommendAppDismissed,
  logRecommendAppError,
  logPushNotifTokenRegisterSuccess,
  logPushNotifTokenRegisterError,
  logPushNotifReceiveClicked,
  logValidateProfile,
  logSetSexProfile,
  logSetBirthyearProfile,
  logSetWeightProfile,
  logSurveyValidate,
  logSurveyScore,
  logSurveyAlert,
  logSurveyItemClick,
  logOnboardingFamilyPhoneNumberValidate,
  logOnboardingFamilyPhoneNumberLater,
  logFamilyPhoneNumberValidate,
  logConsultedAnswer,
  logConsultedDetails,
  logConsultedDateAnswered,
  logConsultedPreviousScreen,
};
