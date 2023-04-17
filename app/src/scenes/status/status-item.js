import React from "react";
import { View } from "react-native";
import { Card } from "./StatusCard";
import { renderAlertIcon, renderAlertText } from "../../utils";

export default ({ alert }) => {
  if (alert) {
    return (
      <View className="mb-4 pt-5">
        <Card
          preset={alert !== "green" ? "orange" : "grey"}
          title={renderAlertText(alert)}
          icon={renderAlertIcon(alert)}
        />
      </View>
    );
  } else {
    return <View className="my-4" />;
  }
};
