import React from "react";
import VeryGoodSvg from "../../assets/VeryGood";
import GoodSvg from "../../assets/Good";
import MiddleSvg from "../../assets/Middle";
import BadSvg from "../../assets/Bad";
import VeryBadSvg from "../../assets/VeryBad";
import TodaySvg from "../../assets/Today";
import YesterdaySvg from "../../assets/Yesterday";
import NotesSvg from "../../assets/Notes";
import DrugsSvg from "../../assets/Drugs";
import HeartsSvg from "../../assets/Hearts";
import PlusSvg from "../../assets/Plus1";
import QuestionMarkSvg from "../../assets/QuestionMark.js";

import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  iconContainer: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "lightgrey",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 20,
  },
});

const mapIconToSvg = (icon) => {
  const iconMap = {
    VeryGoodSvg,
    GoodSvg,
    MiddleSvg,
    BadSvg,
    VeryBadSvg,
    TodaySvg,
    YesterdaySvg,
    NotesSvg,
    DrugsSvg,
    HeartsSvg,
    PlusSvg,
    QuestionMarkSvg,
  };
  return iconMap[icon];
};

const CircledIcon = ({
  icon,
  color,
  borderColor = "lightgrey",
  borderWidth = 1,
  iconColor = "black",
  opacity = 1,
  iconContainerStyle,
  iconWidth = 20,
  iconHeight = 20,
  containerSideWidth = 60,
}) => {
  const Icon = mapIconToSvg(icon);
  return (
    <View
      style={{
        ...{
          width: containerSideWidth,
          height: containerSideWidth,
        },
        ...styles.iconContainer,
        backgroundColor: color,
        borderColor,
        borderWidth,
        opacity,
        ...iconContainerStyle,

        width: iconWidth * 1.25,
        height: iconHeight * 1.25,
        borderRadius: iconWidth,
      }}
    >
      <Icon width={iconWidth} height={iconHeight} color={iconColor} />
    </View>
  );
};

export default CircledIcon;
