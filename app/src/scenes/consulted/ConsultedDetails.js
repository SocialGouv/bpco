import React, { useContext, useEffect, useState } from "react";
import { View, ScrollView } from "react-native";
import Text from "../../components/MyText";
import { onboardingStyles } from "../onboarding/styles";
import { SafeAreaViewWithOptionalHeader } from "../onboarding/ProgressHeader";
import PhoneSuiviSvg from "../../../assets/PhoneSuivi";
import dayjs from "dayjs";
import { Button2 } from "../../components/Button2";
import CloseButton from "../../components/CloseButton";
dayjs.locale("fr");

const ConsultedDetails = ({ navigation, route }) => {
  const submitAnswer = (answer) => {
    route.params.submitAnswer(answer);
    navigation.navigate("ConsultedResult", { answered: true });
  };

  return (
    <SafeAreaViewWithOptionalHeader style={onboardingStyles.safe}>
      <View
        style={{
          ...onboardingStyles.topContainer,
          flexDirection: "row-reverse",
        }}
      >
        <CloseButton
          onPress={() => {
            navigation.navigate("tabs");
          }}
        />
      </View>
      <ScrollView
        style={onboardingStyles.scroll}
        contentContainerStyle={onboardingStyles.scrollContentContainer}
      >
        <View style={onboardingStyles.containerCentered}>
          <View style={onboardingStyles.imageContainer}>
            <PhoneSuiviSvg />
          </View>
          <Text className="text-primary tablet:pb-4 text-2xl tablet:text-4xl font-[Karla-Bold] text-center">
            Mon suivi
          </Text>
          <View className="mt-10">
            <Button2
              fill
              preset="secondary"
              style={{ marginBottom: 20 }}
              title="J’ai appelé"
              onPress={() => {
                submitAnswer("phone");
              }}
            />
            <Button2
              fill
              preset="secondary"
              style={{ marginBottom: 20 }}
              title="J’ai pris RDV"
              secondaryText="(médecins traitants / pneumologues / structures d’urgence)"
              onPress={() => {
                submitAnswer("RDV");
              }}
            />
            <Button2
              fill
              preset="secondary"
              style={{ marginBottom: 20 }}
              title="J’ai consulté"
              onPress={() => {
                submitAnswer("consultation");
              }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaViewWithOptionalHeader>
  );
};

export default ConsultedDetails;
