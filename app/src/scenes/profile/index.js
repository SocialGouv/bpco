import React, { useEffect, useRef, useState } from "react";
import { View, ScrollView, StyleSheet, TextInput, Alert } from "react-native";
import Text from "../../components/MyText";
import Button from "../../components/Button";
import localStorage from "../../utils/localStorage";
import { ONBOARDING_STEPS } from "../../utils/constants";
import { onboardingStyles } from "../onboarding/styles";
import { StickyButtonContainer } from "../onboarding/components/StickyButton";
import { SafeAreaViewWithOptionalHeader } from "../onboarding/ProgressHeader";
import { OnboardingBackButton } from "../onboarding/components/BackButton";
import { BooleanInput } from "./components/BooleanInput";
import { colors } from "../../utils/colors";
import SelectDropdown from "react-native-select-dropdown";
import ArrowUpSvg from "../../../assets/ArrowUp";
import dayjs from "dayjs";
import BackButton from "../../components/BackButton";
import Header from "../../components/Header";

const Profile = ({ navigation }) => {
  const [answerOxygen, setAnswerOxygen] = useState(null);
  const [answerVentilationDevice, setAnswerVentilationDevice] = useState(null);

  const [sex, setSex] = useState(null);
  const [birthyear, setBirthyear] = useState(null);
  const [weight, setWeight] = useState(null);

  useEffect(() => {
    (async () => {
      const oxygenStorage = await localStorage.getOxygen();
      if (oxygenStorage !== undefined) setAnswerOxygen(oxygenStorage);
      const ventilationDevice = await localStorage.getVentilationDevice();
      if (ventilationDevice !== undefined)
        setAnswerVentilationDevice(ventilationDevice);

      const sexStorage = await localStorage.getSex();
      const ageStorage = await localStorage.getBirthyear();
      const weightStorage = await localStorage.getWeight();
      if (sexStorage) setSex(sexStorage);
      if (ageStorage) setBirthyear(ageStorage);
      if (weightStorage) setWeight(weightStorage);
      await localStorage.setOnboardingStep(ONBOARDING_STEPS.STEP_OXYGEN);
    })();
  }, []);

  const handlePress = async () => {
    localStorage.setOxygen(answerOxygen);
    localStorage.setVentilationDevice(answerVentilationDevice);
    if (!validate(birthyear, weight)) return;
    if (sex) localStorage.setSex(sex);
    if (birthyear) localStorage.setBirthyear(birthyear);
    if (weight) localStorage.setWeight(weight);
    navigation.goBack();
  };

  return (
    <SafeAreaViewWithOptionalHeader className="flex-1">
      <Header title="Mon profil" navigation={navigation} backArrow />
      <ScrollView
        style={onboardingStyles.scroll}
        contentContainerStyle={onboardingStyles.scrollContentContainer}
      >
        <View style={onboardingStyles.container} className="">
          <Dropdown type={"sex"} value={sex} setValue={setSex} />
          <TextInputProfile
            type={"birthyear"}
            value={birthyear}
            setValue={setBirthyear}
          />
          <TextInputProfile
            type={"weight"}
            value={weight}
            setValue={setWeight}
          />

          {/* <View style={onboardingStyles.imageContainer}>
            <OxygenBottle />
          </View> */}
          <Text style={onboardingStyles.centeredBoldText} className="mt-8">
            Avez-vous au quotidien besoin d’oxygène
          </Text>
          <BooleanInput
            center
            value={answerOxygen}
            onChange={setAnswerOxygen}
          />
          {/* <View style={onboardingStyles.imageContainer}>
            <VentilationDevice />
          </View> */}
          <Text style={onboardingStyles.centeredBoldText} className="mt-8">
            Avez-vous un appareil de ventilation ?
          </Text>
          <BooleanInput
            center
            value={answerVentilationDevice}
            onChange={setAnswerVentilationDevice}
          />
        </View>
      </ScrollView>
      <StickyButtonContainer>
        <Button
          title={`Je valide`}
          onPress={handlePress}
          buttonStyle={{ minWidth: 0 }}
        />
      </StickyButtonContainer>
    </SafeAreaViewWithOptionalHeader>
  );
};

