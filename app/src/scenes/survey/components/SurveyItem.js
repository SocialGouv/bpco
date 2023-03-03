import React from "react";
import { Text, View } from "react-native";
import { classNames } from "../../../utils";

import { BooleanInput } from "./BooleanInput";

export const SurveyItem = ({ question, value, onValueChanged }) => {
  const getBackgroundColor = (value) => {
    if (value !== undefined) {
      if (value) return "bg-red-100";
      else return "bg-green-100";
    } else return "bg-[#F8F9FB]";
  };
  const getBorderColor = (value) => {
    if (value !== undefined) {
      if (value) return "border-red-200";
      else return "border-green-200";
    } else return "border-[#E7EAF1]";
  };

  return (
    <View
      className={classNames(
        "w-full border rounded-2xl mt-2",
        getBackgroundColor(value),
        getBorderColor(value)
      )}
    >
      <View className="p-4">
        <View className="flex-row items-start">
          <Text className="text-xl text-left text-blue-900 shrink ml-2 pt-1">
            {question.name}
          </Text>
        </View>
        <BooleanInput
          question={question}
          value={value}
          onChange={(v) => onValueChanged({ question, value: v })}
        />
      </View>
    </View>
  );
};
