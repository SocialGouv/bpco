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
              <Text className="text-BLUE text-2xl tablet:text-6xl font-[Karla-Bold] text-center">
                Félicitations !
              </Text>
              <Text className="text-BLUE text-base tablet:text-2xl font-[Karla-Bold] text-center">
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
            if (computeNewSurveyAvailable(diaryData))
              return navigation.replace("day-survey");
            return navigation.replace("tabs");
          }}
          title="Je démarre"
        />
      </StickyButtonContainer>
    </SafeAreaViewWithOptionalHeader>
  );
};

const stylesButton = StyleSheet.create({
  buttonWrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "stretch",
    paddingHorizontal: 20,
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
    marginBottom: 10,
  },
  text: {
    fontFamily: "Karla-Bold",
    fontSize: 15,
    color: "#1f2937",
  },
});

const styles = StyleSheet.create({
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonSecondary: {
    backgroundColor: colors.WHITE,
    borderWidth: 2,
    borderColor: colors.LIGHT_BLUE,
  },
  buttonSecondaryText: {
    fontSize: 16,
    fontFamily: "Karla-Bold",
    color: colors.LIGHT_BLUE,
  },
  buttonPrimaryWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    position: "absolute",
    bottom: 60,
  },
  buttonSecondaryWrapper: {
    width: "100%",
    display: "flex",
    alignItems: "stretch",
    position: "absolute",
    bottom: 0,
  },
  bold: {
    fontFamily: "Karla-Bold",
  },
  bordered: {
    borderWidth: 1,
    borderColor: colors.BLUE,
    borderRadius: 10,
    padding: 10,
    alignItems: "center",
  },
  containerSvg: {
    alignItems: "center",
    marginVertical: 20,
  },
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: "white",
  },
  defaultContainer: {
    marginVertical: 15,
  },
  safe: {
    ...(Platform.OS === "android" && {
      paddingTop: (StatusBar.currentHeight || 24) + 10,
    }),
    flex: 1,
    backgroundColor: "white",
    display: "flex",
  },
  scrollContainer: {
    flexGrow: 1,
  },
  title: {
    textAlign: "left",
    fontFamily: "Karla-Bold",
    color: colors.BLUE,
    fontSize: 18,
  },
  textCenter: {
    textAlign: "center",
  },
  textLeft: {
    textAlign: "left",
  },
  body: {
    fontSize: 15,
    color: colors.BLUE,
  },
});

export default Onboarding;
