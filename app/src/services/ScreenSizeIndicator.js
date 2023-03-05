import React from "react";
import { Text, View } from "react-native";

const ScreenSizeIndicator = () => {
  return (
    <View className="opacity-30">
      <View className="absolute bottom-0 left-0 z-50 bg-red-600 px-2 py-1">
        <Text className="text-white block sm:hidden">all</Text>
        <Text className="text-white hidden sm:block tablet:hidden">sm</Text>
        <Text className="text-white hidden tablet:block md:hidden">tablet</Text>
        <Text className="text-white hidden md:block lg:hidden">md</Text>
        <Text className="text-white hidden lg:block xl:hidden">lg</Text>
        <Text className="text-white hidden xl:block 2xl:hidden">xl</Text>
        <Text className="text-white hidden 2xl:block">2xl</Text>
      </View>
    </View>
  );
};

export default ScreenSizeIndicator;
