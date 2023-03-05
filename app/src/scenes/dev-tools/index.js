import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import List from "./list";
import LocaleStorage from "./localeStorage";

const Onboarding = () => {
  return (
    <Stack.Navigator initialRouteName="list">
      <Stack.Screen
        options={{
          title: "Outils développeur",
        }}
        name="list"
        component={List}
      />
      <Stack.Screen
        options={{
          title: "Local Storage",
        }}
        name="local-storage"
        component={LocaleStorage}
      />
    </Stack.Navigator>
  );
};

export default Onboarding;
