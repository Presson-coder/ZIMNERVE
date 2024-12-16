import { Link, router } from "expo-router";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import "../global.css";
import { SafeAreaView } from "react-native-safe-area-context";
import images from "@/constants/images";
import { StatusBar } from "expo-status-bar";
import CircleLoader from "@/components/CircleLoaders";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import OnlineShopping from "./(onboarding)/online-shopping";

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean| null>(null);

 const removeOnboardingKey = async () => {
   try {
     await AsyncStorage.removeItem("alreadyLaunched");
     console.log("Onboarding key has been removed!");
   } catch (error) {
     console.error("Error removing onboarding key:", error);
   }
 };

  useEffect(() => {
    checkIfFirstLaunch();
  }, []);

  const checkIfFirstLaunch = async () => {
    try {
      const value = await AsyncStorage.getItem("alreadyLaunched");
      if(value === null){
        await AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    } catch (error) {
      console.log("Error @checkIfFirstLaunch", error);
    }
  }

  console.log("isFirstLaunch", isFirstLaunch);

  if(isFirstLaunch === null){
    return null;
  }

  if(isFirstLaunch){
   return <OnlineShopping/>
  }

  return (
    <>
      <SafeAreaView className=" flex-1 relative bg-[]">
        <Image
          source={images.pcBg1}
          className="absolute top-0 bottom-0 left-0 w-full h-full"
          resizeMode="cover"
        />
        <View className="absolute inset-0 bg-primary opacity-90" />
        <ScrollView
          className="flex-1 "
          contentContainerStyle={{
            flexGrow: 1,
            justifyContent: "center",
            alignItems: "center",
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
              onPress={() => router.push("/sign-in")}
              // onPress={() => removeOnboardingKey()}
              className="bg-lime-500 rounded-3xl flex items-center w-1/2"
            >
              <Text className="text-black font-bold text-center p-3">
                Sign In
              </Text>
            </TouchableOpacity>
            <View>
              <CircleLoader />
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
