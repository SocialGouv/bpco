import "react-native-gesture-handler";

import Router from "./src/navigation/router";
// TODO import NPS from "./src/services/NPS/NPS";
// TODO import { Sentry } from "react-native-sentry";
import { DiaryDataProvider } from "./src/context/diaryData";
import { DiaryNotesProvider } from "./src/context/diaryNotes";
import { NeedUpdateContextProvider } from "./src/context/needUpdate";
import { InfoModalProvider } from "./src/components/InfoModal";
import { OnboardingProgressHeaderProvider } from "./src/scenes/onboarding/ProgressHeader";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import * as Notifications from "expo-notifications";
import localStorage from "./src/utils/localStorage";
import { StatusBar } from "expo-status-bar";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

SplashScreen.preventAutoHideAsync();

// if (!__DEV__) {
//   Sentry.config("https://9f0bd8f8af8444eea9f470d00a1bb411@sentry.fabrique.social.gouv.fr/54").install(); // MSP
// }

export default function App() {
  const [initialRouteName, setInitialRouteName] = useState("tabs");

  const [fontsLoaded] = useFonts({
    Karla: require("./assets/fonts/Karmilla-Regular.ttf"),
    "Karla-Bold": require("./assets/fonts/Karmilla-Bold.ttf"),
  });

  useEffect(() => {
    (async () => {
      const onboardingIsDone = await localStorage.getOnboardingDone();
      if (!onboardingIsDone) setInitialRouteName("onboarding");
      else setInitialRouteName("tabs");
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    })();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <SafeAreaProvider>
        <NeedUpdateContextProvider>
          <DiaryNotesProvider>
            <DiaryDataProvider>
              <OnboardingProgressHeaderProvider>
                <InfoModalProvider>
                  <StatusBar style="auto" />
                  <Router initialRouteName={initialRouteName} />
                  {/* TODO <NPS /> */}
                </InfoModalProvider>
              </OnboardingProgressHeaderProvider>
            </DiaryDataProvider>
          </DiaryNotesProvider>
        </NeedUpdateContextProvider>
      </SafeAreaProvider>
    </>
  );
}
