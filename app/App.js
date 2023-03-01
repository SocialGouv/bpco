import "react-native-gesture-handler";

import Router from "./src/navigation/router";
// TODO import NPS from "./src/services/NPS/NPS";
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
import * as Sentry from "@sentry/react-native";
import { SENTRY_DSN } from "./src/config";
import { version } from "./app.json";

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

SplashScreen.preventAutoHideAsync();

if (!__DEV__) {
  Sentry.init({
    dsn: SENTRY_DSN,
    environment: "app",
    release: version,
    enableNative: false,
    ignoreErrors: [
      "Network request failed",
      "Failed to fetch",
      "NetworkError",
      // This error seems to happen only in firefox and to be ignorable.
      // The "fetch" failed because user has navigated.
      // Since other browsers don't have this problem, we don't care about it,
      // it may be a false positive.
      "AbortError: The operation was aborted",
    ],
  });
}

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
