import React, { useState } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import ReminderBubble from "./reminder-bubble";
import localStorage from "../../utils/localStorage";

export default () => {
  const navigation = useNavigation();
  const [reminderBubbleVisible, setReminderBubbleVisible] = useState(true);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        const reminder = await localStorage.getReminder();
        setReminderBubbleVisible(!reminder);
      })();
    }, [])
  );

  const onPressReminder = () => navigation.navigate("reminder");

  if (reminderBubbleVisible)
    return <ReminderBubble onPress={onPressReminder} />;
};
