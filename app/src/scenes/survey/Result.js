import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/fr";
import { CommonActions } from "@react-navigation/native";
import * as SMS from "expo-sms";
import { Alert, Keyboard, StyleSheet, View } from "react-native";
import { Button2 } from "../../components/Button2";
import Text from "../../components/MyText";
import { Screen } from "../../components/Screen";
import { colors } from "../../utils/colors";
import localStorage from "../../utils/localStorage";

import AlertComponent from "../../components/alerts";

const Result = ({ navigation, route }) => {
  const alertLevel = route.params?.alert;

  const submitDay = async ({}) => {
    return navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{ name: "tabs" }],
      })
    );
  };

  const renderTodayDate = () => {
    return (
      dayjs().locale("fr").format("dddd").charAt(0).toUpperCase() +
      dayjs().locale("fr").format("dddd").slice(1) +
      " " +
      dayjs().locale("fr").format("DD MMMM YYYY")
    );
  };

  return (
    <Screen
      containerStyle={{ marginBottom: 15 }}
      header={{
        title: "Mon suivi",
      }}
      bottomChildren={
        <>
          {alertLevel === "red" && (
            <Button2
              fill
              preset="secondary"
              style={{ marginBottom: 20 }}
              title="Prévenir mon proche"
              onPress={handlePressSMS}
            />
          )}

          <Button2
            fill
            title={
              alertLevel === "red"
                ? "Retour à mon suivi"
                : "À demain pour votre suivi"
            }
            onPress={submitDay}
          />
        </>
      }
      scrollProps={{
        onScrollBeginDrag: Keyboard.dismiss,
      }}
      contentContainerStyle={{ alignItems: "stretch" }}
    >
      <View>
        <View style={{ marginBottom: 8 }}>
          <Text style={styles.date}>{renderTodayDate()}</Text>
          <View className="w-full h-[95%] justify-center">
            <AlertComponent alert={alertLevel} />
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default Result;

const handlePressSMS = async () => {
  console.log("sms");
  const isAvailable = await SMS.isAvailableAsync();
  const phoneNumber = await localStorage.getFamilyPhoneNumber();
  if (!phoneNumber) {
    Alert.alert(
      "Numéro de téléphone non renseigné",
      "Merci de renseigner un numéro de téléphone dans les paramètres"
    );
    return;
  }
  if (isAvailable) {
    const { result } = await SMS.sendSMSAsync(
      [phoneNumber],
      "J'ai besoin d'aide. Mon application BPCO'Mieux me conseille de consulter en urgence. (envoyé automatiquement depuis l'application BPCO'Mieux)"
    );
    // result empty for android users
  } else {
    // misfortune... there's no SMS available on this device
    // should be only RN web / simulator
    Alert.alert(
      "SMS non disponible",
      "Merci d'envoyer un SMS manuellement à votre proche"
    );
  }
};

const styles = StyleSheet.create({
  date: {
    textAlign: "center",
    color: colors.BLUE,
    fontSize: 16,
  },
});
