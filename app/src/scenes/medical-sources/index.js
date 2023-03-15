import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Platform,
  StatusBar,
  TouchableOpacity,
  Linking,
} from "react-native";
import Header from "../../components/Header";
import { ScrollView } from "react-native";
import LinkSvg from "../../../assets/Link";

const MedicalSources = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safe} className="bg-primary flex-1">
      <Header title="Sources médicales" navigation={navigation} backArrow />
      <ScrollView className="bg-white flex-1">
        <Item
          title="Les complications de la BPCO"
          link="https://www.has-sante.fr/jcms/p_3118953/fr/les-complications-de-la-bpco-une-hospitalisation-au-cas-par-cas"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const Item = ({ title, link }) => {
  return (
    <TouchableOpacity onPress={() => Linking.openURL(link)}>
      <View className="p-2">
        <View className="flex flex-row items-center">
          <View className="flex justify-center flex-1 ml-1">
            <Text className="text-gray-800 text-md tablet:text-xl">
              {title}
            </Text>
            <Text className="text-gray-400 text-xs tablet:text-md">{link}</Text>
          </View>
          <View className="w-11 h-11 items-center justify-center">
            <LinkSvg color="#0074d4" width={20} height={20} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  safe: {
    ...(Platform.OS === "android" && {
      paddingTop: (StatusBar.currentHeight || 24) + 10,
    }),
  },
});

export default MedicalSources;
