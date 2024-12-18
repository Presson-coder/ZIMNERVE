import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";

import { ImageSourcePropType } from "react-native";

interface CategoryCardProps {
  name: string;
  image: ImageSourcePropType;
  onPress: () => void;
}

const CategoryCard = ({ name, image, onPress }: CategoryCardProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="h-36 w-36  rounded-3xl relative"
    >
      <Image
        source={image}
        className="w-36 h-36 rounded-2xl"
        resizeMode="cover"
      />
      <View className="insert-0 border border-black w-36 h-36 absolute bg-black opacity-35 rounded-2xl"></View>
      <Text className=" absolute bottom-5 font-bold text-center w-full text-xs text-white">
        {name}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
