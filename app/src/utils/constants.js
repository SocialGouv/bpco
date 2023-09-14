export const icons = {
  veryGood: "VeryGoodSvg",
  good: "GoodSvg",
  middle: "MiddleSvg",
  bad: "BadSvg",
  veryBad: "VeryBadSvg",
  today: "TodaySvg",
  yesterday: "YesterdaySvg",
  notes: "NotesSvg",
};

export const colors = {
  veryBad: "#F16B6B",
  bad: "#FEAA5B",
  middle: "#F2F478",
  good: "#ACF352",
  veryGood: "#5DEE5A",
  veryBadTrans: "#fdcccc",
  badTrans: "#fbd8b8",
  middleTrans: "#fbe79c",
  goodTrans: "#f1f491",
  veryGoodTrans: "#edfaca",
};

export const iconBorderColors = {
  veryBad: "#D13E3E",
  bad: "#E7770F",
  middle: "#F0DF49",
  good: "#7CCF12",
  veryGood: "#0FC321",
};

export const iconColors = {
  veryBad: "#840707",
  bad: "#744519",
  middle: "#6C630C",
  good: "#496300",
  veryGood: "#1A6300",
};

export const scoresMapIcon = {
  "-1": {
    color: "transparent",
  },
  1: {
    color: colors.veryBad,
    faceIcon: icons.veryBad,
    borderColor: iconBorderColors.veryBad,
    iconColor: iconColors.veryBad,
  },
  2: {
    color: colors.bad,
    faceIcon: icons.bad,
    borderColor: iconBorderColors.bad,
    iconColor: iconColors.bad,
  },
  3: {
    color: colors.middle,
    faceIcon: icons.middle,
    borderColor: iconBorderColors.middle,
    iconColor: iconColors.middle,
  },
  4: {
    color: colors.good,
    faceIcon: icons.good,
    borderColor: iconBorderColors.good,
    iconColor: iconColors.good,
  },
  5: {
    color: colors.veryGood,
    faceIcon: icons.veryGood,
    borderColor: iconBorderColors.veryGood,
    iconColor: iconColors.veryGood,
  },
};

export const colorsMap = Object.keys(colors).map((key) => colors[key]);

export const categoryStates = {
  VERY_GOOD: {
    id: "VERY_GOOD",
    level: 5,
    icon: icons.veryGood,
    color: colors.veryGood,
    label: "Très bien",
  },
  GOOD: {
    id: "GOOD",
    level: 4,
    icon: icons.good,
    color: colors.good,
    label: "Bien",
  },
  MIDDLE: {
    id: "MIDDLE",
    level: 3,
    icon: icons.middle,
    color: colors.middle,
    label: "Moyen",
  },
  BAD: {
    id: "BAD",
    level: 2,
    icon: icons.bad,
    color: colors.bad,
    label: "Mauvais",
  },
  VERY_BAD: {
    id: "VERY_BAD",
    level: 1,
    icon: icons.veryBad,
    color: colors.veryBad,
    label: "Très mauvais",
  },
};

export const categories = {
  MOOD: "MOOD",
  ANXIETY: "ANXIETY",
  BADTHOUGHTS: "BADTHOUGHTS",
  SENSATIONS: "SENSATIONS",
  SLEEP: "SLEEP",
  DAILYACTIVITIES: "DAILYACTIVITIES",
  COMMUNICATION: "COMMUNICATION",
};
export const reliquatCategories = {
  BADTHOUGHTS_FREQUENCE: "BADTHOUGHTS_FREQUENCE",
  ANXIETY_FREQUENCE: "ANXIETY_FREQUENCE",
  SENSATIONS_FREQUENCE: "SENSATIONS_FREQUENCE",
};

export const displayedCategories = {
  MOOD: "Humeur",
  ANXIETY: "Anxiété",
  BADTHOUGHTS: "Idées parasites",
  SLEEP: "Sommeil",
  SENSATIONS: "Sensations étranges",
  DAILYACTIVITIES: "Faire mes activités quotidiennes",
  COMMUNICATION: "Communication avec mon entourage",
  BADTHOUGHTS_FREQUENCE: "Idées parasites",
  ANXIETY_FREQUENCE: "Anxiété",
  SENSATIONS_FREQUENCE: "Sensations étranges",
};

