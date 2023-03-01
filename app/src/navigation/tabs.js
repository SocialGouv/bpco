import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Status from "../scenes/status";
import SurveyMenu from "../../assets/SurveyMenu";
import { colors } from "../utils/colors";
import Text from "../components/MyText";
import SvgGear from "../../assets/Gear";
import Settings from "../scenes/settings";

const Tab = createMaterialTopTabNavigator();

const Tabs = () => {
  return (
    <>
      <Tab.Navigator
        initialRouteName="Status"
        tabBarPosition="bottom"
        screenOptions={{
          swipeEnabled: true,
          activeTintColor: colors.BLUE,
          inactiveTintColor: "#a1a1a1",
          showIcon: true,
          indicatorStyle: { height: 0 },
          style: {
            maxHeight: 80,
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowOpacity: 0.27,
            shadowRadius: 4.65,

            elevation: 6,
          },
          iconStyle: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          },
          labelStyle: {
            textTransform: "capitalize",
            fontSize: 10,
            marginHorizontal: 0,
            padding: 0,
          },
        }}
      >
        <Tab.Screen
          name="Status"
          options={{
            tabBarLabel: ({ color }) => (
              <Text
                style={{ fontSize: 10, marginHorizontal: 0, padding: 0, color }}
              >
                Mon suivi
              </Text>
            ),
            tabBarIcon: ({ color }) => (
              <SurveyMenu height={24} style={{ color }} />
            ),
          }}
        >
          {(p) => <Status {...p} />}
        </Tab.Screen>
        <Tab.Screen
          name="Settings"
          options={{
            tabBarLabel: ({ color }) => (
              <Text
                style={{ fontSize: 10, marginHorizontal: 0, padding: 0, color }}
              >
                Mes paramètres
              </Text>
            ),
            tabBarIcon: ({ color }) => <SvgGear color={color} height={24} />,
          }}
        >
          {(p) => <Settings {...p} />}
        </Tab.Screen>
      </Tab.Navigator>
    </>
  );
};

export default Tabs;
