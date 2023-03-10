import React from "react";
import {
  Modal,
  Platform,
  AppState,
  StyleSheet,
  View,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Text from "../../components/MyText";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Mark from "./Mark";
// import Notifications from "../notifications";
import { sendMail } from "../mail";
import { colors } from "../../utils/colors";
import Matomo from "../matomo";
import logEvents from "../logEvents";
import localStorage from "../../utils/localStorage";
import app from "../../../app.json";

const formatText = ({
  useful,
  feedback,
  userId,
  contact,
  userType,
  startDate,
}) =>
  `
User: ${userId}
Version: ${app.expo.version}
OS: ${Platform.OS}
Date de téléchargement: ${startDate}
Comment pouvons-nous vous être encore plus utile: ${feedback}
Ce service vous a-t-il été utile: ${useful}
contact: ${contact}
userType: ${userType}
`;

const NPSTimeoutMS = __DEV__ ? 1000 * 3 : 1000 * 60 * 60 * 24 * 10;

const STORE_KEYS = {
  NPS_DONE: "@NPSDone",
  INITIAL_OPENING: "@NPSInitialOpening",
};

class NPS extends React.Component {
  state = {
    visible: false,
    useful: null,
    reco: null,
    feedback: "",
    contact: "",
    sendButtonText: "Envoyer",
    NPSKey: 0,
  };

  async componentDidMount() {
    if (__DEV__) {
      this.reset();
    }
    this.NPSListener = AppState.addEventListener(
      "change",
      this.handleAppStateChange
    );
    if (!__DEV__) {
      // this.notificationsListener = Notifications.listen(
      //   this.handleNotification,
      //   "NPS"
      // );
    }
    this.checkNeedNPS();
  }

  componentWillUnmount() {
    this.NPSListener?.remove();
    // Notifications.remove(this.notificationsListener);
  }

  componentDidUpdate(prevProps, prevState) {
    if (!prevState.NPSKey && this.state.NPSKey) {
      this.checkNeedNPS();
    }
    if (!prevProps.forceView && this.props.forceView && !this.state.visible) {
      // eslint-disable-next-line react/no-did-update-set-state
      this.setState({ visible: true });
    }
    if (prevState.visible && !this.state.visible) {
      if (this.props.close) {
        this.props.close();
      }
      this.npsSent = false;
    }
  }

  handleNotification = (notification) => {
    if (
      notification.title === "Vos retours sont importants pour nous" &&
      notification.userInteraction === true
    ) {
      this.setState({ visible: true });
    }
  };

  reset = async () => {
    await AsyncStorage.removeItem(STORE_KEYS.NPS_DONE);
    await AsyncStorage.removeItem(STORE_KEYS.INITIAL_OPENING);
  };

  checkNeedNPS = async () => {
    const NPSDone = await AsyncStorage.getItem(STORE_KEYS.NPS_DONE);
    if (NPSDone) {
      return;
    }

    const appFirstOpening = await AsyncStorage.getItem(
      STORE_KEYS.INITIAL_OPENING
    );
    if (__DEV__) return;
    if (!appFirstOpening && !__DEV__) {
      await AsyncStorage.setItem(
        STORE_KEYS.INITIAL_OPENING,
        new Date().toISOString()
      );
      // Notifications.scheduleNotification({
      //   date: new Date(Date.now() + NPSTimeoutMS),
      //   title: "Vos retours sont importants pour nous",
      //   message: "Avez-vous quelques secondes pour donner votre avis ?",
      // });
      return;
    }
    const opening = await AsyncStorage.getItem(STORE_KEYS.INITIAL_OPENING);
    const timeForNPS =
      Date.now() - Date.parse(new Date(opening)) > NPSTimeoutMS;
    if (!timeForNPS) {
      return;
    }
    logEvents.logNPSOpen();
    await AsyncStorage.setItem(STORE_KEYS.NPS_DONE, "true");
    this.setState({ visible: true });
  };

  handleAppStateChange = (newState) => {
    const { NPSKey } = this.state;
    if (newState === "active" && !NPSKey) {
      this.setState({ NPSKey: 1 });
    }
    if (newState.match(/inactive|background/) && Boolean(NPSKey)) {
      this.setState({ NPSKey: 0 });
    }
  };

  setUseful = (useful) => this.setState({ useful });
  setReco = (reco) => this.setState({ reco });
  setFeedback = (feedback) => this.setState({ feedback });
  setSendButtonText = (sendButtonText) => this.setState({ sendButtonText });
  setContact = (contact) => this.setState({ contact });

  onClose = async () => {
    const { useful, reco } = this.state;
    if ((useful !== null || reco !== null) && !this.npsSent) {
      await this.sendNPS();
    }
    this.setState({ visible: false });
  };

  sendNPS = async () => {
    if (this.npsSent) {
      return;
    }
    const { useful, feedback, contact } = this.state;
    this.setSendButtonText("Merci !");
    logEvents.logNPSUsefulSend(useful);
    const userId = Matomo.userId;
    const userType = await localStorage.getUserType();
    const startDate = await AsyncStorage.getItem("@SURVEY_DATE");
    sendMail({
      subject: "BPCO'Mieux - NPS",
      text: formatText({
        useful,
        feedback,
        userId,
        contact,
        userType,
        startDate,
      }),
    });
    this.npsSent = true;
    this.setState({
      visible: false,
      useful: null,
      feedBack: "",
      contact: "",
      sendButtonText: "Envoyer",
    });
  };

  renderPage() {
    const { feedback, sendButtonText, contact, useful, reco } = this.state;
    return (
      <>
        <Text style={styles.topSubTitle}>
          Ce service vous a-t-il été utile ?
        </Text>
        <Mark
          selected={useful}
          onPress={this.setUseful}
          bad="Pas utile du tout"
          good="Extrêmement utile"
        />
        <Text style={styles.topSubTitle}>
          Pour améliorer notre service, avez-vous quelques recommandations à
          nous faire ?
        </Text>
        <TextInput
          className="w-full h-24 rounded-lg border border-gray-300 bg-gray-100 p-4 mt-4 items-start justify-start"
          onChangeText={this.setFeedback}
          placeholder="Recommandations..."
          value={feedback}
          multiline
          textAlignVertical="top"
          returnKeyType="next"
        />
        {/* <Text style={styles.topSubTitle}>Quelle est la probabilité que vous recommandiez ce service à un ami ou un proche ?</Text>
        <Mark
          selected={reco}
          onPress={this.setReco}
          bad="Pas du tout probable"
          good="Très probable"
        /> */}
        <Text style={styles.topSubTitle}>
          Echanger avec vous serait précieux pour améliorer notre service,
          laissez-nous votre adresse mail si vous le souhaitez.
        </Text>
        <TextInput
          className="w-full rounded-lg border border-gray-300 bg-gray-100 p-4 mt-4 items-start justify-start"
          value={contact}
          placeholder="adresse@mail.com (facultatif)"
          onChangeText={this.setContact}
          autoCorrect={false}
          autoCapitalize="none"
          returnKeyType="go"
          onSubmitEditing={this.sendNPS}
        />
        <TouchableOpacity
          className="my-5 items-start self-center flex-0 mb-36 bg-primary px-5 py-3 rounded-full disabled:opacity-50"
          disabled={sendButtonText === "Merci !"}
          onPress={this.sendNPS}
        >
          <Text className="text-white">{sendButtonText}</Text>
        </TouchableOpacity>
      </>
    );
  }

  render() {
    const { visible } = this.state;
    return (
      <Modal
        visible={visible}
        animationType="slide"
        presentationStyle="formSheet"
        onDismiss={this.onClose}
      >
        <View style={styles.container}>
          <KeyboardAvoidingView
            style={styles.keyboardAvoidingView}
            behavior={Platform.select({ ios: "padding", android: null })}
          >
            <View className="py-4 px-7">
              <TouchableOpacity onPress={this.onClose}>
                <Text className="underline text-primary font-[Karla-Bold]">
                  Retour
                </Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              style={styles.scrollView}
              keyboardDismissMode="on-drag"
              onScrollBeginDrag={Keyboard.dismiss}
            >
              {this.renderPage()}
            </ScrollView>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#f9f9f9",
  },
  scrollView: {
    flex: 1,
    flexBasis: "100%",
    minHeight: "100%",
    paddingVertical: 20,
    paddingHorizontal: 30,
    marginBottom: 50,
  },
  keyboardAvoidingView: {
    flex: 1,
    minHeight: "100%",
  },
  topTitle: {
    width: "95%",
    flexShrink: 0,
    marginTop: 10,
    color: colors.BLUE,
  },
  topSubTitle: {
    width: "95%",
    flexShrink: 0,
    marginTop: 35,
    color: "#191919",
  },
  feedback: {
    width: "100%",
    height: 100,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#dbdbe9",
    backgroundColor: "#f3f3f6",
    padding: 15,
    marginTop: 15,
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },
  contact: {
    width: "100%",
    height: 50,
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#dbdbe9",
    backgroundColor: "#f3f3f6",
    paddingLeft: 15,
    marginTop: 15,
    marginBottom: 10,
    justifyContent: "center",
    color: colors.BLUE,
  },
});

export default NPS;