export const translateCategories = {
  MOOD: "Humeur",
  ANXIETY: "Anxiété",
  BADTHOUGHTS: "Idées parasites",
  SLEEP: "Sommeil",
  SENSATIONS: "Sensations étranges",
  DAILYACTIVITIES: "Faire mes activités quotidiennes",
  COMMUNICATION: "Communication avec mon entourage",
  TOXIC: "Substance",
  CONTEXT: "Contexte",
};

export const surveyDate = {
  YESTERDAY: {
    id: "YESTERDAY",
    icon: icons.yesterday,
    color: "white",
    label: "Hier",
  },
  TODAY: {
    id: "TODAY",
    icon: icons.today,
    color: "white",
    label: "Aujourd'hui",
  },
};

export const frequence = {
  NEVER: {
    id: "NEVER",
    level: 3,
    icon: icons.veryGood,
    color: colors.veryGood,
    label: "Jamais",
  },
  SEVERAL_TIMES: {
    id: "SEVERAL_TIMES",
    level: 2,
    icon: icons.middle,
    color: colors.middle,
    label: "Plusieurs fois",
  },
  MANY_TIMES: {
    id: "MANY_TIMES",
    level: 1,
    icon: icons.veryBad,
    color: colors.veryBad,
    label: "De nombreuses fois",
  },
};

export const intensity = {
  LIGHT: {
    id: "LIGHT",
    level: 3,
    icon: icons.veryGood,
    color: colors.veryGood,
    label: "Légèrement pénible",
  },
  MIDDLE: {
    id: "MIDDLE",
    level: 2,
    icon: icons.middle,
    color: colors.middle,
    label: "Moyennement pénible",
  },
  HIGH: {
    id: "HIGH",
    level: 1,
    icon: icons.veryBad,
    color: colors.veryBad,
    label: "Très pénible",
  },
};

export const DEFAULT_BECK_WHERE_LIST = [
  "À la maison",
  "Au lycée",
  "Dans la rue",
  "Au travail",
];
export const DEFAULT_BECK_WHO_LIST = ["Charles", "Karim", "Inès"];
export const DEFAULT_BECK_EMOTION_LIST = [
  "Anxiété",
  "Colère",
  "Tristesse",
  "Peur",
  "Déception",
  "Culpabilité",
  "Solitude",
  "Honte",
  "Frustration",
  "Jalousie",
];
export const DEFAULT_BECK_SENSATION_LIST = [
  "Tête qui tourne",
  "Larmes aux yeux",
  "Gorge serrée",
  "Poids sur la poitrine",
  "Mal au ventre",
  "Coeur qui bat vite",
  "Chaleur",
  "Froid",
  "Tremblements",
  "Nausée",
  "Souffle court",
];

export const BeckStepTitles = [
  "La situation",
  "La situation",
  "Vos émotions",
  "Vos pensées",
  "Comportement et Résultats",
  "Restructuration",
];

// TODO : make storage keys an object

export const STORAGE_KEY_CONSULTED_RESULTS = "@CONSULTED_RESULTS";
export const STORAGE_KEY_SURVEY_RESULTS = "@SURVEY_RESULTS";
export const STORAGE_KEY_START_DATE = "@SURVEY_DATE";
export const STORAGE_KEY_SYMPTOMS = "@SYMPTOMS";
export const STORAGE_KEY_GOALS = "@GOALS_TMP";
export const STORAGE_KEY_INDICATEURS = "@INDICATEURS";
export const STORAGE_KEY_IS_FIRST_LAUNCH = "@IS_FIRST_LAUNCH";
export const STORAGE_KEY_ONBOARDING_STEP = "@ONBOARDING_STEP";
export const STORAGE_KEY_ONBOARDING_DONE = "@ONBOARDING_DONE";
export const STORAGE_KEY_MEDICAL_TREATMENT = "@MEDICAL_TREATMENT";
export const STORAGE_KEY_USER_TYPE = "@USER_TYPE";
export const STORAGE_KEY_CUSTOM_SYMPTOMS = "@CUSTOM_SYMPTOMS";
export const STORAGE_KEY_NOTES_VERSION = "@NOTES_VERSION";
export const STORAGE_KEY_VISIT_PRO_NPS = "@VISIT_PRO_NPS";
export const STORAGE_KEY_CUSTOM_DRUGS = "@CUSTOM_DRUGS";
export const STORAGE_KEY_IS_BECK_ACTIVATED = "@STORAGE_KEY_IS_BECK_ACTIVATED";
export const STORAGE_KEY_BECK_WHERE_LIST = "@BECK_WHERE_LIST";
export const STORAGE_KEY_BECK_WHO_LIST = "@BECK_WHO_LIST";
export const STORAGE_KEY_BECK_EMOTION_LIST = "@BECK_EMOTION_LIST";
export const STORAGE_KEY_BECK_SENSATION_LIST = "@BECK_SENSATION_LIST";
export const STORAGE_KEY_BECK_SHOW_WELCOME = "@BECK_SHOW_WELCOME_DEFAULT";
export const STORAGE_KEY_DIARY_NOTES = "@DIARY_NOTES";
export const STORAGE_KEY_NPS_PRO_CONTACT = "@NPS_PRO_CONTACT";
export const STORAGE_KEY_PUSH_NOTIFICATION_TOKEN = "@PUSH_NOTIFICATION_TOKEN";
export const STORAGE_KEY_PUSH_NOTIFICATION_TOKEN_ERROR =
  "@PUSH_NOTIFICATION_TOKEN_ERROR";
