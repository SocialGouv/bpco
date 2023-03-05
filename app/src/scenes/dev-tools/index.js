import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import List from "./list";
import LocaleStorage from "./localeStorage";

const Onboarding = () => {
  return (
    <Stack.Navigator
      initialRouteName="list"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="list" component={List} />
      <Stack.Screen name="local-storage" component={LocaleStorage} />
    </Stack.Navigator>
  );
};

export default Onboarding;
