import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Icon from "../../components/Icon";
import ArrowRightSvg from "../../../assets/arrow-right";

export const Card = ({
  preset = "grey",
  title,
  text,
  icon = null,
  image,
  onPress,
}) => {
  const PressableIfNeeded = ({ children }) =>
    onPress ? (
      <TouchableOpacity
        onPress={onPress}
        hitSlop={{ bottom: 10, left: 10, right: 10, top: 10 }}
      >
        {children}
      </TouchableOpacity>
    ) : (
      <>{children}</>
    );

  const iconSize = Dimensions.get("window").width > 640 ? 30 : 26;
  const titleFontSize = Dimensions.get("window").width > 640 ? 22 : 16;
  const textFontSize = Dimensions.get("window").width > 640 ? 18 : 14;
  const colors = {
    grey: { bg: "bg-[#F8F9FB]", border: "border-[#E7EAF1]" },
    orange: { bg: "bg-[#FFE1CE]", border: "border-[#FFB384]" },
  };

  return (
    <View
      className={`flex border rounded-[16px] p-4 ${colors[preset].bg} ${colors[preset].border}`}
    >
      <PressableIfNeeded>
        <View className="flex flex-row items-center justify-start">
          {icon && (
            <Icon
              width={iconSize}
              height={iconSize}
              color="#000091"
              icon={icon}
              className="mr-4 max-w-[40px] max-h-[40px]"
            />
          )}
          {image && (
            <Image {...image} className="mr-4 max-w-[40px] max-h-[40px]" />
          )}
          <View className="flex-shrink flex-grow flex-col">
            {title && (
              <Text
                className={`mb-[2px] font-[Karla-Bold] text-left text-[#26387C] text-[${titleFontSize}]`}
              >
                {title}
              </Text>
            )}
            {text && (
              <Text
                className={`mb-[2px] font-[Karla] text-left text-[#26387C] text-[${textFontSize}]`}
              >
                {text}
              </Text>
            )}
          </View>
          {onPress && <ArrowRightSvg color="#C7CED5" />}
        </View>
      </PressableIfNeeded>
    </View>
  );
};
