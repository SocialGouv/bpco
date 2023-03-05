import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../components/MyText";
import { colors } from "../../utils/colors";
import Icon from "../../components/Icon";
import ArrowRightSvg from "../../../assets/arrow-right.js";

export const SettingItem = ({
  title,
  navigation,
  path = "tabs",
  icon,
  color = colors.LIGHT_BLUE,
  onClick,
}) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (navigation) navigation.navigate(path);
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <View className="p-2">
        <View className="flex flex-row items-center">
          {icon && <Icon icon={icon} color="#0074d4" width={20} height={20} />}
          <Text className="text-gray-800 text-md tablet:text-xl flex-1 ml-1">
            {title}
          </Text>
          {navigation && (
            <View className="w-11 h-11 items-center justify-center">
              <ArrowRightSvg color="#0074d4" />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SettingItem;