export const STORAGE_KEY_PNEUMOLOGUE = "@USER_PNEUMOLOGUE";
export const STORAGE_KEY_OXYGEN = "@USER_OXYGEN";
export const STORAGE_KEY_VENTILATION_DEVICE = "@USER_VENTILATION_DEVICE";
export const STORAGE_KEY_REMINDER = "@REMINDER";
export const STORAGE_KEY_FAMILY_PHONE_NUMBER = "@FAMILY_PHONE_NUMBER";
export const STORAGE_KEY_USER_SEX = "@USER_SEX";
export const STORAGE_KEY_USER_BIRTHYEAR = "@USER_BIRTHYEAR";
export const STORAGE_KEY_USER_WEIGHT = "@USER_WEIGHT";
export const STORAGE_KEY_LAST_NPS_SHOWN = "@LAST_NPS_SHOWN";
export const STORAGE_KEY_NEED_SURVEY_FEEDBACK = "@NEED_SURVEY_FEEDBACK";

export const ONBOARDING_STEPS = {
  STEP_PRESENTATION: "STEP_PRESENTATION",
  STEP_HOW_IT_WORKS: "STEP_HOW_IT_WORKS",
  STEP_USER_TYPE: "STEP_USER_TYPE",
  STEP_OXYGEN: "STEP_OXYGEN",
  STEP_REMINDER: "STEP_REMINDER",
  STEP_REMINDER_MORE_SETTINGS: "STEP_REMINDER_MORE_SETTINGS",
  STEP_SET_WARN_FAMILY: "STEP_SET_WARN_FAMILY",
  STEP_EXPLANATION: "STEP_EXPLANATION",
  STEP_FELICITATIONS: "STEP_FELICITATIONS",
};

export const MATOMO_DIMENSION = {
  VERSION: 1,
  SYSTEM: 2,
  USER_TYPE: 3,
  USER_SEX: 4,
  USER_BIRTHYEAR: 5,
  USER_WEIGHT: 6,
};

export const USER_TYPES = {
  suivi_recommande: "suivi_recommande",
  suivi_non_recommande: "suivi_non_recommande",
  sans_suivi: "sans_suivi",
  pro: "pro",
  autres: "autres",
  suivi_recommande_generaliste: "suivi_recommande_generaliste",
  suivi_recommande_pneumologue: "suivi_recommande_pneumologue",
  recommande_reseau: "recommande_reseau",
  recommande_moi_meme: "recommande_moi_meme",
};

