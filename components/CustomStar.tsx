import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import React from "react";

interface CustomStarProps {
  starText: string;
  starStyles?: string;
  textStyles?: string;
}
const CustomStar = ({ starText, starStyles, textStyles }: CustomStarProps) => {
  return (
    <View className="flex flex-row gap-3">
      <Icon
        name="star"
        size={20}
        color="#80af49"
        className={`${starStyles} `}
      />
      <Text
        className={`text-white z-50 flex font-extrabold text-xl${textStyles}  `}
      >
        {starText}
      </Text>
    </View>
  );
};

export default CustomStar;
