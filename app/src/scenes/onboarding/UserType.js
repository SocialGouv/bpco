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
            <Text className="text-primary pb-4 tablet:pb-6 text-2xl tablet:text-4xl font-[Karla-Bold]">
              Faisons connaissance
            </Text>
            <Text className="text-black pb-4 tablet:pb-6 text-lg tablet:text-3xl">
              Qui vous a recommandé l’application ?
            </Text>
          </View>
          <Card
            title="Mon médecin généraliste"
            color="#F4FCFD"
            handleClick={() =>
              handleClick(USER_TYPES.suivi_recommande_generaliste)
            }
          />
          <View className="my-1" />
          <Card
            title="Mon pneumologue"
            color="#F4FCFD"
            handleClick={() =>
              handleClick(USER_TYPES.suivi_recommande_pneumologue)
            }
          />
          <View className="my-1" />
          <Card
            title="Mon réseau (ami.ie, association...)"
            color="#F4FCFD"
            handleClick={() => handleClick(USER_TYPES.recommande_reseau)}
          />
          <View className="my-1" />
          <Card
            title="Moi-même ( store, site internet...)"
            color="#F4FCFD"
            handleClick={() => handleClick(USER_TYPES.recommande_moi_meme)}
          />
          <View className="border border-green-400 flex flex-row justify-center items-center m-5 mt-10 p-2 rounded-2xl">
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
      <View className="bg-primary rounded-2xl p-5 flex items-center justify-center mb-1">
        <Text className="text-white text-lg text-center font-[Karla-Bold]">
          {title}
        </Text>
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
