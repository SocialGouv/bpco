import { Dimensions, Text, View } from "react-native";
import Icon from "../Icon";
import { renderAlertIcon, renderAlertText, classNames } from "../../utils";

const Alert = ({ alert }) => {
  const iconSize = Dimensions.get("window").width < 640 ? "50" : "80";
  let bgColor, borderColor;
  if (alert === "red") {
    bgColor = "bg-red-50";
    borderColor = "border-red-300";
  } else if (alert === "orange") {
    bgColor = "bg-orange-50";
    borderColor = "border-orange-300";
  } else if (alert === "green") {
    bgColor = "bg-green-50";
    borderColor = "border-green-300";
  }

  return (
    <View
      className={classNames(
        "w-full p-4 tablet:p-7 border-2 rounded-2xl items-center",
        bgColor,
        borderColor
      )}
    >
      <Icon
        icon={renderAlertIcon(alert)}
        width={iconSize}
        height={iconSize}
        styleContainer={{
          height: parseInt(iconSize),
          width: parseInt(iconSize),
          marginBottom: 10,
        }}
      />
      <Text className="text-xl tablet:text-2xl text-center font-[Karla-Bold] text-primary-900">
        {renderAlertText(alert)}
      </Text>
    </View>
  );
};
export default Alert;
