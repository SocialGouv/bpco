import { computeHasOxygen } from "../../utils";
import {
  icons,
  colors as colorsFromConstant,
  iconBorderColors,
  iconColors,
  questionsScores,
} from "../../utils/constants";

// todo : refacto answers
export const answers = [
  {
    score: 1,
    backgroundColor: colorsFromConstant.veryBad,
    inactiveBackgroundColor: colorsFromConstant.veryBadTrans,
    iconColor: iconColors.veryBad,
    inactiveIconColor: "#666666",
    borderColor: iconBorderColors.veryBad,
    icon: icons.veryBad,
  },
  {
    score: 2,
    backgroundColor: colorsFromConstant.middle,
    inactiveBackgroundColor: colorsFromConstant.middleTrans,
    iconColor: iconColors.middle,
    inactiveIconColor: "#666666",
    borderColor: iconBorderColors.middle,
    icon: icons.middle,
  },
  {
    score: 3,
    backgroundColor: colorsFromConstant.veryGood,
    inactiveBackgroundColor: colorsFromConstant.veryGoodTrans,
    iconColor: iconColors.veryGood,
    inactiveIconColor: "#666666",
    borderColor: iconBorderColors.veryGood,
    icon: icons.veryGood,
  },
];

export const computeResult = async (answers, yesterdayDiaryData) => {
  const score = await computeScore(answers, yesterdayDiaryData);
  const alert = await computeAlert(score);
  return { score, alert };
};

const computeScore = async (answers, yesterdayDiaryData) => {
  const oxygen = await computeHasOxygen();
  let score = Object.entries(answers).reduce((acc, answer) => {
    const questionScore = questionsScores[answer[0]];
    const type = questionScore.type;
    if (type === "boolean") {
      return (
        acc +
        (answer[1] ? questionScore[oxygen ? "withOxygen" : "withoutOxygen"] : 0)
      );
    }
    if (type === "smiley") {
      return (
        acc +
        questionScore[oxygen ? "withOxygen" : "withoutOxygen"][answer[1] - 1]
      );
    }
    console.error("ERROR: unknown question type", type);
    return acc;
  }, 0);
  const orangeYesterday =
    yesterdayDiaryData &&
    (yesterdayDiaryData?.alert === "orange" ||
      yesterdayDiaryData?.alert === "red");
  if (orangeYesterday) score += 3;
  return score;
};

const computeAlert = async (score) => {
  if (typeof score !== "number") return "";
  if (score <= 5) return "green";
  if (score < 10) return "orange"; // TODO: validate treshold
  return "red";
};
