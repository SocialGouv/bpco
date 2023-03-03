import React, { useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ReminderBubble from "./reminder-bubble";
const ReminderStorageKey = "@Reminder";
import AsyncStorage from "@react-native-async-storage/async-storage";

// todo : la bulle s'affiche alors qu'un rappel est set
export default () => {
  const navigation = useNavigation();
  const [reminderBubbleVisible, setReminderBubbleVisible] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const reminder = await AsyncStorage.getBubble(ReminderStorageKey);
        setReminderBubbleVisible(!reminder);
      })();
    }, [])
  );

  const onPressReminder = () => navigation.navigate("reminder");

  if (reminderBubbleVisible)
    return <ReminderBubble onPress={onPressReminder} />;
};
