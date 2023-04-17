import React from "react";
import { View, ScrollView } from "react-native";
import Text from "../../components/MyText";
import { onboardingStyles } from "../onboarding/styles";
import { SafeAreaViewWithOptionalHeader } from "../onboarding/ProgressHeader";
import PhoneSuiviSvg from "../../../assets/PhoneSuivi";
import dayjs from "dayjs";
import { StickyButtonContainer } from "../onboarding/components/StickyButton";
import Button from "../../components/Button";
import HandsHeartSvg from "../../../assets/HandsHeart";
dayjs.locale("fr");

const ConsultedResult = ({ navigation, route }) => {
  const answered = route.params.answered;

  return (
    <SafeAreaViewWithOptionalHeader className="bg-white flex">
      <ScrollView className="flex" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-center items-stretch px-4 flex flex-grow">
          <View className="my-5 justify-center align-center flex flex-row">
            {answered ? <HandsHeartSvg /> : <PhoneSuiviSvg />}
          </View>
          <Text className="text-primary tablet:pb-4 text-2xl tablet:text-4xl font-[Karla-Bold] text-center mb-20">
            Mon suivi
          </Text>
          {answered ? (
            <Text className="text-xl tablet:text-2xl max-w-xl mx-auto text-center my-4">
              Merci d’avoir répondu !{"\n"}Vous êtes un peu plus acteur de votre
              maladie
            </Text>
          ) : (
            <Text className="text-xl tablet:text-2xl max-w-xl mx-auto text-center my-4">
              Dans le cadre de votre suivi, votre compagnon numérique est là
              pour vous aider.
              {"\n\n"}Soyez vigilant !
            </Text>
          )}
        </View>
      </ScrollView>
      <StickyButtonContainer>
        <Button
          title={`Je valide`}
          onPress={() => navigation.navigate("tabs")}
          buttonStyle={{ minWidth: 0 }}
        />
      </StickyButtonContainer>
    </SafeAreaViewWithOptionalHeader>
  );
};

export default ConsultedResult;
