import React, { useCallback, useContext, useEffect, useState } from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import Icon from "./Icon";
import Text from "./MyText";
import Settings from "../scenes/settings/settings-modal";
import Drawer from "./drawer";
import { useIsFocused } from "@react-navigation/native";
import localStorage from "../utils/localStorage";
import NeedUpdateContext from "../context/needUpdate";
import { USER_TYPES } from "../utils/constants";

const Header = ({ title, navigation }) => {
  const needUpdate = useContext(NeedUpdateContext);
  const [settingsVisible, setSettingsVisible] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState();
  const [badge, setBadge] = useState(false);

  const updateBadge = useCallback(async () => {
    const userType = await localStorage.getUserType();
    const badgeProNPS = await localStorage.getVisitProNPS();
    setBadge(needUpdate || (userType === USER_TYPES.pro && !badgeProNPS));
  }, [needUpdate]);

  const isFocused = useIsFocused();
  useEffect(() => {
    if (isFocused) updateBadge();
  }, [isFocused, updateBadge]);

  return (
    <View style={styles.container}>
      {/* <Settings
        visible={settingsVisible}
        navigation={navigation}
        onClick={() => setSettingsVisible(false)}
      /> */}
      {/* <Drawer
        visible={drawerVisible}
        navigation={navigation}
        onClick={() => {
          updateBadge();
          setDrawerVisible(false);
        }}
      />
      <Icon
        color="#fff"
        badge={badge}
        icon="BurgerSvg"
        width={20}
        height={20}
        onPress={() => setDrawerVisible(true)}
      /> */}
      <Text style={styles.title}>{title}</Text>
      {/* <Icon
        color="#fff"
        spin={settingsVisible}
        icon="GearSvg"
        width={25}
        height={25}
        onPress={() => setSettingsVisible(true)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    // backgroundColor: "transparent",
    marginRight: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingTop: Dimensions.get("window").width > 640 ? 6 : 0,
    paddingBottom: Dimensions.get("window").width > 640 ? 10 : 5,
  },
  title: {
    textAlign: "center",
    fontSize: Dimensions.get("window").width > 640 ? 30 : 20,
    color: "#fff",
    marginRight: "auto",
    fontWeight: "600",
    flex: 1,
  },
});

export default Header;
