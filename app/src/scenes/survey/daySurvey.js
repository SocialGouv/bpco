import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  Platform,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import { CommonActions } from "@react-navigation/native";
import Text from "../../components/MyText";
import { colors } from "../../utils/colors";
import { beforeToday, formatDay } from "../../utils/date/helpers";
import { computeNewSurveyAvailable } from "../../utils";
import { DiaryDataContext } from "../../context/diaryData";
import { useFocusEffect } from "@react-navigation/native";
import { Screen } from "../../components/Screen";
import { Button2 } from "../../components/Button2";
import { SurveyItem } from "./components/SurveyItem";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { questions } from "../../utils/constants";
import { computeHasOxygen } from "../../utils";
import { computeResult } from "./utils";
import logEvents from "../../services/logEvents";
import localStorage from "../../utils/localStorage";

const DaySurvey = ({ navigation, route }) => {
  const [diaryData, setDiaryData] = useContext(DiaryDataContext);
  const [hasOxygen, setHasOxygen] = useState(true);
  const [answers, setAnswers] = useState({});

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const needSurveyFeedback = await localStorage.getNeedSurveyFeedback();
        const needSurveyFeedbackItem = (needSurveyFeedback || []).find(
          (e) => e.date !== dayjs().format("YYYY-MM-DD")
        );
        if (needSurveyFeedbackItem) {
          return navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [
                {
                  name: "consulted-after-alert",
                  params: {
                    alertLevel: needSurveyFeedbackItem.data.survey_alert,
                    alertDate: needSurveyFeedbackItem.date,
                    previousScreen: "day-survey",
                  },
                },
              ],
            })
          );
        }
        const userHasOxygen = await computeHasOxygen();
        setHasOxygen(userHasOxygen);
      })();
    }, [])
  );

  const toggleAnswer = async ({ key, value }) => {
    setAnswers((prev) => {
      return {
        ...prev,
        [key]: value,
      };
    });
  };

  const submitDay = async () => {
    const yesterdayDiaryData = diaryData[formatDay(beforeToday(1))];
    const yesterdayAlert = yesterdayDiaryData?.survey_alert;
    const { score, alert } = await computeResult({
      todayAnswers: answers,
      yesterdayAlert,
    });
    const currentSurvey = {
      date: formatDay(beforeToday(0)),
      data: {
        _version: 1,
        created_at: new Date(),
        survey_answers: answers,
        survey_score: score,
        survey_alert: alert,
      },
    };
    setDiaryData(currentSurvey);
    logEvents.logSurveyValidate();
    logEvents.logSurveyScore(score);
    logEvents.logSurveyAlert(alert);
    if (["orange", "red"].includes(currentSurvey.data.survey_alert)) {
      await localStorage.addNeedSurveyFeedbackItem(currentSurvey);
    }
    return navigation.push("day-survey-result", { alert });
  };

  const renderTodayDate = () => {
    return (
      dayjs().locale("fr").format("dddd").charAt(0).toUpperCase() +
      dayjs().locale("fr").format("dddd").slice(1) +
      " " +
      dayjs().locale("fr").format("DD MMMM YYYY")
    );
  };

  return (
    <Screen
      containerStyle={{ marginBottom: 15 }}
      header={{
        title: "Mon suivi",
        preventGoBack: true,
      }}
      bottomChildren={
        <Button2
          disabled={
            Object.entries(answers).length <
            questions.filter((question) =>
              hasOxygen ? true : question.disabledWithoutOxygen === false
            ).length
          }
          fill
          title="Valider"
          onPress={submitDay}
        />
      }
      scrollProps={{
        onScrollBeginDrag: Keyboard.dismiss,
      }}
      contentContainerStyle={{ alignItems: "stretch" }}
    >
      <View>
        <View style={{ marginBottom: 8 }}>
          {__DEV__ ? (
            <View className="flex flex-row">
              <TouchableOpacity
                className="p-2 bg-gray-100 text-gray-700"
                onPress={() =>
                  setAnswers({
                    "03e034f7-b7fa-41cb-9f07-4415ef7354ca": true,
                    "071ce2c0-4bf6-4b85-9931-1b0668a01646": 1,
                    "0c1eb277-3f09-406a-9c23-bd77acf978ba": true,
                    "45e77c87-8909-454f-b31f-2957e1921d8c": true,
                    "4734d5a4-aa44-4b3e-a292-88a08fd16923": true,
                    "8032ca3d-8a74-4630-b532-d8699d35a45a": 1,
                    "aaa71e2b-9308-4240-bac4-d0cda013017d": true,
                    "df328401-e88b-4226-95ea-2a6780940afb": true,
                    "ecb26c1a-8d4a-4b19-84eb-1ff3eefb0619": true,
                    "f5f58308-f78b-4ba6-a933-02979cbaf864": true,
                    "fe53d77d-f434-405d-96ae-d664cf92113a": true,
                    "a8acc717-2fdb-496d-94f8-75a7945dadfe": true,
                  })
                }
              >
                <Text>MOCK data RED</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="p-2 bg-gray-100 text-gray-700"
                onPress={() =>
                  setAnswers({
                    "03e034f7-b7fa-41cb-9f07-4415ef7354ca": false,
                    "071ce2c0-4bf6-4b85-9931-1b0668a01646": 1,
                    "0c1eb277-3f09-406a-9c23-bd77acf978ba": false,
                    "45e77c87-8909-454f-b31f-2957e1921d8c": false,
                    "4734d5a4-aa44-4b3e-a292-88a08fd16923": false,
                    "8032ca3d-8a74-4630-b532-d8699d35a45a": 1,
                    "aaa71e2b-9308-4240-bac4-d0cda013017d": false,
                    "df328401-e88b-4226-95ea-2a6780940afb": false,
                    "ecb26c1a-8d4a-4b19-84eb-1ff3eefb0619": false,
                    "f5f58308-f78b-4ba6-a933-02979cbaf864": false,
                    "fe53d77d-f434-405d-96ae-d664cf92113a": false,
                    "a8acc717-2fdb-496d-94f8-75a7945dadfe": false,
                  })
                }
              >
                <Text>MOCK data GREEN</Text>
              </TouchableOpacity>
            </View>
          ) : null}
          <Text style={styles.date}>{renderTodayDate()}</Text>
          <Text style={styles.title}>Par rapport à hier, avez-vous...</Text>
          {questions
            .filter((question) => question.category === "1")
            .map((question) => (
              <SurveyItem
                key={question?.uuid}
                question={question}
                value={answers?.[question?.uuid]}
                onValueChanged={({ question, value }) => {
                  toggleAnswer({ key: question?.uuid, value });
                  logEvents.logSurveyItemClick({
                    questionLabel: question.name,
                    value,
                  });
                }}
              />
            ))}
          <Text style={styles.title}>Par rapport à hier, utilisez-vous...</Text>
          {questions
            .filter((question) => question.category === "2")
            .filter((question) =>
              hasOxygen ? true : !question.disabledWithoutOxygen
            )
            .map((question) => (
              <SurveyItem
                key={question?.uuid}
                question={question}
                value={answers?.[question?.uuid]}
                onValueChanged={({ question, value }) => {
                  {
                    toggleAnswer({ key: question?.uuid, value });
                    logEvents.logSurveyItemClick({
                      questionLabel: question.name,
                      value,
                    });
                  }
                }}
              />
            ))}
          <Text style={styles.title}>Par rapport à hier,</Text>
          {questions
            .filter((question) => question.category === "3")
            .map((question) => (
              <SurveyItem
                key={question?.uuid}
                question={question}
                value={answers?.[question?.uuid]}
                onValueChanged={({ question, value }) => {
                  toggleAnswer({ key: question?.uuid, value });
                  logEvents.logSurveyItemClick({
                    questionLabel: question.name,
                    value,
                  });
                }}
              />
            ))}
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  date: {
    textAlign: "center",
    color: colors.BLUE,
    fontSize: 16,
  },
  title: {
    fontFamily: "Karla-Bold",
    color: colors.DARK_BLUE,
    fontSize: 20,
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  spacing: {
    marginVertical: 8,
  },
  textArea: {
    backgroundColor: "#F4FCFD",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    marginHorizontal: 15,
  },
  selectionContainer: {
    padding: 3,
    borderColor: "#DEF4F5",
    borderWidth: 1,
    borderRadius: 10,
  },
  selectionYesNoContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 40,
    height: 40,
    borderColor: "#DEF4F5",
    borderWidth: 1,
    borderRadius: 99999,
  },
  activeSelectionContainer: {
    backgroundColor: colors.LIGHT_BLUE,
  },
  activeLabel: {
    color: "#fff",
    fontFamily: "Karla-Bold",
  },
  arrowDown: {
    transform: [{ rotate: "180deg" }],
  },
  arrowUp: {
    transform: [{ rotate: "0deg" }],
  },

  buttonValidate: {
    width: "100%",
  },
  divider: {
    height: 1,
    backgroundColor: "rgba(0,183,200, .09)",
    marginTop: 20,
    marginBottom: 10,
    width: "100%",
    alignSelf: "center",
  },
  spacer: {
    height: 120,
  },

  questionContainer: {
    display: "flex",
  },
  questionHeaderContainer: {
    backgroundColor: "#F4FCFD",
    borderColor: "#DEF4F5",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
  },
  questionHeader: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  questionInfo: {
    marginTop: 15,
  },
  questionPoint: {
    height: 16,
    width: 16,
    borderRadius: 8,
    backgroundColor: colors.LIGHT_BLUE,
  },
  questionTitle: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Karla-Bold",
  },
  answerContainer: {
    paddingTop: 10,
    paddingBottom: 15,
    marginLeft: 18, // padding of the header question container + half of the dot size => 10 + 8 = 18
    display: "flex",
    justifyContent: "space-around",
  },
  answersContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 15,
  },
  leftFileAriane: {
    borderLeftColor: "#DEF4F5",
    borderLeftWidth: 2,
  },
  safe: {
    ...(Platform.OS === "android" && {
      paddingTop: (StatusBar.currentHeight || 24) + 10,
    }),
    flex: 1,
    backgroundColor: "white",
  },
  question: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 25,
    backgroundColor: "#F4FCFD",
    borderColor: "#DEF4F5",
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    paddingVertical: 20,
  },
  questionTextContainer: {
    flex: 1,
    marginLeft: 20,
  },
  questionText: {
    color: colors.BLUE,
    fontSize: 22,
    fontFamily: "Karla-Bold",
  },
  linkContainer: {
    backgroundColor: "rgba(31,198,213,0.2)",
    borderColor: colors.LIGHT_BLUE,
    borderWidth: 0.5,
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 15,
    paddingRight: 20,
  },
  linkTextContainer: {
    flex: 1,
    marginHorizontal: 20,
  },
  linkTitle: {
    color: colors.BLUE,
    fontSize: 14,
    fontFamily: "Karla-Bold",
    flex: 1,
    marginBottom: 5,
  },
  linkText: {
    color: colors.BLUE,
    fontSize: 14,
    flex: 1,
  },
  linkButtonContainer: {
    borderRadius: 20,
    backgroundColor: colors.LIGHT_BLUE,
    height: 40,
    width: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    transform: [{ rotate: "90deg" }],
    margin: 7,
  },
  subtitleTop: {
    flex: 1,
    color: colors.LIGHT_BLUE,
    fontSize: 18,
    fontFamily: "Karla-Bold",
    marginTop: 15,
    textAlign: "center",
  },
  subtitle: {
    flex: 1,
    color: "#000",
    fontSize: 15,
    fontWeight: "normal",
    textAlign: "center",
  },
  answer: {
    backgroundColor: "#F4FCFD",
    borderColor: "#D4F0F2",
    marginBottom: 10,
    borderRadius: 10,
    padding: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  answerLabel: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  label: {
    fontWeight: "600",
  },
  container: {
    backgroundColor: "white",
    padding: 20,
    paddingTop: 0,
  },
  backButton: {
    fontFamily: "Karla-Bold",
    textDecorationLine: "underline",
    color: colors.BLUE,
    paddingTop: 15,
    paddingBottom: 30,
  },
  ValidationButton: {
    backgroundColor: colors.LIGHT_BLUE,
    height: 45,
    borderRadius: 45,
    paddingHorizontal: 30,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 15,
  },
  ValidationButtonText: {
    color: "#fff",
    fontFamily: "Karla-Bold",
    fontSize: 19,
  },
  textInput: {
    fontSize: 20,
  },
  bottom: {
    justifyContent: "flex-end",
    marginBottom: 36,
  },
});

export default DaySurvey;
