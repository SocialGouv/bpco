import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../../components/MyText";

export const Boolean = ({ order = "DESC", value, onChange, center = true }) => {
  const color = {
    ASC: {
      false: { text: "text-white", bg: "border-red-400 bg-red-400" },
      true: { text: "text-white", bg: "border-green-400 bg-green-400" },
    },
    DESC: {
      true: { text: "text-white", bg: "border-red-400 bg-red-400" },
      false: { text: "text-white", bg: "border-green-400 bg-green-400" },
    },
  };

  return (
    <View
      className={`flex flex-row ${
        center ? "justify-center" : "justify-start"
      } gap-12 items-center pt-5`}
    >
      <TouchableOpacity onPress={() => onChange(false)}>
        <View
          className={`flex justify-center h-14 px-8 rounded-full border border-[#26387C] ${
            typeof value === "boolean" && !value ? color[order]?.false.bg : ""
          }`}
        >
          <Text
            className={`text-2xl ${
              typeof value === "boolean" && !value
                ? color[order]?.false.text
                : "text-[#26387C]"
            }`}
          >
            Non
          </Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onChange(true)}>
        <View
          className={`flex justify-center h-14 px-8 rounded-full border border-[#26387C] ${
            typeof value === "boolean" && value ? color[order]?.true.bg : ""
          }`}
        >
          <Text
            className={`text-2xl ${
              typeof value === "boolean" && value
                ? color[order]?.true.text
                : "text-[#26387C]"
            }`}
          >
            Oui
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};
