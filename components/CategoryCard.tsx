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
    <TouchableOpacity onPress={onPress} className="h-10 w-10 rounded-2xl">
      <Image
        source={image}
        className="w-10 h-10 rounded-2xl relative"
        resizeMode="contain"
      />
      <View className="insert-0 absolute bg-black opacity-55"></View>
      <Text className="text-black text-md">{name}</Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
