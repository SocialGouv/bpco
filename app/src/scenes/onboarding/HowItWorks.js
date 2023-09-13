import React from "react";
import {
  StyleSheet,
  View,
  ScrollView,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import Button from "../../components/Button";
import Text from "../../components/MyText";
import { colors } from "../../utils/colors";
import localStorage from "../../utils/localStorage";
import { ONBOARDING_STEPS } from "../../utils/constants";
import { SafeAreaViewWithOptionalHeader } from "./ProgressHeader";
import { OnboardingBackButton } from "./components/BackButton";
import { onboardingStyles } from "./styles";
import { StickyButtonContainer } from "./components/StickyButton";

const UserType = ({ navigation }) => {
  React.useEffect(() => {
    (async () => {
      await localStorage.setOnboardingStep(ONBOARDING_STEPS.STEP_HOW_IT_WORKS);
    })();
  }, []);

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
              Comment ça marche ?
            </Text>
          </View>
          <View>
            <View className="flex flex-row items-start">
              <View className="w-6 h-6 bg-[#26387C] flex justify-center items-center mr-2">
                <Text className="text-white">1</Text>
              </View>
              <Text className="flex-1">
                <Text className="text-[#26387C]">S’AUTO EVALUER</Text>
                {"\n"}
                <Text className="text-[#26387C]">12 questions</Text> sur votre
                état de santé en moins de{" "}
                <Text className="text-[#26387C]">30 SECONDES</Text>
              </Text>
            </View>
            <View className="my-4" />
            <View className="flex flex-row items-start">
              <View className="w-6 h-6 bg-[#02C37E] flex justify-center items-center mr-2">
                <Text className="text-white">2</Text>
              </View>
              <Text className="flex-1">
                <Text className="text-[#02C37E]">
                  OBTENIR UNE PRECONISATION
                </Text>
                {"\n"}
                <Text className="text-[#02C37E]">Instantanément</Text>
              </Text>
            </View>
            <View className="my-4" />
            <View className="flex flex-row items-start">
              <View className="w-6 h-6 bg-[#19717A] flex justify-center items-center mr-2">
                <Text className="text-white">3</Text>
              </View>
              <Text className="flex-1">
                <Text className="text-[#19717A]">SUIVRE LA RECOMMANDATION</Text>
                {"\n"}
                Accompagnement personnalisé en{" "}
                <Text className="text-[#19717A]">cas d’alerte</Text> orange et
                rouge
              </Text>
            </View>
            <View className="my-4" />
            <View className="flex flex-row items-start">
              <View className="w-6 h-6 bg-[#FF914D] flex justify-center items-center mr-2">
                <Text className="text-white">4</Text>
              </View>
              <Text className="flex-1">
                <Text className="text-[#FF914D]">
                  FAIRE LE BILAN AVEC SON MEDECIN
                </Text>
                {"\n"}
                Historique de{" "}
                <Text className="text-[#FF914D]">suivi personnalisé</Text> à
                présenter à votre médecin lors d’un rdv
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <StickyButtonContainer>
        <Button
          onPress={() => {
            navigation.navigate(ONBOARDING_STEPS.STEP_USER_TYPE);
          }}
          title="Suivant"
        />
      </StickyButtonContainer>
    </SafeAreaViewWithOptionalHeader>
  );
};

const styles = StyleSheet.create({
  buttonsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: colors.LIGHT_BLUE,
    marginBottom: 20,
    borderRadius: 20,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: Dimensions.get("window").height > 700 ? 75 : 40,
    //flexGrow: 1,
  },
  darkCard: {
    backgroundColor: colors.DARK_BLUE,
    marginBottom: 20,
    borderRadius: 20,
    padding: 20,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: Dimensions.get("window").height > 700 ? 75 : 40,
    //flexGrow: 1,
  },
  scrollContainer: {
    paddingBottom: 40,
  },
  cardTitle: {
    color: "#fff",
    fontFamily: "Karla-Bold",
    textAlign: "center",
    fontSize: 20,
  },
  darkCardTitle: {
    color: "#fff",
    fontFamily: "Karla-Bold",
    textAlign: "center",
    fontSize: 20,
  },
  safe: {
    ...(Platform.OS === "android" && {
      paddingTop: (StatusBar.currentHeight || 24) + 10,
    }),
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    marginTop: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  title: {
    color: colors.BLUE,
    fontSize: 22,
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
  container: {
    backgroundColor: "white",
    padding: 20,
    flex: 1,
    display: "flex",
    overflow: "visible",
  },
  hintContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
    padding: 10,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#26387C",
  },
  hintImage: {
    width: 41,
    height: 41,
    marginRight: 12,
  },
  hintText: {
    flex: 1,
    fontFamily: "Karla",
    fontFamily: "Karla-Bold",
    fontSize: 16,
    lineHeight: 15,
    color: "#26387C",
  },
});

export default UserType;
