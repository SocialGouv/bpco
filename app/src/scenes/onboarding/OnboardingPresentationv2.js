import React from "react";
import { View, ScrollView, Image } from "react-native";
import Text from "../../components/MyText";
import Button from "../../components/Button";
import localStorage from "../../utils/localStorage";
import { onboardingStyles } from "./styles";
import { StickyButtonContainer } from "./components/StickyButton";
import { OnboardingBackButton } from "./components/BackButton";
import { SafeAreaViewWithOptionalHeader } from "./ProgressHeader";
import { ONBOARDING_STEPS } from "../../utils/constants";

const Onboarding = ({ navigation }) => {
  return (
    <SafeAreaViewWithOptionalHeader style={onboardingStyles.safe}>
      <View style={onboardingStyles.topContainer}>
        <OnboardingBackButton onPress={navigation.goBack} />
      </View>
      <ScrollView
        style={onboardingStyles.scroll}
        contentContainerStyle={onboardingStyles.scrollContentContainer}
      >
        <View className="p-10 items-center">
          <Image
            source={require("../../../assets/imgs/adaptive-icon.png")}
            className="w-56 h-56"
          />
          <Text className="text-[32px] text-[#3BB678] font-[Karla-Extra-Bold]">
            BPCO'Mieux
          </Text>
          <Text className="text-[17px] leading-5 text-primary text-center font-[Karla-Bold]">
            Le compagnon numérique dédié aux patients atteints de{" "}
            <Text className="text-[#3BB678]">B</Text>
            roncho<Text className="text-[#3BB678]">P</Text>neumopathie{" "}
            <Text className="text-[#3BB678]">C</Text>hronique{" "}
            <Text className="text-[#3BB678]">O</Text>bstructive
          </Text>
          <View className="my-4" />
          <Text className="text-[#FF914D] text-[17px] leading-5 font-[Karla-Bold]">100% gratuit</Text>
          <Text className="text-[#FF914D] text-[17px] leading-5 font-[Karla-Bold]">100% anonyme</Text>
          <Text className="text-[#FF914D] text-[17px] leading-5 font-[Karla-Bold]">Aucune récupération de données</Text>
        </View>
      </ScrollView>
      <StickyButtonContainer>
        <Button
          onPress={() => {
            navigation.navigate(ONBOARDING_STEPS.STEP_HOW_IT_WORKS);
          }}
          title="Suivant"
        />
      </StickyButtonContainer>
    </SafeAreaViewWithOptionalHeader>
  );
};

export default Onboarding;
