// use /scenes/reminder/Reminder.js instead
// but remove not expo compatible libs

import React, { useEffect, useState } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Alert,
} from "react-native";
import Text from "../../components/MyText";
import Button from "../../components/Button";
import localStorage from "../../utils/localStorage";
import { ONBOARDING_STEPS } from "../../utils/constants";
import { onboardingStyles } from "../onboarding/styles";
import { StickyButtonContainer } from "../onboarding/components/StickyButton";
import { SafeAreaViewWithOptionalHeader } from "../onboarding/ProgressHeader";
import { OnboardingBackButton } from "../onboarding/components/BackButton";
import SvgCalendar from "../../../assets/onboarding/Calendar";
import TimePicker from "../../components/timePicker";
import { colors } from "../../utils/colors";
import dayjs from "dayjs";
import * as Device from "expo-device";
import * as Notifications from "expo-notifications";

const Reminder = ({ navigation, route }) => {
  const DEFAULT_REMINDER = dayjs().hour(8).minute(0);
  const inOnboarding = route.params?.inOnboarding === true;
  const [reminder, setReminder] = useState(DEFAULT_REMINDER);
  const [reminderSetupVisible, setReminderSetupVisible] = useState(false);

  useEffect(() => {
    (async () => {
      const existingReminder = await localStorage.getReminder();
      if (existingReminder) setReminder(dayjs(existingReminder));
      if (!existingReminder) {
        setReminderRequest(DEFAULT_REMINDER);
      }
      if (inOnboarding)
        await localStorage.setOnboardingStep(ONBOARDING_STEPS.STEP_REMINDER);
    })();
  }, []);

  const handlePress = () => {
    navigation.navigate(
      inOnboarding ? ONBOARDING_STEPS.STEP_EXPLANATION : "tabs"
    );
  };

  const setReminderRequest = async (newReminder) => {
    if (!dayjs(newReminder).isValid()) return;
    setReminder(dayjs(newReminder));
    setReminderSetupVisible(false);
    // TODO: save reminder, schedule notification...
    await localStorage.setReminder(newReminder);
    await registerForPushNotificationsAsync();
    await scheduleDailyReminer(
      dayjs(newReminder).get("hour"),
      dayjs(newReminder).get("minute")
    );

    // await scheduleNotification(newReminder);
    // const scheduled =
    //   await NotificationService.getScheduledLocalNotifications();
  };

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
            <SvgCalendar />
          </View>

          <Text className="text-primary tablet:pb-4 text-2xl tablet:text-4xl font-[Karla-Bold] text-center">
            Programmez vos rappels
          </Text>
          <Text className="text-xl tablet:text-2xl max-w-xl mx-auto text-center my-4">
            Plus vous remplirez votre questionnaire, plus vous en apprendrez sur
            votre état de santé respiratoire.
          </Text>
          <TouchableOpacity
            className="border-2 border-primary rounded-3xl w-2/3 mx-auto my-10"
            onPress={() => setReminderSetupVisible(true)}
          >
            <Text className="text-primary text-3xl text-center py-2">
              {reminder.format("HH[h]mm")}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StickyButtonContainer>
        <Button
          title={`Je valide`}
          onPress={handlePress}
          buttonStyle={{ minWidth: 0 }}
        />
      </StickyButtonContainer>
      <TimePicker
        visible={reminderSetupVisible}
        selectDate={setReminderRequest}
      />
    </SafeAreaViewWithOptionalHeader>
  );
};

export default Reminder;

const scheduleDailyReminer = async (hour, minute) => {
  await Notifications.cancelAllScheduledNotificationsAsync();
  const identifier = await Notifications.scheduleNotificationAsync({
    content: {
      title: "⏰ C'est l'heure de votre suivi !",
      body: "N'oubliez pas de remplir votre suivi quotidien sur BPCO'Mieux",
      // data: { data: "goes here" },
    },
    trigger: { hour, minute, repeats: true },
  });
};

const registerForPushNotificationsAsync = async () => {
  // let token;

  if (Platform.OS === "android") {
    await Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      // alert("Failed to get push token for push notification!");
      Alert.alert("Erreur", "impossible d'activer les notifications");
      return;
    }
    // token = (await Notifications.getExpoPushTokenAsync()).data;
    // console.log(token);
  } else {
    // alert("Must use physical device for Push Notifications");
    Alert.alert(
      "Erreur",
      "impossible d'activer les notifications sur cet appareil"
    );
  }

  // return token;
};
