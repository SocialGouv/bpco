import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView, TouchableOpacity } from "react-native";
import Text from "../../components/MyText";
import { onboardingStyles } from "../onboarding/styles";
import { SafeAreaViewWithOptionalHeader } from "../onboarding/ProgressHeader";
import PhoneSuiviSvg from "../../../assets/PhoneSuivi";
import dayjs from "dayjs";
import { Button2 } from "../../components/Button2";
import CloseButton from "../../components/CloseButton";
import Button from "../../components/Button";
dayjs.locale("fr");

const ConsultedDetails = ({ navigation, route }) => {
  const submitAnswer = (answer) => {
    route.params.submitAnswer(answer);
    navigation.navigate("ConsultedResult", { answered: true });
  };

  return (
    <SafeAreaViewWithOptionalHeader className="bg-white flex">
      <View className="flex flex-row-reverse space-between">
        <CloseButton
          onPress={() => {
            // logEvents.logConsultedAnswer("close");
            navigation.navigate("tabs");
          }}
        />
      </View>
      <ScrollView className="flex" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-center items-stretch px-4 flex-grow">
          <View className="my-5 justify-center align-center flex flex-row">
            <PhoneSuiviSvg />
          </View>
          <Text className="text-primary tablet:pb-4 text-2xl tablet:text-4xl font-[Karla-Bold] text-center">
            Mon suivi
          </Text>
          <View className="mt-10">
            <ButtonDetails
              answer="phone"
              submitAnswer={submitAnswer}
              title={"J’ai appelé"}
            />
            <ButtonDetails
              answer="RDV"
              submitAnswer={submitAnswer}
              title={"J'ai pris RDV"}
              secondaryText="(médecins traitants / pneumologues / structures d’urgence)"
            />
            <ButtonDetails
              answer="consultation"
              submitAnswer={submitAnswer}
              title={"J’ai consulté"}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaViewWithOptionalHeader>
  );
};

export default ConsultedDetails;

const ButtonDetails = ({
  title,
  submitAnswer,
  answer,
  secondaryText = null,
}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        submitAnswer(answer);
      }}
    >
      <View
        className={`flex justify-center py-2 px-8 rounded-[35px] border border-DARK_BLUE mb-5`}
      >
        <Text
          className={`font-[Karla-Bold] text-center text-xl text-DARK_BLUE`}
        >
          {title}
        </Text>
        {!!secondaryText && (
          <View className="mt-1">
            <Text className="text-center text-DARK_BLUE">{secondaryText}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
};
