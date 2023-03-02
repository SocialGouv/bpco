import NetInfo from "@react-native-community/netinfo";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Platform } from "react-native";
import Matomo from "./matomo";
import { MATOMO_DIMENSION, STORAGE_KEY_USER_TYPE } from "../utils/constants";
import api from "./api";

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

  Matomo.setDimensions({
    [MATOMO_DIMENSION.VERSION]: "0.0.0",
    [MATOMO_DIMENSION.SYSTEM]: Platform.OS,
    [MATOMO_DIMENSION.USER_TYPE]: userType ? userType : "",
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

/*
APP VISIT

*/

const APP = "APP";
const APP_OPEN = "APP_OPEN";
const APP_CLOSE = "APP_CLOSE";

const logAppVisit = async () => {
  await logEvent({
    category: APP,
    action: APP_OPEN,
  });
};

const logAppClose = async () => {
  await logEvent({
    category: APP,
    action: APP_CLOSE,
  });
};

const ONBOARDING = "ONBOARDING";
const NEXT_CLICK = "NEXT_CLICK";

const logOnboardingSwipe = async (page) => {
  await logEvent({
    category: ONBOARDING,
    action: NEXT_CLICK,
    name: "page",
    value: page,
  });
};

const FEELING = "FEELING";
const FEELING_START = "FEELING_START";
const FEELING_DATE_CHOOSE = "FEELING_DATE_CHOOSE";
const FEELING_ADD = "FEELING_ADD";
const FEELING_ADD_SURVEY = "FEELING_ADD_SURVEY";
const FEELING_START_YESTERDAY = "FEELING_START_YESTERDAY";
const FEELING_START_FLOATING_PlUS = "FEELING_START_FLOATING_PLUS";
const FEELING_START_FROM_RECAP = "FEELING_START_FROM_RECAP";

const logFeelingStart = async () => {
  await logEvent({
    category: FEELING,
    action: FEELING_START,
  });
};

const logFeelingStartFloatingPlus = async () => {
  await logEvent({
    category: FEELING,
    action: FEELING_START_FLOATING_PlUS,
  });
};

const logFeelingStartFromRecap = async (offset) => {
  await logEvent({
    category: FEELING,
    action: FEELING_START_FROM_RECAP,
    name: "offset",
    value: offset,
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

const logFeelingAdd = async () => {
  await logEvent({
    category: FEELING,
    action: FEELING_ADD,
  });
};

const logFeelingSubmitSurvey = async (value) => {
  await logEvent({
    category: FEELING,
    action: FEELING_ADD_SURVEY,
    name: "indicateur",
    value,
  });
};

// todo : pas besoin d'edit ?
const logFeelingEditButtonClick = async () => {
  await logEvent({
    category: FEELING,
    action: "FEELING_EDIT_BUTTON_CLICK",
  });
};

const SYMPTOM = "SYMPTOM";
const SYMPTOM_SETTING_FROM_SURVEY = "SYMPTOM_SETTING_FROM_SURVEY";
const SYMPTOM_ADD = "SYMPTOM_ADD";
const SYMPTOM_CANCEL = "SYMPTOM_CANCEL";
const CUSTOM_SYMPTOM = "CUSTOM_SYMPTOM";
const CUSTOM_SYMPTOM_ADD = "CUSTOM_SYMPTOM_ADD";

const logNPSOpen = async () => {
  await logEvent({
    category: "NPS",
    action: "NPS_OPEN",
  });
};

const logNPSSend = async (useful, reco) => {
  await logEvent({
    category: "NPS",
    action: "NPS_SEND",
    name: "notes",
    value: `${useful}-${reco}`,
  });
};

const logNPSUsefulSend = async (value) => {
  await logEvent({
    category: "NPS",
    action: "NPS_SEND",
    name: "notes-useful",
    value,
  });
};

// todo : besoin ?
const logProNPSSend = async () => {
  await logEvent({
    category: "NPS",
    action: "PRO_NPS_SEND",
  });
};

const logUserTypeSelect = async (userType) => {
  await logEvent({
    category: "USER_TYPE",
    action: "USER_TYPE_CHOOSE",
    name: userType,
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

const logOpenPage = async (category) => {
  await logEvent({
    category: "OPEN_TAB",
    action: `${category.toUpperCase()}_OPEN`,
  });
};

const logRecommendAppShow = async () => {
  await logEvent({
    category: "RECOMMEND",
    action: "SHOW_MODAL",
  });
};
const logRecommendAppSent = async (type) => {
  await logEvent({
    category: "RECOMMEND",
    action: "SENT",
    type,
  });
};
const logRecommendAppDismissed = async () => {
  await logEvent({
    category: "RECOMMEND",
    action: "DISMISSED",
  });
};
const logRecommendAppError = async () => {
  await logEvent({
    category: "RECOMMEND",
    action: "ERROR",
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
  logFeelingAdd,
  logFeelingSubmitSurvey,
  getUserId,
  logNPSOpen,
  logNPSSend,
  logUserTypeSelect,
  logFeelingStartYesterday,
  logProNPSSend,
  logNPSUsefulSend,
  logEditNoteDiary,
  logDeleteNoteDiary,
  logOpenPage,
  logFeelingEditButtonClick,
  logFeelingStartFloatingPlus,
  logFeelingStartFromRecap,
  logRecommendAppShow,
  logRecommendAppSent,
  logRecommendAppDismissed,
  logRecommendAppError,
  logPushNotifTokenRegisterSuccess,
  logPushNotifTokenRegisterError,
  logPushNotifReceiveClicked,
};
