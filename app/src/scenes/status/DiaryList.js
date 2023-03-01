import React, { useContext, useCallback } from "react";
import { View, TouchableOpacity, Animated } from "react-native";
import Text from "../../components/MyText";
import { DiaryDataContext } from "../../context/diaryData";
import { formatDateThread } from "../../utils/date/helpers";
import StatusItem from "./status-item";
import { canEdit } from "./utils/index";
import { useNavigation } from "@react-navigation/native";

export const DiaryList = ({ ...props }) => {
  const navigation = useNavigation();
  const [diaryData] = useContext(DiaryDataContext);
  const sortedData = Object.keys(diaryData).sort((a, b) => {
    a = a.split("/").reverse().join("");
    b = b.split("/").reverse().join("");
    return b.localeCompare(a);
  });

  const renderItem = useCallback(
    ({ item: date }) => {
      return (
        <View>
          <View className="flex flex-row items-center">
            <View className="w-2 h-2 rounded-full bg-primary" />
            {canEdit(date) ? (
              <Text className="text-black text-xs pl-2 font-semibold">
                {formatDateThread(date)}
              </Text>
            ) : (
              <TouchableOpacity
              // style={styles.item}
              // onPress={() => navigation.navigate("too-late", { date })}
              >
                <Text className="text-black text-xs pl-2 font-semibold">
                  {formatDateThread(date)}
                </Text>
              </TouchableOpacity>
            )}
          </View>
          <StatusItem
            date={date}
            patientState={diaryData[date]}
            navigation={navigation}
          />
        </View>
      );
    },
    [diaryData]
  );

  const keyExtractor = useCallback((date) => date);

  return (
    <Animated.FlatList
      data={sortedData}
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
