import React from "react";
import Tabs from "./tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import EnvironmentIndicator from "../services/EnvironmentIndicator";
import ScreenSizeIndicator from "../services/ScreenSizeIndicator";
import DaySurveyScreen from "../scenes/survey/daySurvey";
import { AppState, Linking } from "react-native";
import Onboarding from "../scenes/onboarding";
import OnboardingFelicitation from "../scenes/onboarding/Felicitation";
import CGU from "../scenes/legal/cgu-screen";
import Privacy from "../scenes/legal/privacy-screen";
import LegalMentions from "../scenes/legal/legal-mentions-screen";
import LegalMentionData from "../scenes/legal/legal-mention-data";
import logEvents from "../services/logEvents";
import PrivacyLight from "../scenes/privacy-light";
import DevTools from "../scenes/dev-tools";
// TODO
// import NotificationService from "../services/notifications";
import DaySurveyResult from "../scenes/survey/Result";
import Reminder from "../scenes/reminder";
import SetWarnFamily from "../scenes/warnFamily";
import Profile from "../scenes/profile";
import MedicalSources from "../scenes/medical-sources";

const Stack = createStackNavigator();

const linking = {
  prefixes: ["jardinmental://"],
  async getInitialURL() {
    // Check if app was opened from a deep link
    const url = await Linking.getInitialURL();

    if (url != null) {
      return url;
    }

    // Check if there is an initial notification
    // const notification = NotificationService.popInitialNotification();

    // Get deep link from data
    // if this is undefined, the app will open the default/home page
    // return notification?.data?.link;
    return;
  },

  subscribe(listener) {
    /// Listen to incoming links from deep linking
    // const linkingSubscription = Linking.addEventListener("url", ({ url }) => {
    //   listener(url);
    // });

    // const unsubscribeNotificationService = NotificationService.subscribe(
    //   (notification) => {
    //     if (notification?.data?.link) listener(notification.data.link);
    //   }
    // );

    return () => {
      // Clean up the event listeners
      // linkingSubscription.remove();
      // unsubscribeNotificationService();
    };
  },
};

class Router extends React.Component {
  async componentDidMount() {
    //await logEvents.initMatomo();
    logEvents.logAppVisit();
    // NotificationService.init();
    this.appListener = AppState.addEventListener("change", this.onAppChange);
  }

  componentWillUnmount() {
    logEvents.logAppClose();
    this.appListener?.remove();
  }

  appState = AppState.currentState;
  onAppChange = (nextAppState) => {
    if (
      this.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      logEvents.logAppVisit();
    } else {
      logEvents.logAppClose();
    }
    this.appState = nextAppState;
  };

  onStateChange = async () => {
    if (!this.navigationRef) return;
    const route = this.navigationRef.getCurrentRoute();
    if (route.name === this.prevCurrentRouteName) return;
    this.prevCurrentRouteName = route.name;
    logEvents.logPageView(route.name);
  };

  render() {
    return (
      <>
        <NavigationContainer
          ref={(r) => (this.navigationRef = r)}
          onStateChange={this.onStateChange}
          linking={linking}
        >
          <Stack.Navigator
            initialRouteName={this.props.initialRouteName}
            screenOptions={{ headerShown: false }}
          >
            <Stack.Screen
              name="tabs"
              options={{
                title: "Accueil",
              }}
              component={Tabs}
            />
            <Stack.Screen name="day-survey" component={DaySurveyScreen} />
            <Stack.Screen
              name="day-survey-result"
              component={DaySurveyResult}
            />
            <Stack.Screen name="reminder" component={Reminder} />
            <Stack.Screen name="set-warn-family" component={SetWarnFamily} />
            <Stack.Screen name="profile" component={Profile} />
            <Stack.Screen name="medical-sources" component={MedicalSources} />
            <Stack.Screen name="onboarding" component={Onboarding} />
            <Stack.Screen
              name="onboarding-felicitation"
              component={OnboardingFelicitation}
            />
            <Stack.Screen name="cgu" component={CGU} />
            <Stack.Screen name="privacy" component={Privacy} />
            <Stack.Screen name="legal-mentions" component={LegalMentions} />
            <Stack.Screen
              name="legal-mention-data"
              component={LegalMentionData}
            />
            <Stack.Screen name="privacy-light" component={PrivacyLight} />
            <Stack.Screen name="dev-tools" component={DevTools} />
          </Stack.Navigator>
        </NavigationContainer>
        {__DEV__ ? <EnvironmentIndicator /> : null}
        {__DEV__ ? <ScreenSizeIndicator /> : null}
      </>
    );
  }
}

export default Router;
