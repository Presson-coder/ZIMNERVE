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
    <TouchableOpacity onPress={onPress} className="h-full w-28 rounded-2xl relative">
      <Image
        source={image}
        className="w-28 h-28 rounded-2xl"
        resizeMode="contain"
      />
      <View className="insert-0 absolute bg-black opacity-100 rounded-2xl"></View>
      <Text className=" absolute bottom-5 font-bold text-xs text-primary">{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