export default Profile;

const TextInputProfile = ({ type, value, setValue }) => {
  let title;
  let maxLength;
  let placeholder;
  if (type === "birthyear") {
    title = "Né en";
    maxLength = 4;
    placeholder = "1950";
  }
  if (type === "weight") {
    title = "Poids";
    maxLength = 3;
    placeholder = "50";
  }

  return (
    <View className="flex flex-row justify-between mb-8 w-5/6 max-w-[500px] mx-auto">
      <View className="justify-center items-start w-2/5">
        <Text className="text-2xl">{title} :</Text>
      </View>
      <View className="justify-center items-end w-3/5">
        <TextInput
          className="rounded-[8px] border-[#444] border p-4 w-[100%]"
          placeholder={placeholder}
          keyboardType="number-pad"
          maxLength={maxLength}
          onChangeText={(newValue) => {
            setValue(newValue);
          }}
          value={value}
        />
      </View>
    </View>
  );
};

const Dropdown = ({ type, value, setValue }) => {
  const data = ["Femme", "Homme"];
  const title = "Sexe";

  return (
    <View className="flex flex-row justify-between mb-8 w-5/6 max-w-[500px] mx-auto">
      <View className="justify-center items-center">
        <Text className="text-2xl">{title} :</Text>
      </View>
      <View className="justify-center items-end">
        <SelectDropdown
          data={data}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setValue(selectedItem);
          }}
          defaultButtonText={value ?? " "}
          buttonStyle={styles.dropdown1BtnStyle}
          buttonTextStyle={styles.dropdown1BtnTxtStyle}
          renderDropdownIcon={(isOpened) => {
            return (
              <ArrowUpSvg
                color={"#444"}
                style={{
                  transform: [{ rotate: isOpened ? "0deg" : "180deg" }],
                  marginRight: 5,
                }}
              />
            );
          }}
          dropdownIconPosition={"right"}
          dropdownStyle={styles.dropdown1DropdownStyle}
          rowStyle={styles.dropdown1RowStyle}
          rowTextStyle={styles.dropdown1RowTxtStyle}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  dropdown1BtnStyle: {
    flex: 1,
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  dropdown1BtnTxtStyle: { color: "#444", textAlign: "left" },
  dropdown1DropdownStyle: { backgroundColor: "#EFEFEF" },
  dropdown1RowStyle: {
    backgroundColor: "#EFEFEF",
    borderBottomColor: "#C5C5C5",
  },
  dropdown1RowTxtStyle: { color: "#444", textAlign: "left" },
  header: {
    marginTop: 10,
    marginBottom: 15,
    alignItems: "center",
  },
  // title: {
  //   color: colors.BLUE,
  //   fontSize: 28,
  //   marginBottom: 20,
  //   paddingBottom: 15,
  //   fontFamily: "Karla-Bold",
  //   textAlign: "center",
  // },
  subtitle: {
    fontSize: 20,
    color: colors.DARK_BLUE,
    paddingBottom: 10,
    paddingTop: 10,
    fontWeight: "normal",
  },
});

const validate = (birthyear, weight) => {
  if (
    birthyear &&
    !(
      birthyear.length === 4 &&
      birthyear > 1900 &&
      birthyear < dayjs().locale("fr").subtract(10, "year").format("YYYY")
    )
  ) {
    Alert.alert("Erreur", "Veuillez entrer une année de naissance valide");
    return false;
  }
  console.log("weight :", weight);
  if (weight && !(weight > 15 && weight < 200)) {
    Alert.alert("Erreur", "Veuillez entrer un poids valide");
    return false;
  }
  return true;
};
