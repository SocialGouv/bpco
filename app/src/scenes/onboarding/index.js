import React, { useCallback, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

import OnboardingPresentation from "./OnboardingPresentationv2";
import HowItWorks from "./HowItWorks";
import UserType from "./UserType";
import Reminder from "../reminder";
import { ONBOARDING_STEPS } from "../../utils/constants";
import Oxygen from "./Oxygen";
import OnboardingFelicitation from "./Felicitation";
import {
  progressHeaderOptions,
  ProgressScreen,
  useOnboardingProgressHeader,
} from "./ProgressHeader";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useFocusEffect } from "@react-navigation/native";
import SetWarnFamily from "../warnFamily";
import Explanation from "./Explanation";
import localStorage from "../../utils/localStorage";

const Onboarding = () => {
  const { setIsVisible } = useOnboardingProgressHeader();
  useFocusEffect(
    useCallback(() => {
      setIsVisible(true);
      return () => {
        setIsVisible(false);
      };
    }, [])
  );

  const insets = useSafeAreaInsets();
  const slidesCount = 6;
  const headerOptions = progressHeaderOptions({ insets, slidesCount });

  return (
    <Stack.Navigator
      initialRouteName={ONBOARDING_STEPS.STEP_PRESENTATION}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen
        name={ONBOARDING_STEPS.STEP_PRESENTATION}
        component={OnboardingPresentation}
      />
      <Stack.Screen
        name={ONBOARDING_STEPS.STEP_HOW_IT_WORKS}
        options={headerOptions}
        component={ProgressScreen({
          slideIndex: 0,
          Component: HowItWorks,
        })}
      />
      <Stack.Screen
        name={ONBOARDING_STEPS.STEP_USER_TYPE}
        options={headerOptions}
        component={ProgressScreen({
          slideIndex: 1,
          Component: UserType,
        })}
      />
      <Stack.Screen
        name={ONBOARDING_STEPS.STEP_OXYGEN}
        options={headerOptions}
        component={ProgressScreen({
          slideIndex: 2,
          Component: Oxygen,
        })}
      />
      <Stack.Screen
        name={ONBOARDING_STEPS.STEP_REMINDER}
        options={headerOptions}
        component={ProgressScreen({
          slideIndex: 3,
          Component: Reminder,
        })}
      />
      <Stack.Screen
        name={ONBOARDING_STEPS.STEP_EXPLANATION}
        options={headerOptions}
        component={ProgressScreen({
          slideIndex: 4,
          Component: Explanation,
        })}
      />
      <Stack.Screen
        name={ONBOARDING_STEPS.STEP_SET_WARN_FAMILY}
        options={headerOptions}
        component={ProgressScreen({
          slideIndex: 5,
          Component: SetWarnFamily,
        })}
      />
      <Stack.Screen
        name={ONBOARDING_STEPS.STEP_FELICITATIONS}
        options={headerOptions}
        component={ProgressScreen({
          slideIndex: 6,
          Component: OnboardingFelicitation,
        })}
      />
    </Stack.Navigator>
  );
};

export default Onboarding;
