import React from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
  Alert,
} from "react-native";
import { ScrollView } from "react-native";
import BackButton from "../../components/BackButton";
import { HOST, APP_ENV, SENTRY_DSN } from "../../config";
import { wipeData } from "../../utils";
import { capture } from "../../services/sentry";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe}>
      <View className="flex flex-row items-center">
        <BackButton className="z-10" onPress={navigation.goBack} />
        <View className="absolute w-full">
          <Text className="text-2xl text-DARK_BLUE font-[Karla-Bold] text-center w-full">
            Outils développeur
          </Text>
        </View>
      </View>
      <ScrollView className="bg-white">
        <TouchableOpacity
          className="border-b border-gray-100 px-3 py-5"
          onPress={() =>
            Alert.alert(
              `Êtes-vous sûr de vouloir supprimer vos données ?`,
              `Cette action est irreversible.`,
              [
                {
                  text: "Oui, supprimer mes données",
                  onPress: wipeData,
                },
                { text: "Non", style: "cancel" },
              ],
              { cancelable: true }
            )
          }
        >
          <View className="">
            <Text>Supprimer toutes les données</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="border-b border-gray-100 px-3 py-5">
          <View className="">
            <Text>Générer des données de tests</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="border-b border-gray-100 px-3 py-5"
          onPress={() =>
            Alert.alert(
              `Êtes-vous sûr de vouloir simuler une erreur Sentry ?`,
              "",
              [
                {
                  text: "Oui",
                  onPress: () => capture({ error: "test", date: new Date() }),
                },
                { text: "Non", style: "cancel" },
              ],
              { cancelable: true }
            )
          }
        >
          <View className="">
            <Text>Ping Sentry</Text>
          </View>
        </TouchableOpacity>
        <View className="px-3 py-2">
          <Text className="text-gray-700 italic">api host : {HOST}</Text>
        </View>
        <View className="px-3 py-2">
          <Text className="text-gray-700 italic">environment : {APP_ENV}</Text>
        </View>
        <View className="px-3 py-2">
          <Text className="text-gray-700 italic">
            SENTRY_DSN : {SENTRY_DSN}
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    ...(Platform.OS === "android" && {
      paddingTop: (StatusBar.currentHeight || 24) + 10,
    }),
    flex: 1,
    backgroundColor: "white",
  },
});

export default Settings;
