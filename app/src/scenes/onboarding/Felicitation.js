import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Platform,
  StatusBar,
} from "react-native";
import Text from "../../components/MyText";
import Button from "../../components/Button";
import { colors } from "../../utils/colors";
import localStorage from "../../utils/localStorage";
import { onboardingStyles } from "./styles";
import { StickyButtonContainer } from "./components/StickyButton";
import { OnboardingBackButton } from "./components/BackButton";
import { SafeAreaViewWithOptionalHeader } from "./ProgressHeader";
import Felicitations from "../../../assets/onboarding/Felicitations";
import { computeNewSurveyAvailable } from "../../utils";
import { DiaryDataContext } from "../../context/diaryData";

const Onboarding = ({ navigation }) => {
  const [diaryData] = useContext(DiaryDataContext);

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
            <Felicitations />
          </View>
          <View style={onboardingStyles.containerBottom}>
            <View style={onboardingStyles.containerBottomTitle}>
              <Text className="text-primary text-2xl tablet:text-6xl font-[Karla-Bold] text-center">
                Félicitations !
              </Text>
              <Text className="text-gray-800 text-base tablet:text-2xl font-[Karla-Bold] text-center">
                Vous êtes prêt(e) à réaliser votre suivi
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StickyButtonContainer>
        <Button
          //textStyle={{ fontSize: 16, fontFamily: "Karla-Bold" }}
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
