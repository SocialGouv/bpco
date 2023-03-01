import { Text, Touchable } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const WarnFamily = () => {
  return (
    <>
      <Text>Prevenir votre proche</Text>
      <TouchableOpacity
        className="bg-red-500 p-4 rounded-full my-5"
        onPress={handlePress}
      >
        <Text className="font-bold text-center">Envoyer un sms</Text>
      </TouchableOpacity>
    </>
  );
};

export default WarnFamily;
