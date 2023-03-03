import React from "react";
import { Text, View } from "react-native";
import { classNames } from "../../../utils";

import { Smiley } from "./Smiley";
import { BooleanInput } from "./BooleanInput";

export const SurveyItem = ({ question, value, onValueChanged }) => {
  const getBackgroundColor = (value) => {
    if (value !== undefined) {
      if (value === true) return "bg-red-100";
      if (value === false) return "bg-green-100";
      if (value === 1) return "bg-green-100";
      if (value === 2) return "bg-yellow-100";
      if (value === 3) return "bg-red-100";
    } else return "bg-[#F8F9FB]";
  };
  const getBorderColor = (value) => {
    if (value !== undefined) {
      if (value === true) return "border-red-200";
      if (value === false) return "border-green-200";
      if (value === 1) return "border-green-200";
      if (value === 2) return "border-yellow-200";
      if (value === 3) return "border-red-200";
    } else return "border-[#E7EAF1]";
  };

  const renderInput = () => {
    switch (question?.type) {
      case "smiley":
        return (
          <Smiley
            question={question}
            value={value}
            onValueChanged={onValueChanged}
          />
        );
      case "boolean":
        return (
          <BooleanInput
            question={question}
            value={value}
            onChange={(v) => onValueChanged({ question, value: v })}
          />
        );
      default:
        <View>
          <Text>pas encore geré</Text>
        </View>;
    }
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
        {renderInput()}
      </View>
    </View>
  );
};
