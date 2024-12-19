import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { router } from "expo-router";

interface AdvertProps {
  ad: {
    name: string;
    description: string;
    price: number;
    imageUrl: any;
    id: string;
    location: string;
    category: string;
    date: string;
  };
}

const Advert = ({ ad }: AdvertProps) => {
  return (
    <TouchableOpacity
      onPress={() => router.push(`/advert-details?id=${ad.id}`)}
      className="bg-white rounded-2xl w-full"
    >
      <View className="justify-center w-full flex flex-row">
        <Image
          //   source={{ uri: ad.imageUrl }}
          source={ad.imageUrl}
          className="w-40  h-40 rounded-t-2xl"
          resizeMode="contain"
        />
      </View>
      <View className="flex flex-col items-start gap-2 pl-2 pb-2">
        <Text className="text-black text-md font-black" numberOfLines={1}>
          {ad.name}
        </Text>
        <Text className="text-gray-600 text-md" numberOfLines={1}>
          {ad.description}
        </Text>
        <Text className="text-black font-bold text-lg" numberOfLines={1}>
          $USD {ad.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Advert;
