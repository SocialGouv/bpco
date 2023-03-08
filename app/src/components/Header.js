import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "./MyText";
import ArrowLeft from "../../assets/arrow-left";

const Header = ({ title, navigation, backArrow }) => {
  return (
    <View className="flex-grow-0 flex-shrink-0 flex flex-row items-center justify-center py-2 bg-primary">
      {backArrow ? (
        <TouchableOpacity
          onPress={navigation.goBack}
          className=" absolute left-2 px-4 flex flex-row items-center justify-center"
        >
          <ArrowLeft color="#ffffff" />
        </TouchableOpacity>
      ) : null}
      <Text className="text-sm text-white font-bold">{title}</Text>
    </View>
  );
};

export default Header;
