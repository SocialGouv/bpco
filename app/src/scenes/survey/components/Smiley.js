import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import CircledIcon from "../../../components/CircledIcon";
import { classNames } from "../../../utils";
import { answers as emojis } from "../utils";

export const Smiley = ({ question, value, onValueChanged, order = "DESC" }) => {
  return (
    <View className="flex flex-row justify-center gap-8 mt-2 mb-4">
      {emojis
        .map((emoji, i) => {
          let _emoji = {};
          if ((question.order || order) === "DESC") {
            _emoji = emojis[emojis.length - 1 - i];
          } else {
            Object.assign(_emoji, emoji);
          }
          _emoji.score = i + 1;
          return _emoji;
        })
        .map((emoji, i) => {
          const active = value === emoji.score;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => {
                const nextValue = emoji?.score;
                onValueChanged?.({ question, value: nextValue });
              }}
            >
              <View
                className={classNames(
                  "p-5 bg-white border border-gray-300 rounded-lg",
                  active ? "bg-primary" : ""
                )}
              >
                <CircledIcon
                  color={emoji.backgroundColor}
                  borderColor={emoji.borderColor}
                  iconColor={emoji.iconColor}
                  icon={emoji.icon}
                  iconContainerStyle={{ marginRight: 0 }}
                  iconWidth={32}
                  iconHeight={32}
                />
                {/* <Text>{emoji?.score}</Text> */}
              </View>
            </TouchableOpacity>
          );
        })}
    </View>
  );
};
