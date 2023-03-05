import React from "react";
import { Text, View } from "react-native";
import { APP_ENV } from "../config";

const EnvironmentIndicator = () => {
  return (
    <View className="opacity-30">
      <View className="absolute bottom-0 right-0 z-50 bg-red-600 px-2 py-1">
        <Text allowFontScaling={false} className="text-white text-sm">
          {APP_ENV}
        </Text>
      </View>
    </View>
  );
};

export default EnvironmentIndicator;
