import React, { useContext } from "react";
import Consulted from "./Consulted";
import ConsultedDetails from "./ConsultedDetails";
import { createStackNavigator } from "@react-navigation/stack";
import ConsultedResult from "./ConsultedResult";
import { ConsultedDataContext } from "../../context/consultedData";
import { formatDay } from "../../utils/date/helpers";
import logEvents from "../../services/logEvents";

const ConsultedRouter = ({ route }) => {
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
  };

  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={"Consulted"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={"Consulted"}
        initialParams={{ alertLevel, alertDate }}
      >
        {(p) => <Consulted {...p} submitAnswer={submitAnswer} />}
      </Stack.Screen>
      <Stack.Screen name={"ConsultedDetails"}>
        {(p) => <ConsultedDetails {...p} submitAnswer={submitAnswer} />}
      </Stack.Screen>
      <Stack.Screen name={"ConsultedResult"} component={ConsultedResult} />
    </Stack.Navigator>
  );
};

export default ConsultedRouter;
