import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../components/MyText";
import logEvents from "../../services/logEvents";

export const ConsultedBooleanInput = ({
  center = true,
  navigation,
  submitAnswer,
}) => {
  return (
    <View
      className={`flex flex-row ${
        center ? "justify-center" : "justify-start"
      } gap-12 items-center pt-5`}
    >
      <TouchableOpacity
        onPress={() => {
          // logEvents.logConsultedAnswer("yes");
          navigation.navigate("ConsultedDetails");
        }}
      >
        <View
          className={`flex justify-center h-14 px-8 rounded-full border border-[#26387C]`}
        >
          <Text className={`text-2xl text-[#26387C]`}>Oui</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          submitAnswer("no");
          navigation.navigate("ConsultedResult", { answered: false });
        }}
      >
        <View
          className={`flex justify-center h-14 px-8 rounded-full border border-[#26387C]`}
        >
          <Text className={`text-2xl text-[#26387C]`}>Non</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
