import React, { useContext, useCallback } from "react";
import { View, Animated, TouchableWithoutFeedback } from "react-native";
import Text from "../../components/MyText";
import { DiaryDataContext } from "../../context/diaryData";
import { formatDateThread } from "../../utils/date/helpers";
import StatusItem from "./status-item";
import { useNavigation } from "@react-navigation/native";
import ConsultedItem from "./ConsultedItem";
import dayjs from "dayjs";

export const DiaryList = ({ ...props }) => {
  const navigation = useNavigation();
  const [diaryData] = useContext(DiaryDataContext);

  const renderItem = useCallback(
    ({ item: date }) => {
      const surveyAlert = diaryData[date]?.survey_alert;
      const showConsulted =
        dayjs().diff(date, "day") >= 1 &&
        !!surveyAlert &&
        (surveyAlert === "orange" || surveyAlert === "red");

      return (
        <View>
          <View className="flex flex-row items-center">
            <View className="w-2 h-2 rounded-full bg-primary" />
            <TouchableWithoutFeedback
              onPress={() =>
                __DEV__ ? navigation.navigate("day-survey") : null
              }
            >
              <Text className="text-black text-xs pl-2 font-semibold">
                {formatDateThread(date)}
              </Text>
            </TouchableWithoutFeedback>
          </View>
          <View className="pl-[15px] ml-1 -my-1 pb-3 border-l-[0.4px] border-primary">
            <StatusItem alert={surveyAlert} />
            {showConsulted ? (
              <ConsultedItem
                navigation={navigation}
                alertLevel={surveyAlert}
                alertDate={date}
              />
            ) : null}
          </View>
        </View>
      );
    },
    [diaryData]
  );

  const keyExtractor = useCallback((date) => date);

  if (!diaryData)
    return (
      <View className="flex-1 bg-white items-center">
        <Text className="text-gray-500">Chargement...</Text>
      </View>
    );

  return (
    <Animated.FlatList
      data={Object.keys(diaryData).sort((a, b) => {
        a = a.split("/").reverse().join("");
        b = b.split("/").reverse().join("");
        return b.localeCompare(a);
      })}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      contentContainerStyle={{
        padding: 20,
        paddingBottom: 80,
      }}
      className="bg-white"
      {...props}
    />
  );
};
