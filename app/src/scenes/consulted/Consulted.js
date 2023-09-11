import React from "react";
import { View, ScrollView } from "react-native";
import Text from "../../components/MyText";
import { SafeAreaViewWithOptionalHeader } from "../onboarding/ProgressHeader";
import PhoneSuiviSvg from "../../../assets/PhoneSuivi";
import Icon from "../../components/Icon";
import { renderAlertIcon } from "../../utils";
import dayjs from "dayjs";
import { ConsultedBooleanInput } from "./ConsultedBooleanInput";
import CloseButton from "../../components/CloseButton";
import logEvents from "../../services/logEvents";
dayjs.locale("fr");

const Consulted = ({ navigation, route, submitAnswer, onClose }) => {
  const alertLevel = route.params.alertLevel;
  const alertDate = route.params.alertDate;

  return (
    <SafeAreaViewWithOptionalHeader className="bg-white flex">
      <View className="flex flex-row-reverse space-between">
        <CloseButton
          onPress={() => {
            onClose();
            logEvents.logConsultedAnswer("close");
            navigation.navigate("tabs");
          }}
        />
      </View>
      <ScrollView className="flex" contentContainerStyle={{ flexGrow: 1 }}>
        <View className="justify-center items-stretch px-4 flex-grow">
          <View className="my-5 justify-center align-center flex flex-row">
            <PhoneSuiviSvg />
          </View>
          <Text className="text-primary tablet:pb-4 text-2xl tablet:text-4xl font-[Karla-Bold] text-center">
            Mon suivi
          </Text>
          <Text className="text-xl tablet:text-2xl max-w-xl mx-auto text-center my-4">
            À votre dernière connexion, le{" "}
            <Text className="text-primary">
              {dayjs(alertDate).format("D MMMM YYYY")}
            </Text>
            , vous avez eu une préconisation
          </Text>
          <View className="flex flex-row items-center justify-center">
            <Icon
              icon={renderAlertIcon(alertLevel)}
              styleContainer={{ height: 100 }}
              width={70}
              height={70}
            />
          </View>
          <Text className="text-xl tablet:text-2xl max-w-xl mx-auto text-center my-4 mt-10">
            Avez-vous appelé/consulté un professionnel de santé ?
          </Text>
          <ConsultedBooleanInput
            navigation={navigation}
            submitAnswer={submitAnswer}
          />
        </View>
      </ScrollView>
    </SafeAreaViewWithOptionalHeader>
  );
};

export default Consulted;
