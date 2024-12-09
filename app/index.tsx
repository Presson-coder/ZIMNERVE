import { Link, router } from "expo-router";
import { Image, ScrollView, Text, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import LottieView from "lottie-react-native";
import lottie from "@/constants/lottieFiles";

export default function App() {
  return (
    <SafeAreaView className=" flex-1  bg-[]">
      {/*  background image */}
      <Image
        source={images.laptop}
        className="absolute top-0 left-0 w-full h-full "
        resizeMode="cover"
      />
      {/* overlay on image */}
      <View className="absolute top-0 left-0 w-full h-full bg-primary bg-opacity-10 "></View>
      <ScrollView
        className="flex-1 px-6"
        contentContainerStyle={{
          flexGrow: 1, // Ensures content container fills the available space
          justifyContent: "center", // Centers vertically
          alignItems: "center", // Centers horizontally
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Main content wrapper */}
        <View className="w-full flex flex-col items-center gap-10 justify-center px-4">
          {/* Logo */}
          <View className="relative flex justify-center w-full">
            <Image
              source={images.ZIMNERVE_lime_logo}
              className="h-[84px] left-1/2 -translate-x-1/2"
              resizeMode="contain"
            />
            <Text className="text-white z-50 font-extrabold text-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              ZIM
              <Text className="font-thin text-white">NERVE</Text>
            </Text>
          </View>

          {/* Tagline */}
          <Text className="text-blackx font-extralight text-sm text-center w-full">
            ONLINE SHOPPING AND ADVERTISEMENT
          </Text>

          {/* Sign In Button */}
          <CustomButton
            handlePress={() => {
              router.push("/sign-in");
            }}
            title="Sign In"
            containerStyles="rounded-3xl bg-lime-700 py-1 items-center w-40"
            textStyles="text-black font-bold text-xl"
          />

          {/* Lottie Animation */}
          <View className="flex w-full justify-center items-center">
            <LottieView
              source={lottie.helloAnimation}
              autoPlay
              loop
              style={{
                width: 200,
                height: 200,
              }}
            />
          </View>

          {/* Footer Text */}
          <Text className="text-lime-900">
            Welcome to endless possibilities
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
