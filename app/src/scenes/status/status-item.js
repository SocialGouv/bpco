import React from "react";
import { View } from "react-native";
import { Card } from "../../components/Card";
import { renderAlertIcon, renderAlertText } from "../../utils";

export default ({ alert }) => {
  if (alert) {
    return (
      <View className="pl-[15px] ml-1 -my-1 border-l-[0.4px] border-primary">
        <View className="mb-4 pt-5">
          <Card
            preset={alert !== "green" ? "orange" : "grey"}
            title={renderAlertText(alert)}
            icon={renderAlertIcon(alert)}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View className="pl-[15px] ml-1 -my-1 border-l-[0.4px] border-primary">
        <View className="my-4" />
      </View>
    );
  }
};
