import React, { useEffect, useState } from "react";
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
import { BooleanInput } from "./components/BooleanInput";
import { colors } from "../../utils/colors";
import logEvents from "../../services/logEvents";

const Explanation = ({ navigation }) => {
  const [answerPneumologue, setAnswerPneumologue] = useState(null);
  const [answerOxygen, setAnswerOxygen] = useState(null);
  const [answerVentilationDevice, setAnswerVentilationDevice] = useState(null);
  const [disabled, setDisabled] = useState(true);

  useEffect(() => {
    (async () => {
      const oxygenStorage = await localStorage.getOxygen();
      if (oxygenStorage !== undefined) setAnswerOxygen(oxygenStorage);
      const pneumologueStorage = await localStorage.getPneumologue();
      if (pneumologueStorage !== undefined)
        setAnswerPneumologue(pneumologueStorage);
      const ventilationDevice = await localStorage.getVentilationDevice();
      if (ventilationDevice !== undefined)
        setAnswerVentilationDevice(ventilationDevice);
      await localStorage.setOnboardingStep(ONBOARDING_STEPS.STEP_OXYGEN);
      if (
        oxygenStorage !== undefined &&
        ventilationDevice !== undefined &&
        pneumologueStorage !== undefined
      )
        setDisabled(false);
    })();
  }, []);

  const submit = () => {
    localStorage.setPneumologue(answerPneumologue);
    localStorage.setOxygen(answerOxygen);
    localStorage.setVentilationDevice(answerVentilationDevice);
    logEvents.logUserPneumologueSelect(answerPneumologue);
    logEvents.logUserOxygenSelect(answerOxygen);
    logEvents.logUserVentilationDeviceSelect(answerVentilationDevice);
    navigation.navigate(ONBOARDING_STEPS.STEP_REMINDER, { inOnboarding: true });
  };

  const handlePressOxygen = (value) => {
    setAnswerOxygen(value);
    logEvents.logUserOxygenClick(value);
    if (answerVentilationDevice !== null && answerPneumologue !== null)
      setDisabled(false);
  };
  const handlePressPneumologue = (value) => {
    setAnswerPneumologue(value);
    logEvents.logUserPneumologueClick(value);
    if (answerOxygen !== null && answerVentilationDevice !== null)
      setDisabled(false);
  };
  const handlePressVentilationDevice = (value) => {
    setAnswerVentilationDevice(value);
    logEvents.logUserVentilationDeviceClick(value);
    if (answerOxygen !== null && answerPneumologue !== null) setDisabled(false);
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
        <View style={onboardingStyles.container}>
          <View style={styles.header}>
            <Text className="text-primary pb-4 tablet:pb-6 text-2xl tablet:text-4xl font-[Karla-Bold]">
              Faisons connaissance
            </Text>
          </View>
          <Text className="text-center text-xl text-gray-900">
            Êtes-vous suivi actuellement par un pneumologue?
          </Text>
          <BooleanInput
            center
            value={answerPneumologue}
            onChange={handlePressPneumologue}
          />
          <View style={onboardingStyles.imageContainer}>
            <OxygenBottle />
          </View>
          <Text className="text-center text-xl text-gray-900">
            Avez-vous au quotidien besoin d’oxygène ?
          </Text>
          <BooleanInput
            center
            value={answerOxygen}
            onChange={handlePressOxygen}
          />
          <View style={onboardingStyles.imageContainer}>
            <VentilationDevice />
          </View>
          <Text className="text-center text-xl text-gray-900">
            Avez-vous un appareil de ventilation ?
          </Text>
          <BooleanInput
            center
            value={answerVentilationDevice}
            onChange={handlePressVentilationDevice}
          />
        </View>
      </ScrollView>
      <StickyButtonContainer>
        <Button
          disabled={disabled}
          title={`Suivant`}
          onPress={submit}
          buttonStyle={{ minWidth: 0 }}
        />
      </StickyButtonContainer>
    </SafeAreaViewWithOptionalHeader>
  );
};

export default Explanation;

const styles = StyleSheet.create({
  header: {
    marginTop: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  title: {
    color: colors.BLUE,
    fontSize: 28,
    marginBottom: 20,
    paddingBottom: 15,
    fontFamily: "Karla-Bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    color: colors.DARK_BLUE,
    paddingBottom: 10,
    paddingTop: 10,
    fontWeight: "normal",
  },
});
