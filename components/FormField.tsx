import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import {icons } from "@/constants";

interface FormFieldProps {
  title: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  placeholder?: string;
  // isFocused?: boolean;
}

const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  placeholder,
  keyboardType,
  // isFocused,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocusedInput, setIsFocusedInput] = useState(false);

  return (
    <View className={`space-y-2 py-2 ${otherStyles}`}>
      <Text className="text-base text-gray-700 font-medium pb-2">{title}</Text>
      <View
        className={`border w-full bg-gray-100 h-14 px-4 bg-black-100 rounded-xl focus:border-secondary flex-row items-center border-black-200 ${
           isFocusedInput ? "border-green-500 " : "border-gray-300"
        }`}
      >
        <TextInput
          className={`flex-1 text-gray-700 font-semibold text-base  `}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setIsFocusedInput(true)}
          onBlur={() => setIsFocusedInput(false)}
        />
        {(title === "Password" || title === "Confirm Password") && (
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
