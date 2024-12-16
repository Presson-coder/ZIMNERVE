import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import CustomStar from "@/components/CustomStar";

const FirstScreen = () => {
  return (
    <SafeAreaView className="bg-darkBg min-h-screen">
      <ScrollView className=" h-full w-full">
        <View className="m-4">
          <View className=" bg-lime-400 flex justify-center w-full p-4 py-6 mb-10 mr-10 rounded-2xl">
            <View className="flex  justify-center w-full">
              <Image
                source={images.ZIMNERVE_lime_logo}
                className="h-[240px] w-[300px]"
                resizeMode="contain"
              />
              <Text className="text-white z-50 font-bold text-3xl absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Online Shopping
              </Text>
              <Text className="text-lg absolute bottom-1/4 px-3" style={{ fontWeight: 100}}>
                Get anything you are looking for in minutes through the nerve
                digital space.
              </Text>
            </View>

            <View className="flex flex-row justify-center gap-3 pb-1 ">
              <View className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></View>
              <View className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></View>
              <View className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></View>
              <View className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></View>
              <View className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></View>
              <View className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></View>
              <View className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"></View>
            </View>
          </View>
        </View>
        <View className="bg-darkBg h-full w-full">
          <View className="flex flex-col gap-3 pl-7">
            <CustomStar
              starText="Second  hand deals"
              starStyles=""
              textStyles="text-primary"
            />
            <CustomStar
              starText="Real Estate"
              starStyles=""
              textStyles="text-primary"
            />
            <CustomStar
              starText="Rentals"
              starStyles=""
              textStyles="text-primary"
            />
            <CustomStar
              starText="Furniture"
              starStyles=""
              textStyles="text-primary"
            />
            <CustomStar
              starText="Relationships"
              starStyles=""
              textStyles="text-primary"
            />
            {/* <CustomStar
              starText="Furniture"
              starStyles=""
              textStyles="text-primary"
            /> */}
          </View>
          <View className="w-full justify-center items-center flex py-5 gap-2">
            <View>
              <Image
                source={images.ZIMNERVE_lime_logo}
                className="h-[80px] w-[80px] relative opacity-30"
                resizeMode="contain"
              />
              <Text className="text-white text-lg font-bold tracking-widest text-center top-1/3 z-50 absolute opacity-100">
                ZimNerve
              </Text>
            </View>
            <Text className="text-primary text-sm"> Africa&apos;s most valued app for business gowth </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FirstScreen;
