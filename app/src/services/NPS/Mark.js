import React from "react";
import { TouchableOpacity, View } from "react-native";
import { classNames } from "../../utils";
import Text from "../../components/MyText";

const Mark = ({ onPress, selected, bad, good }) => (
  <>
    <View className="mt-4 flex-row w-full shrink-0">
      {[...Array(11).keys()].map((mark, index, array) => (
        <TouchableOpacity
          className="basis-5 grow"
          onPress={() => onPress(mark)}
          key={mark}
        >
          <View
            className={classNames(
              "h-10 border border-gray-300 rounded-md justify-center items-center mr-1",
              index === array.length - 1 ? "mr-0" : "",
              mark === selected ? "bg-blue-700" : ""
            )}
          >
            <Text
              className={classNames(
                "font-bold",
                mark === selected ? "text-white" : "text-gray-800"
              )}
            >
              {mark}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
    <View className="flex-row justify-between w-full mt-1">
      <Text className="text-gray-400">{bad}</Text>
      <Text className="text-gray-400">{good}</Text>
    </View>
  </>
);

export default Mark;
