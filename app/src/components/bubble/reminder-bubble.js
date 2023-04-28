import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../MyText";

const ReminderItem = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="bg-primary border shadow-sm border-gray-300 rounded-xl p-3 mb-5">
        <Text className="font-[Karla-Bold] text-white text-base">
          Mettre un rappel
        </Text>
        <Text className="text-white text-sm mt-2">
          Saisir tous les jours votre suivi me permet de mieux suivre mon
          évolution
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ReminderItem;
