import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Dimensions,
  Platform,
  StatusBar,
} from "react-native";
import { useFocusEffect } from "@react-navigation/native";
import Header from "../../components/Header";
import { colors } from "../../utils/colors";
import { useContext } from "react";
import { DiaryDataContext } from "../../context/diaryData";
import localStorage from "../../utils/localStorage";
import NPS from "../../services/NPS/NPS";
import Bubble from "../../components/bubble";
import ContributeCard from "../contribute/contributeCard";
import { DiaryList } from "./DiaryList";
import { Card } from "../../components/Card";
import dayjs from "dayjs";
import { computeNewSurveyAvailable } from "../../utils";

// import { updateInactivityReminder } from "../reminder/inactivityReminder";
// import { useLatestChangesModal } from "../news/latestChangesModal";

const Status = ({ navigation }) => {
  const [diaryData] = useContext(DiaryDataContext);
  const [NPSvisible, setNPSvisible] = useState(false);
  // const { showLatestChangesModal } = useLatestChangesModal();

  React.useEffect(() => {
    // updateInactivityReminder();
  }, []);

  useEffect(() => {
    (async () => {
      const onboardingStep = await localStorage.getOnboardingStep();
      const onboardingIsDone = await localStorage.getOnboardingDone();

      //if ONBOARDING_DONE is true, do nothing

      if (onboardingIsDone) {
        if (computeNewSurveyAvailable(diaryData))
          return navigation.replace("day-survey");
        return;
      } else {
        const isFirstAppLaunch = await localStorage.getIsFirstAppLaunch();
        if (isFirstAppLaunch !== "false") {
          navigation.reset({
            routes: [
              {
                name: "onboarding",
                params: { screen: onboardingStep || "OnboardingPresentation" },
              },
            ],
          });
        }
      }
    })();
  }, [navigation]);

  useFocusEffect(
    React.useCallback(() => {
      (async () => {
        // showLatestChangesModal();
      })();
    }, [])
  );

  const renderFooter = useCallback(() => {
    return (
      <>
        <Bubble diaryData={diaryData} />
        <ContributeCard onPress={() => setNPSvisible(true)} />
      </>
    );
  }, [diaryData]);

  return (
    <SafeAreaView style={[styles.safe]} className="bg-primary">
      <NPS forceView={NPSvisible} close={() => setNPSvisible(false)} />
      <Header title="Mon suivi" navigation={navigation} />

      {/* TODO: this card is outsine the animated flatlist of DiaryList. Not nice for UX */}
      {!computeNewSurveyAvailable(diaryData) && (
        <View className="bg-[#FFF] px-4 pt-6 pb-2">
          <Card
            preset="grey"
            title="Vous avez déjà rempli votre suivi aujourd'hui"
            text={`Revenez demain, le ${dayjs()
              .locale("fr")
              .add("1", "day")
              .format("DD MMMM")}, pour remplir votre suivi du jour.`}
          />
        </View>
      )}

      <DiaryList ListFooterComponent={renderFooter} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safe: {
    ...(Platform.OS === "android" && {
      paddingTop: (StatusBar.currentHeight || 24) + 10,
    }),
    flex: 1,
  },
});

export default Status;
