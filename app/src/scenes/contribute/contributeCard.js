import React from "react";
import { View, TouchableOpacity } from "react-native";
import Text from "../../components/MyText";

const ContributeItem = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View className="bg-white border shadow-sm border-gray-300 rounded-xl p-3 mb-5">
        <Text className="font-bold text-primary text-base">
          Contribuer à BPCO'Mieux
        </Text>
        <Text className="text-black text-sm mt-2">
          Dites-nous comment améliorer l'application{"\n"}
          <Text className="text-black text-xs">
            Nous lisons tous les messages
          </Text>
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ContributeItem;
