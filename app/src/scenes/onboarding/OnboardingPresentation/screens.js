import React from "react";
import Text from "../../../components/MyText";
import Checkbox from "expo-checkbox";

import WelcomeIcon from "../../../../assets/onboarding/Onboarding1";
import Onboarding3Svg from "../../../../assets/onboarding/Onboarding3";

import { Image, StyleSheet, View } from "react-native";
export const buttonHeight = 43;
export const buttonSmallHeight = 30;
export const defaultPadding = Math.min(
  // Dimensions.get("window").width * 0.7,
  30
);
// export const screenWidth = Dimensions.get("window").width;
// export const screenHeight = Dimensions.get("window").height;
export const screenWidth = 500;
export const screenHeight = 500;
export const menuHeight = 80;
const size = screenWidth * 0.25;

export const Screen0 = () => (
  <View style={styles.container}>
    <View style={styles.imageContainer}>
      <WelcomeIcon height={size} width={size} style={styles.image} />
    </View>
    <View style={styles.containerBottom}>
      <View style={styles.containerBottomTitle}>
        <Text className="text-center font-[Karla-Bold] text-[28px] leading-8 text-BLUE tablet:text-5xl">
          Bienvenue !
        </Text>
      </View>
      <View style={styles.containerBottomText}>
        <Text className="text-center font-[Karla] text-[20px] text-BLUE tablet:text-3xl max-w-[95%] tablet:max-w-lg mx-auto">
          Suivez vos symptômes respiratoires{" "}
          <Text style={styles.bold}>chaque jour</Text> et apprenez à détecter
          les risques d'aggravation <Text style={styles.bold}>à temps</Text>.
        </Text>
      </View>
    </View>
  </View>
);
export const Screen1 = () => (
  <View style={styles.container}>
    <View style={styles.multiImageContainer}>
      {/* <Onboarding2Svg style={styles.image} height={size} /> */}
      <Image
        // style={styles.image}
        source={require("../../../../assets/onboarding/Onboarding2.png")}
      />
    </View>
    <View style={styles.containerBottom}>
      <View style={styles.containerBottomTitle}>
        <Text className="text-center font-[Karla-Bold] text-[28px] leading-8 text-BLUE tablet:text-5xl max-w-[90%] mx-auto">
          Restez vigilant en toute simplicité
        </Text>
      </View>
      <View style={styles.containerBottomText}>
        <Text className="text-center font-[Karla] text-[20px] text-BLUE tablet:text-3xl max-w-[95%] tablet:max-w-lg mx-auto">
          <Text style={styles.bold}>En cas d’alerte</Text>, suivez les
          recommandations et <Text style={styles.bold}>consultez</Text> pour
          prévenir des aggravations respiratoires
          {/* En montrant vos <Text style={styles.bold}>analyses</Text> à votre{" "}
          <Text style={styles.bold}>professionnel</Text> de santé qui pourra
          vous <Text style={styles.bold}>accompagner</Text> */}
        </Text>
      </View>
    </View>
  </View>
);
export const Screen2 = ({ navigation, isCguChecked, setIsCguChecked }) => {
  const onCguClick = () => navigation.navigate("cgu");
  const onLegalMentionsClick = () => navigation.navigate("legal-mentions");
  const onPrivacyClick = () => navigation.navigate("privacy");

  return (
    <>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Onboarding3Svg height={size} width={size} style={[styles.image]} />
        </View>
        <View style={styles.containerBottom}>
          <View style={styles.containerBottomTitle}>
            <Text className="text-center font-[Karla-Bold] text-[28px] leading-8 text-BLUE tablet:text-5xl max-w-[90%] mx-auto">
              En toute confiance
            </Text>
          </View>
          <View style={styles.containerBottomText}>
            <Text className="text-center font-[Karla] text-[20px] text-BLUE tablet:text-3xl max-w-[95%] tablet:max-w-lg mx-auto mb-5">
              C’est <Text style={styles.bold}>gratuit, anonyme</Text> et sans{" "}
              <Text style={styles.bold}>aucun partage</Text> de vos données
              personnelles
            </Text>
            <View className="flex flex-row items-center h-fit max-w-xl mx-auto pl-6 pr-3 tablet:px-0">
              <Checkbox
                animationDuration={0.2}
                tintColor="#0074d4"
                tintColors={{ true: "#0074d4", false: "grey" }}
                boxType="square"
                // style={styles.checkbox}
                className="mr-5 w-8 h-8 tablet:w-12 tablet:h-12 tablet:mr-10"
                value={isCguChecked}
                onValueChange={(newValue) => setIsCguChecked(newValue)}
              />
              <Text className="font-[Karla] text-[17px] text-BLUE tablet:text-2xl flex-1">
                En cochant cette case, vous acceptez nos{" "}
                <Text onPress={onCguClick} style={styles.underlined}>
                  Conditions Générales d’Utilisation
                </Text>
                , notre{" "}
                <Text onPress={onPrivacyClick} style={styles.underlined}>
                  Politique de Confidentialité
                </Text>{" "}
                et nos{" "}
                <Text onPress={onLegalMentionsClick} style={styles.underlined}>
                  Mentions Légales
                </Text>
              </Text>
            </View>
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  containerBottom: {
    flex: 1,
    backgroundColor: "white",
    marginBottom: 60,
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  containerBottomTitle: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "stretch",
  },
  containerBottomText: {
    flex: 2,
    backgroundColor: "white",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "stretch",
  },
  emphasis: {
    color: "#0074d4",
  },
  h1: {
    fontFamily: "Karla-Bold",
    fontStyle: "normal",
    fontSize: 28,
    lineHeight: 33,
    textAlign: "center",
    color: "#26387C",
  },
  bold: {
    fontFamily: "Karla-Bold",
    color: "#26387C",
  },
  presentationText: {
    textAlign: "center",
    paddingHorizontal: 20,
    // fontSize: Dimensions.get("window").height > 700 ? 20 : 17,
    fontSize: 20,
    color: "#0A215C",
    display: "flex",
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  multiImageContainer: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    color: "#C3C7D5",
    marginVertical: 0,
  },
  cgu: {
    display: "flex",
    flexDirection: "row",
    padding: 15,
    paddingLeft: 30,
  },
  textCgu: {
    flex: 1,
    // fontSize: Dimensions.get("window").height > 700 ? 16 : 12,
    fontSize: 17,
  },
  underlined: {
    textDecorationLine: "underline",
  },
  checkbox: {
    marginRight: 20,
    width: 30,
    height: 30,
  },
});
