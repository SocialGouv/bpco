import React from "react";
import { View, ScrollView } from "react-native";
import Text from "../../components/MyText";
import Button from "../../components/Button";
import localStorage from "../../utils/localStorage";
import { ONBOARDING_STEPS } from "../../utils/constants";
import OxygenBottle from "../../../assets/onboarding/OxygenBottle";
import VentilationDevice from "../../../assets/onboarding/VentilationDevice";
import { onboardingStyles } from "./styles";
import { StickyButtonContainer } from "./components/StickyButton";
import { SafeAreaViewWithOptionalHeader } from "./ProgressHeader";
import { OnboardingBackButton } from "./components/BackButton";

const Explanation = ({ navigation }) => {
  React.useEffect(() => {
    (async () => {
      await localStorage.setOnboardingStep(
        ONBOARDING_STEPS.STEP_REMINDER_MORE_SETTINGS
      );
    })();
  }, []);

  const handlePress = () => {
    navigation.navigate(ONBOARDING_STEPS.STEP_SET_WARN_FAMILY);
  };

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
            <OxygenBottle />
          </View>
          <Text style={onboardingStyles.centeredBoldText}>
            Avez-vous au quotidien besoin d’oxygène
          </Text>
          {/* YesNo / Boolean */}
          <View style={onboardingStyles.imageContainer}>
            <VentilationDevice />
          </View>
          <Text style={onboardingStyles.centeredBoldText}>
            Avez-vous un appareil de ventilation ?
          </Text>
          {/* YesNo / Boolean */}
        </View>
      </ScrollView>
      <StickyButtonContainer>
        <Button
          title={`Suivant`}
          onPress={handlePress}
          buttonStyle={{ minWidth: 0 }}
        />
      </StickyButtonContainer>
    </SafeAreaViewWithOptionalHeader>
  );
};

export default Explanation;
