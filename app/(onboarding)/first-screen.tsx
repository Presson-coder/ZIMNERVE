import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import Icon from "react-native-vector-icons/FontAwesome";

const FirstScreen = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="relative flex justify-center w-full m-8">
          <Image
            source={images.ZIMNERVE_lime_logo}
            className="h-[84px] left-1/2 -translate-x-1/2"
            resizeMode="contain"
          />
          <Text className="text-white z-50 font-extrabold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            Online Shopping
          </Text>
          <Text>
            Get anything you are looking for in minutes through the nerve
            digital space.
          </Text>
          <View className="flex justify-center gap-3 pb-10">
            <View className="w-1 h-1 rounded-full text-white shadow-sm"></View>
            <View className="w-1 h-1 rounded-full text-white shadow-sm"></View>
            <View className="w-1 h-1 rounded-full text-white shadow-sm"></View>
            <View className="w-1 h-1 rounded-full text-white shadow-sm"></View>
            <View className="w-1 h-1 rounded-full text-white shadow-sm"></View>
            <View className="w-1 h-1 rounded-full text-white shadow-sm"></View>
            <View className="w-1 h-1 rounded-full text-white shadow-sm"></View>
          </View>
        </View>

        <View className="bg-lime-700">
          <View>
            <Text className="text-white z-50 font-extrabold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Icon name="star" size={20} color="#fff"  className="text-primary"/> Online Shopping
            </Text>
            <View className="flex items-center"></View>
            <Text className="text-white font-semibold ">
              {" "}
              Second hand deals{" "}
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstScreen;
