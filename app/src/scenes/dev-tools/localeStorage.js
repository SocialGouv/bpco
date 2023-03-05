import React from "react";
import { View, SafeAreaView, Text } from "react-native";
import { ScrollView } from "react-native";

import AsyncStorage from "@react-native-async-storage/async-storage";

const LocalStorage = () => {
  const [keys, setKeys] = React.useState();
  const [values, setValues] = React.useState({});

  React.useEffect(() => {
    const getKeys = async () => {
      const _keys = await AsyncStorage.getAllKeys();
      setKeys(_keys);
    };
    getKeys();
  }, []);

  React.useEffect(() => {
    if (!keys) return;
    const getValues = async () => {
      const _values = await AsyncStorage.multiGet(keys);
      setValues(_values);
    };
    getValues();
  }, [keys]);

  if (!values || !values.length)
    return (
      <View>
        <Text>Chargement...</Text>
      </View>
    );

  return (
    <SafeAreaView className="bg-gray-100 flex-1">
      <ScrollView className="bg-white">
        {values.map(([key, value]) => {
          return (
            <View key={key} className="px-1 py-2 border-b border-gray-200">
              <Text className="text-xs text-gray-700 mb-1">{key}</Text>
              <Text>{value}</Text>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
};

export default LocalStorage;
