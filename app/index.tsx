import { Link, router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import CustomButton from "@/components/CustomButton";
import LottieView from "lottie-react-native";
import lottie from "@/constants/lottieFiles";
import { StatusBar } from "expo-status-bar";
import CircleLoader from "@/components/CircleLoaders";

export default function App() {
  return (
    <>
      <SafeAreaView className=" flex-1 relative bg-[]">
        <Image
          source={images.pcBg1}
          className="absolute top-0 bottom-0 left-0 w-full h-full"
          resizeMode="cover"
        />
        {/* overlay on image */}
        <View className="absolute inset-0 bg-primary opacity-90" />
        <ScrollView
          className="flex-1 "
          contentContainerStyle={{
            flexGrow: 1, // Ensures content container fills the available space
            justifyContent: "center", // Centers vertically
            alignItems: "center", // Centers horizontally
          }}
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full flex flex-col items-center gap-10 justify-center px-4">
            <View className="relative flex justify-center w-full">
              <Image
                source={images.ZimNerve_Green_Logo}
                className="h-[90px] w-[90px] left-1/2 -translate-x-1/2"
                resizeMode="contain"
              />
              <Text className="text-white z-50 font-extrabold text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                ZIM
                <Text className="font-thin text-white">NERVE</Text>
              </Text>
            </View>
            <Text className="text-blackx font-thin text-sm text-center w-full py-2">
              ONLINE SHOPPING AND ADVERTISEMENT
            </Text>
            <TouchableOpacity
              onPress={() => router.push("/online-shopping")}
              className="bg-lime-500 rounded-3xl flex items-center w-1/2"
            >
              <Text className="text-black font-bold text-center p-3">
                Sign In
              </Text>
            </TouchableOpacity>
            <View>
              <CircleLoader/>
            </View> 
            <Text className="text-white font-bold">
              Welcome to endless possibilities   
            </Text> 
          </View>
        </ScrollView>
      </SafeAreaView>
      <StatusBar backgroundColor="#80af49" style="light" />
    </>
  );
}
