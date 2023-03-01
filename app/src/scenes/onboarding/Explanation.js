import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
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
import { colors } from "../../utils/colors";
import AlertComponent from "../../components/alerts";

const Explanation = ({ navigation }) => {
  React.useEffect(() => {
    (async () => {
      await localStorage.setOnboardingStep(ONBOARDING_STEPS.STEP_EXPLANATION);
    })();
  }, []);

  const handlePress = () => {
    navigation.navigate(ONBOARDING_STEPS.STEP_SET_WARN_FAMILY, {
      inOnboarding: true,
    });
  };

  return (
    <SafeAreaViewWithOptionalHeader style={onboardingStyles.safe}>
      <ScrollView
        style={onboardingStyles.scroll}
        contentContainerStyle={onboardingStyles.scrollContentContainer}
      >
        <View style={styles.header}>
          <Text className="text-BLUE text-xl tablet:text-4xl font-[Karla-Bold] text-center">
            Comprendre les niveaux d’alerte et réagir immédiatement
          </Text>
        </View>

        <View style={onboardingStyles.container}>
          <Text className="text-BLUE text-xl tablet:text-3xl max-w-2xl tablet:mb-5 mx-auto text-center">
            Il existe{" "}
            <Text style={onboardingStyles.bold}>trois niveaux d’alerte</Text> en
            fonction de votre état de santé respiratoire.
          </Text>
          <View style={styles.spacer} />
          <AlertComponent alert={"green"} />
          <View style={styles.spacerSmall} />
          <AlertComponent alert={"orange"} />
          <View style={styles.spacerSmall} />
          <AlertComponent alert={"red"} />
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

const styles = StyleSheet.create({
  spacer: {
    height: 30,
  },
  spacerSmall: {
    height: 20,
  },
  header: {
    marginTop: 10,
    alignItems: "center",
  },
  title: {
    color: colors.BLUE,
    fontSize: 22,
    fontFamily: "Karla-Bold",
    textAlign: "center",
  },
  subtitle: {
    color: colors.DARK_BLUE,
    paddingBottom: 10,
    paddingTop: 10,
    fontWeight: "normal",
  },
});
