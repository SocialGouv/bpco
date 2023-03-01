import { Dimensions, Text, View } from "react-native";
import Lungs from "../../../assets/onboarding/Lungs";
import AlertSVG from "../../../assets/onboarding/Alert";
import AlertOrangeSVG from "../../../assets/onboarding/AlertOrange";
import { colors } from "../../utils/colors";
import Icon from "../Icon";
import { renderAlertIcon, renderAlertText } from "../../utils";

const Alert = ({ alert }) => {
  const iconSize = Dimensions.get("window").width < 640 ? "50" : "80";
  return (
    <View style={[styles.container]} className="p-4 tablet:p-7">
      <Text style={styles.text} className="text-xl tablet:text-2xl">
        {renderAlertText(alert)}
      </Text>
      <Icon
        icon={renderAlertIcon(alert)}
        width={iconSize}
        height={iconSize}
        styleContainer={{
          height: parseInt(iconSize),
          width: parseInt(iconSize),
        }}
      />
    </View>
  );
};
export default Alert;

const styles = {
  container: {
    width: "100%",
    backgroundColor: "rgba(38, 56, 124, 0.03)",
    borderColor: "rgba(31, 198, 213, 0.2)",
    borderWidth: 1,
    borderRadius: 16,
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    fontFamily: "Karla-Bold",
    color: colors.BLUE,
    marginBottom: 10,
  },
};
