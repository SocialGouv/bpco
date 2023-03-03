import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../components/MyText";

const LegalItem = ({ title, navigation, path = "tabs", onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (navigation) navigation.navigate(path);
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <View className="py-3 pl-2">
        <View className="flex flex-row items-center justify-center">
          <Text className="text-xs text-gray-400 underline">{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default LegalItem;