export const questionsScores = {
  "fe53d77d-f434-405d-96ae-d664cf92113a": {
    name: "Plus de toux ?",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
    withOxygen: 1,
    withoutOxygen: 2,
  },
  "ecb26c1a-8d4a-4b19-84eb-1ff3eefb0619": {
    name: "Crachats + importants ou + verts ?",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
    withOxygen: 1,
    withoutOxygen: 1,
  },
  "df328401-e88b-4226-95ea-2a6780940afb": {
    name: "Plus de fatigue en général ?",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
    withOxygen: 1,
    withoutOxygen: 1,
  },
  "f5f58308-f78b-4ba6-a933-02979cbaf864": {
    name: "Plus d’essoufflement pour les mêmes efforts ?",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
    withOxygen: 1,
    withoutOxygen: 2,
  },
  "aaa71e2b-9308-4240-bac4-d0cda013017d": {
    name: "Plus de sueurs ?",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
    withOxygen: 1,
    withoutOxygen: 1,
  },
  "0c1eb277-3f09-406a-9c23-bd77acf978ba": {
    name: "Plus de mal à respirer allongé(e) ?",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
    withOxygen: 2,
    withoutOxygen: 2,
  },
  "4734d5a4-aa44-4b3e-a292-88a08fd16923": {
    name: "Les doigts d’une couleur différente ?",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
    withOxygen: 1,
    withoutOxygen: 1,
  },
  "03e034f7-b7fa-41cb-9f07-4415ef7354ca": {
    name: "Plus de difficultés à marcher ?",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
    withOxygen: 1,
    withoutOxygen: 1,
  },
  "a8acc717-2fdb-496d-94f8-75a7945dadfe": {
    name: "Plus d’oxygène ou dû faire + de ventilation ?",
    category: "2",
    type: "boolean",
    disabledWithoutOxygen: true,
    withOxygen: 2,
    withoutOxygen: 0, // not used
  },
  "45e77c87-8909-454f-b31f-2957e1921d8c": {
    name: "Plus souvent vos aérosols ?",
    category: "2",
    type: "boolean",
    disabledWithoutOxygen: false,
    withOxygen: 2,
    withoutOxygen: 2,
  },
  "071ce2c0-4bf6-4b85-9931-1b0668a01646": {
    name: "Qualifier votre essoufflement ",
    category: "3",
    type: "smiley",
    disabledWithoutOxygen: false,
    withOxygen: [0, 1, 2],
    withoutOxygen: [0, 1, 2],
  },
  "8032ca3d-8a74-4630-b532-d8699d35a45a": {
    name: "Comment avez-vous dormi la nuit dernière ?",
    category: "3",
    type: "smiley",
    disabledWithoutOxygen: false,
    withOxygen: [0, 1, 2],
    withoutOxygen: [0, 1, 2],
  },
};

// todo : change categorie ?
export const questions = [
  {
    name: "Plus de toux ?",
    uuid: "fe53d77d-f434-405d-96ae-d664cf92113a",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
  },
  {
    name: "Crachats + importants ou + verts ?",
    uuid: "ecb26c1a-8d4a-4b19-84eb-1ff3eefb0619",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
  },
  {
    name: "Plus de sueurs ?",
    uuid: "aaa71e2b-9308-4240-bac4-d0cda013017d",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
  },
  {
    name: "Les doigts d’une couleur différente ?",
    uuid: "4734d5a4-aa44-4b3e-a292-88a08fd16923",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
  },
  {
    name: "Plus de fatigue en général ?",
    uuid: "df328401-e88b-4226-95ea-2a6780940afb",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
  },
  {
    name: "Plus d’essoufflement pour les mêmes efforts ?",
    uuid: "f5f58308-f78b-4ba6-a933-02979cbaf864",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
  },
  {
    name: "Plus de difficultés à marcher ?",
    uuid: "03e034f7-b7fa-41cb-9f07-4415ef7354ca",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
  },
  {
    name: "Plus de mal à respirer allongé(e) ?",
    uuid: "0c1eb277-3f09-406a-9c23-bd77acf978ba",
    category: "1",
    type: "boolean",
    disabledWithoutOxygen: false,
  },
  {
    name: "Plus d’oxygène ou dû faire + de ventilation ?",
    uuid: "a8acc717-2fdb-496d-94f8-75a7945dadfe",
    category: "2",
    type: "boolean",
    disabledWithoutOxygen: true,
  },
  {
    name: "Plus souvent vos aérosols ?",
    uuid: "45e77c87-8909-454f-b31f-2957e1921d8c",
    category: "2",
    type: "boolean",
    disabledWithoutOxygen: false,
  },
  {
    name: "Qualifier votre essoufflement ",
    uuid: "071ce2c0-4bf6-4b85-9931-1b0668a01646",
    category: "3",
    type: "smiley",
    disabledWithoutOxygen: false,
  },
  {
    name: "Comment avez-vous dormi la nuit dernière ?",
    uuid: "8032ca3d-8a74-4630-b532-d8699d35a45a",
    category: "3",
    type: "smiley",
    disabledWithoutOxygen: false,
  },
];
