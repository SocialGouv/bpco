import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "../utils/colors";
import CrossSvg from "../../assets/Cross";

export default ({ onPress, disabled, style }) => (
  <TouchableOpacity
    disabled={disabled}
    onPress={onPress}
    style={[styles.buttonContainer, style]}
  >
    <CrossSvg
      color={disabled ? colors.DARK_BLUE_TRANS : colors.BLUE}
      width={15}
      height={15}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonContainer: {
    marginVertical: 10,
    marginHorizontal: 15,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: "rgba(38,56,124, 0.03)",
    borderColor: "rgba(38,56,124, 0.08)",
    height: 40,
    width: 40,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
    transform: [{ rotate: "270deg" }],
  },
});
