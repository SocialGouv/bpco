import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Text,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import Header from "../../components/Header";
import NPS from "../../services/NPS/NPS";
import { recommendApp } from "../../utils/share";
// import pck from "../../../package.json";
import app from "../../../app.json";

import SettingItem from "./setting-item";
import LegalItem from "./legal-item";
import { ScrollView } from "react-native";

const Settings = ({ navigation }) => {
  const [devModeCount, setDevModeCount] = useState(1);
  const [devModeActive, setDevModeActive] = useState(__DEV__);
  const [NPSvisible, setNPSvisible] = useState(false);

  useEffect(() => {
    if (devModeCount > 15) {
      setDevModeCount(0);
      Alert.alert(
        `Voulez-vous activer le mode développeur ?`,
        "Il vous permettra d'accéder à des outils de débogage.",
        [
          {
            text: "Oui",
            onPress: () => setDevModeActive(true),
          },
          {
            text: "Non",
            style: "cancel",
            onPress: () => setDevModeActive(false),
          },
        ],
        { cancelable: true }
      );
    }
  }, [devModeCount]);

  return (
    <SafeAreaView style={styles.safe} className="bg-primary flex-1">
      <NPS forceView={NPSvisible} close={() => setNPSvisible(false)} />
      <Header title="Mes paramètres" navigation={navigation} />
      <ScrollView className="bg-white flex-1">
        <SettingItem
          title="Présentation"
          path="onboarding"
          navigation={navigation}
          icon="PresentationSvg"
        />
        <Separator />
        <SettingItem
          title="Définir ou modifier un rappel"
          path="reminder"
          navigation={navigation}
          icon="ReminderSettingSvg"
        />
        <Separator />
        <SettingItem
          title="Personnaliser mon profil"
          path="profile"
          icon="Profile"
          navigation={navigation}
        />
        <Separator />
        <SettingItem
          title="Ajouter ou modifier mon contact proche"
          path="set-warn-family"
          icon="WarnFamilyPhone"
          navigation={navigation}
        />
        <Separator />
        <SettingItem
          title="Recommander BPCO'Mieux"
          onClick={recommendApp}
          icon="ShareSvg"
        />
        <Separator />
        <SettingItem
          title="Contribuer à BPCO'Mieux"
          subtitle="Dites-nous comment améliorer l'application"
          onClick={() => setNPSvisible(true)}
          icon="LightBulbSvg"
        />
        <Separator />
        {devModeActive ? (
          <>
            <SettingItem
              title="Outils développeurs"
              path="dev-tools"
              icon="GearSvg"
              navigation={navigation}
            />
            <Separator />
          </>
        ) : null}
        <View className="my-2" />
        <LegalItem
          title="Mention d'information sur les données"
          path="legal-mention-data"
          navigation={navigation}
        />
        <LegalItem
          title="Mentions légales"
          path="legal-mentions"
          navigation={navigation}
        />
        <TouchableWithoutFeedback onPress={() => setDevModeCount((p) => p + 1)}>
          <View className="items-center mt-6 pb-10">
            <Text className="text-gray-300 text-xs">
              BPCO'Mieux - version {app.expo.version}
              {/* ({app.expo.android.versionCode}) */}
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

const Separator = () => <View className="border-t border-gray-200" />;
const styles = StyleSheet.create({
  safe: {
    ...(Platform.OS === "android" && {
      paddingTop: (StatusBar.currentHeight || 24) + 10,
    }),
  },
});

export default Settings;
