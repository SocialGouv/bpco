import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../MyText";

const LegalItem = ({ title, navigation, path = "tabs", onClick }) => {
  const handleClick = () => {
    if (onClick) onClick();
    if (navigation) navigation.navigate(path);
  };
  return (
    <TouchableOpacity onPress={handleClick}>
      <View style={styles.container}>
        <View style={styles.answer}>
          <Text style={styles.label}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
    paddingLeft: 10,
    paddingRight: 10,
    marginBottom: 20,
  },
  label: {
    fontSize: 13,
    fontFamily: "Karla-Bold",
    color: "#ccc",
    flex: 1,
    textDecorationLine: "underline",
    textAlign: "center",
  },
  answer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
});

export default LegalItem;
