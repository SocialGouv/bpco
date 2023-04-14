import React, { useContext } from "react";
import Consulted from "./Consulted";
import ConsultedDetails from "./ConsultedDetails";
import { createStackNavigator } from "@react-navigation/stack";
import ConsultedResult from "./ConsultedResult";
import { ConsultedDataContext } from "../../context/consultedData";
import { formatDay } from "../../utils/date/helpers";

const ConsultedRouter = ({ navigation, route }) => {
  const [consultedData, setConsultedData] = useContext(ConsultedDataContext);
  const alertLevel = route.params.alertLevel;
  const alertDate = route.params.alertDate;

  const submitAnswer = async (answer) => {
    const currentConsultedAnswer = {
      date: formatDay(new Date(alertDate)),
      data: {
        _version: 1,
        created_at: new Date(),
        consulted_answer: answer,
      },
    };
    setConsultedData(currentConsultedAnswer);
    // logEvents.logSurveyValidate();
    // logEvents.logSurveyScore(score);
    // logEvents.logSurveyAlert(alert);
  };

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={"Consulted"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={"Consulted"}
        component={Consulted}
        initialParams={{ alertLevel, alertDate, submitAnswer }}
      />
      <Stack.Screen
        name={"ConsultedDetails"}
        component={ConsultedDetails}
        initialParams={{ submitAnswer }}
      />
      <Stack.Screen name={"ConsultedResult"} component={ConsultedResult} />
    </Stack.Navigator>
  );
};

export default ConsultedRouter;
