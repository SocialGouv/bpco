import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
  Platform,
  StatusBar,
} from "react-native";
import Text from "../../components/MyText";
import { colors } from "../../utils/colors";
import localStorage from "../../utils/localStorage";
import logEvents from "../../services/logEvents";
import Matomo from "../../services/matomo";
import {
  MATOMO_DIMENSION,
  ONBOARDING_STEPS,
  USER_TYPES,
} from "../../utils/constants";
import { SafeAreaViewWithOptionalHeader } from "./ProgressHeader";
import { OnboardingBackButton } from "./components/BackButton";
import { onboardingStyles } from "./styles";
// import { StickyButtonContainer } from "../StickyButton";

const UserType = ({ navigation }) => {
  const handleClick = async (value) => {
    //send matomo
    logEvents.logUserTypeSelect(value);
    Matomo.setDimensions({
      [MATOMO_DIMENSION.USER_TYPE]: value,
    });
    //navigate to explanation
    navigation.navigate(ONBOARDING_STEPS.STEP_OXYGEN);
    //set local storage
    await localStorage.setUserType(value);
  };

  React.useEffect(() => {
    (async () => {
      await localStorage.setOnboardingStep(ONBOARDING_STEPS.STEP_USER_TYPE);
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
            <Text className="text-BLUE pb-4 tablet:pb-6 text-2xl tablet:text-4xl font-[Karla-Bold]">
              Faisons connaissance
            </Text>
            <Text className="text-DARK_BLUE pb-4 tablet:pb-6 text-xl tablet:text-3xl">
              Vous êtes actuellement :
            </Text>
          </View>
          <Card
            title="Suivi et le professionnel qui me suit m’a recommandé l’application"
            color="#F4FCFD"
            handleClick={() => handleClick(USER_TYPES.suivi_recommande)}
          />
          <Card
            title="Suivi et j’ai téléchargé moi-même l’application"
            color="#F4FCFD"
            handleClick={() => handleClick(USER_TYPES.suivi_non_recommande)}
          />
          <Card
            title="Sans suivi"
            color="#F4FCFD"
            handleClick={() => handleClick(USER_TYPES.sans_suivi)}
          />
          <Card
            title="Professionnel de santé"
            color="#F4FCFD"
            handleClick={() => handleClick(USER_TYPES.pro)}
          />
          <Card
            title="Autres"
            color="#F4FCFD"
            handleClick={() => handleClick(USER_TYPES.autres)}
          />

          <View style={styles.hintContainer}>
            <Image
              source={require("../../../assets/imgs/onboarding/professionnel-sante.png")}
              style={styles.hintImage}
            />
            <Text style={styles.hintText}>
              N’hésitez pas à montrer l’application à un professionnel de santé
              pour vous aider
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaViewWithOptionalHeader>
  );
};

const Card = ({ title, handleClick }) => {
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.card}>
        <Text style={styles.cardTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};
const DarkCard = ({ title, handleClick }) => {
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.darkCard}>
        <Text style={styles.darkCardTitle}>{title}</Text>
      </View>
    </TouchableOpacity>
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
