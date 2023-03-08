import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Dimensions,
} from "react-native";
import Text from "../../components/MyText";
import Button from "../../components/Button";
import localStorage from "../../utils/localStorage";
import { ONBOARDING_STEPS } from "../../utils/constants";
import { onboardingStyles } from "../onboarding/styles";
import { StickyButtonContainer } from "../onboarding/components/StickyButton";
import { SafeAreaViewWithOptionalHeader } from "../onboarding/ProgressHeader";
import { OnboardingBackButton } from "../onboarding/components/BackButton";
import AlertSVG from "../../../assets/onboarding/Alert";
import { colors } from "../../utils/colors";

const SetWarnFamily = ({ navigation, route }) => {
  const inOnboarding = route.params?.inOnboarding === true;
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    (async () => {
      const existingPhoneNumber = await localStorage.getFamilyPhoneNumber();
      if (existingPhoneNumber) setPhoneNumber(existingPhoneNumber);
      if (inOnboarding)
        await localStorage.setOnboardingStep(
          ONBOARDING_STEPS.STEP_SET_WARN_FAMILY
        );
    })();
  }, []);

  const handlePress = async () => {
    // TODO: save phoneNumber
    await localStorage.setFamilyPhoneNumber(phoneNumber);
    navigation.navigate(
      inOnboarding ? ONBOARDING_STEPS.STEP_FELICITATIONS : "tabs"
    );
  };

  const iconSize = Dimensions.get("window").width < 640 ? "50" : "70";

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
          <Text className="text-primary text-2xl tablet:text-4xl font-[Karla-Bold] text-center">
            En cas de seuil d’alerte
          </Text>
          {/* <View style={onboardingStyles.imageContainer}> */}
          <View className="flex flex-row justify-center items-center my-5 tablet:my-8">
            <AlertSVG width={iconSize} height={iconSize} />
          </View>

          <Text className="text-gray-800 text-xl tablet:text-3xl max-w-xl mx-auto text-center">
            vous avez la possibilité de prévenir un proche directement depuis
            l’application afin qu’il reçoive un SMS.
          </Text>

          <Text
            // style={[onboardingStyles.presentationText, onboardingStyles.center]}
            className="mt-14 mb-5 text-gray-800 mx-auto text-lg tablet:text-2xl"
          >
            Indiquer un numéro de téléphone
          </Text>
          <TextInput
            className="border-2 border-gray-700 rounded-3xl w-5/6 max-w-xl mx-auto text-primary font-[Karla-Bold] text-3xl tablet:text-4xl text-center py-2"
            onChangeText={(e) => {
              setPhoneNumber(e);
            }}
            value={phoneNumber}
            placeholder={"06 ..."}
            placeholderTextColor="lightgrey"
            inputMode="tel"
            keyboardType="phone-pad"
          />
        </View>
      </ScrollView>
      <StickyButtonContainer>
        <Button
          title={`Je valide`}
          onPress={handlePress}
          buttonStyle={{ minWidth: 0 }}
          disabled={phoneNumber.length < 10}
        />
        {inOnboarding && (
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text className="text-lg text-[#1f2937] tablet:text-2xl">
              Je le ferai plus tard
            </Text>
          </TouchableOpacity>
        )}
      </StickyButtonContainer>
    </SafeAreaViewWithOptionalHeader>
  );
};

export default SetWarnFamily;

const styles = StyleSheet.create({
  phoneText: {
    color: colors.DARK_BLUE,
    fontFamily: "Karla-Bold",
    fontSize: 35,
    textAlign: "center",
    paddingVertical: 10,
  },
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFF",
    minWidth: "70%",
    minHeight: 45,
    borderRadius: 45,
    borderWidth: 1,
    borderColor: "#d1d5db",
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
  },
  buttonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#1f2937",
  },
});
