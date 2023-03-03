import React, { useEffect, useState } from "react";
import ReminderSettingSvg from "../../assets/ReminderSetting";
import ExportDataSettingSvg from "../../assets/ExportDataSetting";
import ExportDataSvg from "../../assets/ExportData";
import SymptomsSetting from "../../assets/SymptomsSetting";
import CguSettingSvg from "../../assets/CguSetting";
import DrugsSvg from "../../assets/Drugs";
import InfoSvg from "../../assets/Info";
import Info2Svg from "../../assets/Info2";
import BurgerSvg from "../../assets/Burger";
import PresentationSvg from "../../assets/Presentation";
import NewsSvg from "../../assets/News";
import ProtectionSvg from "../../assets/Protection";
import GearSvg from "../../assets/Gear.js";
import PlusSvg from "../../assets/Plus";
import Plus2Svg from "../../assets/Plus2";
import ClockSvg from "../../assets/Clock";
import LightBulbSvg from "../../assets/LightBulb";
import HeartsSvg from "../../assets/Hearts";
import ThoughtsSvg from "../../assets/Thoughts";
import CalendarSvg from "../../assets/Calendar";
import Calendar2Svg from "../../assets/Calendar2";
import ArrowUpSvg from "../../assets/ArrowUp";
import PlusSurveySvg from "../../assets/PlusSurvey";
import PlusBeckSvg from "../../assets/PlusBeck";
import CrossSvg from "../../assets/Cross";
import ChevronUpSvg from "../../assets/ChevronUp";
import ChevronDownSvg from "../../assets/ChevronDown";
import ChevronRightSvg from "../../assets/ChevronRight";
import BinSvg from "../../assets/Bin";
import Bin2Svg from "../../assets/Bin2";
import NotesSvg from "../../assets/Notes";
import TuneSvg from "../../assets/Tune";
import CheckSvg from "../../assets/Check";
import PhoneSvg from "../../assets/Phone";
import PeopleSvg from "../../assets/People";
import GlobeSvg from "../../assets/Globe";
import LockSvg from "../../assets/Lock";
import Arrow from "../../assets/Arrow";
import ThumbsUpSvg from "../../assets/ThumbsUp";
import ImportantSvg from "../../assets/Important";
import EditSvg from "../../assets/Edit";
import IndicateurSvg from "../../assets/Indicateur";
import GoalSvg from "../../assets/Goal";
import ReorderSvg from "../../assets/Reorder";
import DeleteSvg from "../../assets/Delete";
import ShareSvg from "../../assets/Share";
import Lungs from "../../assets/onboarding/Lungs";
import AlertSVG from "../../assets/onboarding/Alert";
import AlertOrangeSVG from "../../assets/onboarding/AlertOrange";
import WarnFamilyPhone from "../../assets/WarnFamilyPhone";
import Profile from "../../assets/Profile";

import {
  StyleSheet,
  View,
  Animated,
  Easing,
  TouchableOpacity,
} from "react-native";

const mapIconToSvg = (icon) => {
  const iconMap = {
    WarnFamilyPhone,
    Profile,
    AlertOrangeSVG,
    AlertSVG,
    Lungs,
    ReminderSettingSvg,
    ExportDataSettingSvg,
    SymptomsSetting,
    CguSettingSvg,
    DrugsSvg,
    InfoSvg,
    Info2Svg,
    BurgerSvg,
    PresentationSvg,
    NewsSvg,
    ProtectionSvg,
    GearSvg,
    ExportDataSvg,
    PlusSvg,
    Plus2Svg,
    ClockSvg,
    LightBulbSvg,
    HeartsSvg,
    CalendarSvg,
    Calendar2Svg,
    ArrowUpSvg,
    PlusSurveySvg,
    PlusBeckSvg,
    ThoughtsSvg,
    CrossSvg,
    BinSvg,
    Bin2Svg,
    NotesSvg,
    PhoneSvg,
    GlobeSvg,
    PeopleSvg,
    ChevronUpSvg,
    ChevronDownSvg,
    ChevronRightSvg,
    LockSvg,
    Arrow,
    ThumbsUpSvg,
    TuneSvg,
    CheckSvg,
    ImportantSvg,
    EditSvg,
    IndicateurSvg,
    GoalSvg,
    ReorderSvg,
    DeleteSvg,
    ShareSvg,
  };
  return iconMap[icon];
};

const Icon = ({
  icon,
  color,
  styleContainer,
  spin,
  badge = false,
  onPress,
  activeOpacity = 0.4,
  ...props
}) => {
  const [spinFn, setSpinFn] = useState(null);

  useEffect(() => {
    if (spin === undefined) return;

    const spinValue = new Animated.Value(spin ? 0 : 1);

    Animated.timing(spinValue, {
      toValue: spin ? 1 : 0,
      duration: 200,
      easing: Easing.linear, // Easing is an additional import from react-native
      useNativeDriver: true, // To make use of native driver for performance
    }).start();

    setSpinFn(
      spinValue.interpolate({
        inputRange: [0, 1],
        outputRange: ["0deg", "45deg"],
      })
    );
  }, [spin]);

  const Icon = mapIconToSvg(icon);

  const render = () => (
    <Animated.View
      style={[
        styles.iconContainer,
        styleContainer,
        spinFn && { transform: [{ rotate: spinFn }] },
      ]}
    >
      {badge ? (
        <View style={styles.badge}>
          {/* <Text style={styles.badgeText}></Text> */}
        </View>
      ) : null}
      <Icon width={20} height={20} color={color || "black"} {...props} />
    </Animated.View>
  );

  return onPress ? (
    <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
      {render()}
    </TouchableOpacity>
  ) : (
    render()
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    // borderColor: 'red',
    // borderWidth: 1,
    width: 40,
    height: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // marginRight: 20,
  },
  badge: {
    position: "absolute",
    top: 0,
    right: -5,
    backgroundColor: "#E46C76",
    borderRadius: 16,
    // paddingHorizontal: 6,
    // paddingVertical: 2,
    zIndex: 2,
    width: 12,
    height: 12,
  },
  badgeText: {
    color: "white",
    fontSize: 11,
    fontWeight: "600",
  },
});

export default Icon;
