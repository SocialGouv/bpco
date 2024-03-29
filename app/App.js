import "react-native-gesture-handler";

import Router from "./src/navigation/router";
// TODO import NPS from "./src/services/NPS/NPS";
import { DiaryDataProvider } from "./src/context/diaryData";
import { ConsultedDataProvider } from "./src/context/consultedData";
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
import * as Sentry from "sentry-expo";
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

Sentry.init({
  dsn: SENTRY_DSN,
  enableInExpoDevelopment: true,
  debug: __DEV__, // If `true`, Sentry will try to print out useful debugging information if something goes wrong with sending the event. Set it to `false` in production
});

export default function App() {
  const [initialRouteName, setInitialRouteName] = useState("tabs");

  const [fontsLoaded] = useFonts({
    Karla: require("./assets/fonts/Karmilla-Regular.ttf"),
    "Karla-Bold": require("./assets/fonts/Karmilla-Bold.ttf"),
    "Karla-Extra-Bold": require("./assets/fonts/Karla-ExtraBold.ttf"),
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
          <DiaryDataProvider>
            <ConsultedDataProvider>
              <OnboardingProgressHeaderProvider>
                <InfoModalProvider>
                  <StatusBar style="auto" />
                  <Router initialRouteName={initialRouteName} />
                  {/* TODO <NPS /> */}
                </InfoModalProvider>
              </OnboardingProgressHeaderProvider>
            </ConsultedDataProvider>
          </DiaryDataProvider>
        </NeedUpdateContextProvider>
      </SafeAreaProvider>
    </>
  );
}
