import React from "react";
import { View, ScrollView } from "react-native";
import Text from "../../components/MyText";
import { onboardingStyles } from "../onboarding/styles";
import { SafeAreaViewWithOptionalHeader } from "../onboarding/ProgressHeader";
import PhoneSuiviSvg from "../../../assets/PhoneSuivi";
import Icon from "../../components/Icon";
import { renderAlertIcon } from "../../utils";
import dayjs from "dayjs";
import { ConsultedBooleanInput } from "./ConsultedBooleanInput";
import CloseButton from "../../components/CloseButton";
dayjs.locale("fr");

const Consulted = ({ navigation, route }) => {
  const alertLevel = route.params.alertLevel;
  const alertDate = route.params.alertDate;
  const submitAnswer = route.params.submitAnswer;

  return (
    <SafeAreaViewWithOptionalHeader style={onboardingStyles.safe}>
      <View
        style={{
          ...onboardingStyles.topContainer,
          flexDirection: "row-reverse",
        }}
      >
        <CloseButton
          onPress={() => {
            navigation.navigate("tabs");
          }}
        />
      </View>
      <ScrollView
        style={onboardingStyles.scroll}
        contentContainerStyle={onboardingStyles.scrollContentContainer}
      >
        <View style={onboardingStyles.containerCentered}>
          <View style={onboardingStyles.imageContainer}>
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
