import React from "react";
import { View, ScrollView } from "react-native";
import Text from "../../components/MyText";
import Button from "../../components/Button";
import localStorage from "../../utils/localStorage";
import { onboardingStyles } from "./styles";
import { StickyButtonContainer } from "./components/StickyButton";
import { OnboardingBackButton } from "./components/BackButton";
import { SafeAreaViewWithOptionalHeader } from "./ProgressHeader";
import Rocket from "../../../assets/onboarding/Rocket";

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
        <View style={onboardingStyles.containerCentered}>
          <View style={onboardingStyles.imageContainer}>
            <Rocket />
          </View>
          <View style={onboardingStyles.containerBottom}>
            <View style={onboardingStyles.containerBottomTitle}>
              <Text className="text-primary text-2xl tablet:text-2xl font-[Karla-Bold] text-center">
                Vous êtes prêt(e) à réaliser votre suivi
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StickyButtonContainer>
        <Button
          onPress={async () => {
            await localStorage.setOnboardingDone(true);
            await localStorage.setIsFirstAppLaunch(false);
            return navigation.replace("day-survey");
          }}
          title="Je démarre"
        />
      </StickyButtonContainer>
    </SafeAreaViewWithOptionalHeader>
  );
};

export default Onboarding;
