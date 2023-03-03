import React from "react";
import { View } from "react-native";
import Text from "./MyText";

const Header = ({ title }) => {
  return (
    <View className="flex-grow-0 flex-shrink-0 flex flex-row items-center justify-center py-2">
      <Text className="text-xl text-white font-bold">{title}</Text>
    </View>
  );
};

export default Header;
