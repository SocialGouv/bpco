import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
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
      <View style={styles.container}>
        <View style={styles.answer}>
          {icon && (
            <Icon
              icon={icon}
              color={color}
              width={30}
              height={30}
              styleContainer={{ marginRight: 20 }}
            />
          )}
          <Text className="text-BLUE text-md tablet:text-xl flex-1">
            {title}
          </Text>
          {navigation && (
            <View style={styles.button}>
              <ArrowRightSvg />
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  button: {
    width: 45,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
  },
  answer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default SettingItem;
