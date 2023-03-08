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
import Text from "../../components/MyText";
import Icon from "../../components/Icon";
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
      </>
    );
  }, [diaryData]);

  return (
    <SafeAreaView style={[styles.safe]} className="bg-primary flex-1">
      <NPS forceView={NPSvisible} close={() => setNPSvisible(false)} />
      <Header title="Mon suivi" navigation={navigation} />

      {/* TODO: this card is outsine the animated flatlist of DiaryList. Not nice for UX */}
      {!computeNewSurveyAvailable(diaryData) && (
        <View className="bg-white px-4 pt-6 pb-2">
          <View className="bg-white border shadow-sm border-gray-300 rounded-xl p-3 mb-5">
            <View className="flex flex-row items-center">
              <Icon width={20} height={20} color="#4ADE80" icon="CheckSvg" />
              <Text className="font-bold text-primary text-base flex-1">
                Vous avez déjà rempli votre suivi aujourd'hui
              </Text>
            </View>
            <Text className="text-black text-sm mt-2">
              Revenez demain, le{" "}
              {dayjs().locale("fr").add("1", "day").format("DD MMMM")}, pour
              remplir votre suivi du jour.
            </Text>
          </View>
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
  },
});

export default Status;
