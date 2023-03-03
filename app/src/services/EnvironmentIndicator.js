import React from "react";
import { Text, View } from "react-native";
import { APP_ENV } from "../config";

const EnvironmentIndicator = () => {
  if (APP_ENV === "production") return null;
  return (
    <View className="opacity-30">
      <View className="absolute bottom-2 right-2 z-50 bg-red-600 px-2 py-1 rounded-full">
        <Text allowFontScaling={false} className="text-white text-sm">
          {APP_ENV}
        </Text>
      </View>
    </View>
  );
};

export default EnvironmentIndicator;
