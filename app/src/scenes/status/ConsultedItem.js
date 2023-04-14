import React, { useContext } from "react";
import { View } from "react-native";
import { Card } from "../../components/Card";
import { ConsultedDataContext } from "../../context/consultedData";
import dayjs from "dayjs";

const ConsultedItem = ({ navigation, alertLevel, alertDate }) => {
  const [consultedData] = useContext(ConsultedDataContext);

  return (
    <View className="pl-[15px] ml-1 border-l-[0.4px] border-primary">
      <View className="mb-3">
        {renderCard(
          consultedData[alertDate],
          alertLevel,
          alertDate,
          navigation
        )}
      </View>
    </View>
  );
};

export default ConsultedItem;

const renderCard = (consultedDataItem, alertLevel, alertDate, navigation) => {
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
      text={renderActionType(consultedDataItem.consulted_answer)}
      icon={"PhoneCheck"}
    />
  );
};

const renderActionType = (consultedAnswer) => {
  switch (consultedAnswer) {
    case "phone":
      return "Vous avez appelé un professionnel de santé";

    case "RDV":
      return "Vous avez pris RDV avec un professionnel de santé";

    default:
      return "Vous avez consulté un professionnel de santé";
  }
};
