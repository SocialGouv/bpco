import React from "react";
import { View } from "react-native";
import { canEdit } from "./utils/index.js";
import logEvents from "../../services/logEvents";
import { Card } from "../../components/Card";
import { renderAlertIcon, renderAlertText } from "../../utils";

export default ({ navigation, indicateurs, patientState, date }) => {
  const handleEdit = (tab, editingSurvey = false, toGoals) => {
    if (!canEdit(date)) return;
    const currentSurvey = {
      date,
      answers: patientState,
    };
    navigation.push(tab, {
      currentSurvey,
      editingSurvey,
      toGoals,
    });
  };

  const hasAnswerSurvey = () =>
    patientStateRecords.some(([key, value]) => {
      return value !== undefined;
    });

  const handlePressItem = ({ editingSurvey, toGoals } = {}) => {
    if (!canEdit(date)) return navigation.navigate("too-late", { date });
    logEvents.logFeelingEditButtonClick();
    handleEdit("day-survey", editingSurvey, toGoals);
  };

  const patientStateRecords = patientState
    ? Object.entries(patientState).sort((_a, _b) => {
        const a = _a?.[1];
        const b = _b?.[1];
        const aIndex =
          indicateurs?.findIndex?.(
            (indicateur) => indicateur?.uuid === a?._indicateur?.uuid
          ) || 0;
        const bIndex =
          indicateurs?.findIndex?.(
            (indicateur) => indicateur?.uuid === b?._indicateur?.uuid
          ) || 0;
        return aIndex - bIndex;
      })
    : [];

  if (hasAnswerSurvey()) {
    return (
      <View className="pl-[15px] ml-1 -my-1 border-l-[0.4px] border-primary">
        <View className="mb-6 pt-5">
          <Card
            preset="grey"
            title={renderAlertText(patientState["alert"])}
            icon={renderAlertIcon(patientState["alert"])}
          />
        </View>
      </View>
    );
  } else {
    return (
      <View className="pl-[15px] ml-1 -my-1 border-l-[0.4px] border-primary">
        {canEdit(date) ? (
          <View className="my-1 pt-3 pb-10">
            <Card
              preset="grey"
              title={
                canEdit(date)
                  ? "Renseigner mon état pour ma journée d'hier"
                  : "Je ne peux plus saisir mon questionnaire pour ce jour"
              }
              image={{
                source: require("./../../../assets/imgs/indicateur.png"),
              }}
              onPress={handlePressItem}
            />
          </View>
        ) : (
          <View className="my-4" />
        )}
      </View>
    );
  }
};
