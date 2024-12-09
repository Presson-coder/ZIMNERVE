import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

interface CustomButtonProps {
  title: string;
  containerStyles: string;
  handlePress?: () => void;
  textStyles?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  title,
  containerStyles,
  handlePress,
  textStyles,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-green-600 rounded-xl min-h-[50px] justify-center items-center ${
        isLoading ? "opacity-50" : ""
      } ${containerStyles}`}
      disabled={isLoading}
    >
      <Text className={`text-black font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
