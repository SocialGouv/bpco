import React, { useContext } from "react";
import { View } from "react-native";
import { Card } from "../../components/Card";
import { ConsultedDataContext } from "../../context/consultedData";
import dayjs from "dayjs";

const ConsultedItem = ({ navigation, alertLevel, alertDate }) => {
  const [consultedData] = useContext(ConsultedDataContext);

  if (
    !consultedData[alertDate] &&
    dayjs().subtract(4, "day").isAfter(alertDate)
  ) {
    // don't show ConsultedItem if diary older than 4 days (and it has not been answered)
    return null;
  }

  return (
    <View className="pl-[15px] ml-1 border-l-[0.4px] border-primary">
      <View className="mb-3">
        {renderCard(consultedData[alertDate], navigation)}
      </View>
    </View>
  );
};

export default ConsultedItem;

const renderCard = (consultedDataItem, navigation) => {
  if (!consultedDataItem) {
    return (
      <Card
        preset="grey"
        text={"Avez-vous consulté un professionnel de santé ?"}
        icon={"QuestionSetting"}
        onPress={() =>
          navigation.push("consulted-after-alert", {
            alertLevel,
            alertDate,
          })
        }
      />
    );
  }

  if (consultedDataItem.consulted_answer === "no") {
    return (
      <Card
        preset="grey"
        text={"Vous n'avez pas consulté de professionnel de santé"}
        icon={"HandCross"}
      />
    );
  }

  return (
    <Card
      preset="grey"
      text={`Vous avez ${renderActionType(
        consultedDataItem.consulted_answer
      )} un professionnel de santé`}
      icon={"PhoneCheck"}
    />
  );
};

const renderActionType = (consultedAnswer) => {
  switch (consultedAnswer) {
    case "phone":
      return "appelé";

    case "RDV":
      return "pris RDV avec";

    default:
      return "consulté";
  }
};
