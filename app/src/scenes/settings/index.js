import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  Platform,
  StatusBar,
} from "react-native";
import Header from "../../components/Header";
import NPS from "../../services/NPS/NPS";
import { colors } from "../../utils/colors";
import { recommendApp } from "../../utils/share";
// import pck from "../../../package.json";
import app from "../../../app.json";

import SettingItem from "./setting-item";
import LegalItem from "./legal-item";
import { ScrollView } from "react-native";

const Settings = ({ navigation }) => {
  const [devModeCount, setDevModeCount] = useState(1);
  return (
    <SafeAreaView style={[styles.safe]}>
      {/* <NPS forceView={NPSvisible} close={() => setNPSvisible(false)} /> */}
      <Header title="Mes paramètres" navigation={navigation} />
      <ScrollView style={styles.card}>
        <SettingItem
          title="Présentation"
          path="onboarding"
          navigation={navigation}
          icon="PresentationSvg"
        />
        <SettingItem
          title="Définir ou modifier un rappel"
          path="reminder"
          navigation={navigation}
          icon="ReminderSettingSvg"
        />
        <SettingItem
          title="Personnaliser mon profil"
          path="profile"
          icon="Profile"
          navigation={navigation}
        />
        <SettingItem
          title="Ajouter ou modifier mon contact proche"
          path="set-warn-family"
          icon="WarnFamilyPhone"
          navigation={navigation}
        />
        <SettingItem
          title="Recommander BPCO"
          onClick={recommendApp}
          icon="ShareSvg"
        />
        {__DEV__ || devModeCount >= 10 ? (
          <SettingItem
            title="Outils développeurs"
            path="dev-tools"
            icon="GearSvg"
            navigation={navigation}
          />
        ) : null}
        <Separator />
        <LegalItem
          title="Conditions générales d'utilisation"
          path="cgu"
          navigation={navigation}
        />
        <LegalItem
          title="Politique de confidentialité"
          path="privacy"
          navigation={navigation}
        />
        <LegalItem
          title="Mentions légales"
          path="legal-mentions"
          navigation={navigation}
        />
        <TouchableWithoutFeedback onPress={() => setDevModeCount((p) => p + 1)}>
          <View className="items-center mt-6">
            <Text style={styles.versionLabel}>
              version {app.expo.version}
              {/* ({app.expo.android.versionCode}) */}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

const Separator = () => <View style={styles.separator} />;
const styles = StyleSheet.create({
  separator: {
    borderColor: "#eee",
    borderTopWidth: 1,
    marginHorizontal: 30,
    marginVertical: 15,
  },
  versionLabel: {
    color: "#ddd",
  },
  buildNumberLabel: {
    color: "#eee",
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    backgroundColor: "#0A215C50",
  },
  card: {
    backgroundColor: "#fff",
    paddingBottom: 30,
    flex: 1,
  },
  headerContainer: {
    position: "absolute",
    left: 0,
    right: 0,
    width: "100%",
    zIndex: 1,

    paddingTop: 5,
    paddingBottom: 0,
    backgroundColor: "#0074d4",
  },
  arrowDown: {
    transform: [{ rotate: "180deg" }],
  },
  arrowDownLabel: {
    color: colors.BLUE,
  },
  versionContainer: {
    marginTop: 20,
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  safe: {
    ...(Platform.OS === "android" && {
      paddingTop: (StatusBar.currentHeight || 24) + 10,
    }),
    flex: 1,
    backgroundColor: "#0074d4",
  },
  scrollView: {
    backgroundColor: "white",
  },
  container: {
    padding: 20,
  },
  scrollContainer: {
    paddingBottom: 80,
  },
  title: {
    fontSize: 19,
    paddingBottom: 10,
    color: colors.BLUE,
    fontWeight: "700",
  },
  flex: {
    display: "flex",
    flexDirection: "row",
  },
  verticalBorder: {
    borderLeftWidth: 1,
    borderColor: "#00CEF7",
  },
  setupButton: {
    backgroundColor: colors.LIGHT_BLUE,
    borderRadius: 45,
    paddingHorizontal: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
  },
  setupButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: Dimensions.get("window").width > 350 ? 19 : 15,
    flexWrap: "wrap",
    textAlign: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#E0E0E0",
    marginVertical: 40,
    width: "50%",
    alignSelf: "center",
  },
});

export default Settings;
