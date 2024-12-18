import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import  {icons}  from "@/constants";
import AntDesign from "@expo/vector-icons/AntDesign";

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
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View
        className={`border-2 w-full h-16 px-4 bg-black-100 rounded-2xl focus:border-secondary flex-row items-center border-black-200 ${
          isFocusedInput ? "border-secondary" : "border-black-200"
        }`}
      >
        <Image source={icons.search} />
        <TextInput
          className={`flex-1 text-white font-semibold text-base  `}
          value={value}
          placeholder="Search for a vedio topic"
          placeholderTextColor={"#7b7b8b"}
          onChangeText={handleChangeText}
          secureTextEntry={title === "Password" && !showPassword}
          onFocus={() => setIsFocusedInput(true)}
          onBlur={() => setIsFocusedInput(false)}
        />
      </View>
      <TouchableOpacity onPress={handleSearch}>
        <AntDesign name="rightcircle" size={24} color="black" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
