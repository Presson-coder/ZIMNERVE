import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import CustomStar from "@/components/CustomStar";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

const ContentCreation = () => {
  return (
    <SafeAreaView className="bg-darkBg min-h-screen">
      <ScrollView className=" h-full w-full">
        <View className="w-full flex flex-row h-8 items-center relative my-2">
          <View className="flex flex-row items-center gap-1 left-3">
            <View className="w-1 bg-white h-0.5"></View>
            <View className="w-1 bg-white h-0.5"></View>
            <View className="w-10 bg-white h-0.5"></View>
          </View>
          <TouchableOpacity className="flex flex-row items-center gap-1 absolute right-3 ">
            <Text className="text-white text-xs">Skip</Text>
            <AntDesign name="right" size={15} color="white" />
          </TouchableOpacity>
        </View>
        <View className="mx-4 ">
          <View className=" bg-lime-400 flex justify-center w-full p-4 rounded-2xl">
            <View className="flex  justify-center w-full">
              <Image
                source={images.ZIMNERVE_lime_logo}
                className="h-[230px] w-[300px]"
                resizeMode="contain"
              />
              <Text className="text-white z-50 font-bold text-3xl absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2">
                ContentCreation
              </Text>
              <Text
                className="text-lg absolute bottom-1 px-3"
                style={{ fontWeight: 100 }}
              >
                THigh Quality Professional Videos & Pictures Comprehensive
                Graphic Design Work Comprehensive Websites & Mobille Apps Best
                Consultant practices
              </Text>
            </View>

            <View className="flex flex-row justify-center items-center gap-3 pb-1 ">
              <TouchableOpacity
                onPress={() => router.push("/online-shopping")}
                className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/advertisement")}
                className="w-2.5 h-2.5 rounded-full bg-white shadow-sm"
              ></TouchableOpacity>
              <TouchableOpacity
                onPress={() => router.push("/content-creation")}
                className="w-3.5 h-3.5 rounded-full bg-white shadow-sm"
              ></TouchableOpacity>
            </View>
          </View>
        </View>
        <View className="bg-darkBg h-full w-full gap-4 pt-8">
          {/* <View className="flex flex-col gap-3 pl-7 ">
            <CustomStar
              starText="Cultivate your digital presence"
              starStyles=""
              textStyles="text-primary"
            />
            <CustomStar
              starText="Sale your services & products online "
              starStyles=""
              textStyles="text-primary"
            />
            <CustomStar
              starText="Go viral with ZimNerve digital space"
              starStyles=""
              textStyles="text-primary"
            />
          </View> */}
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
            <Text className="text-primary text-sm">
              {" "}
              Africa&apos;s most valued app for business gowth{" "}
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/sign-in")}
              className="bg-primary rounded-2xl flex items-center w-3/4"
            >
              <Text className="text-white font-bold text-center p-3">
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ContentCreation;
