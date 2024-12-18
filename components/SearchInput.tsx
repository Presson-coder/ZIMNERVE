import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";
import EvilIcons from "@expo/vector-icons/EvilIcons";

interface SearchInputProps {
  title: string;
  value: string;
  handleChangeText: (e: string) => void;
  otherStyles?: string;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  placeholder?: string;
  isFocused?: boolean;
}

const SearchInput = ({
  title,
  value,
  handleChangeText,
  otherStyles,
  placeholder,
  keyboardType,
  isFocused,
  ...props
}: SearchInputProps) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocusedInput, setIsFocusedInput] = useState(false);

  const handleSearch = () => {
    console.log("searching...");
  };

  return (
    <View className={`space-y-2  ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View
        className={`border w-full h-14 px-4 bg-white rounded-3xl focus:border-secondary flex-row items-center border-white ${
          isFocusedInput ? "border-secondary" : "border-black-200"
        }`}
      >
        <EvilIcons name="search" size={28} color="black" />
        <TextInput
          className={`flex-1 text-white font-semibold text-base  `}
          value={value}
          placeholder="Search "
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setIsFocusedInput(true)}
          onBlur={() => setIsFocusedInput(false)}
        />
        <TouchableOpacity onPress={handleSearch}>
          <AntDesign name="rightcircle" size={29} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchInput;
