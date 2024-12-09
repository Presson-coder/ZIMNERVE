import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import useSignin from "@/hooks/useSignin";
import images from "@/constants/images";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    confirm_password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    setChecked(!checked);
  };
  const useSignIn = useSignin();

  const handleSubmit = async () => {
    if (!form.email || !form.password) {
      alert("Please fill all fields");
      return;
    }
    setIsSubmitting(true);
    try {
      await useSignIn(form, setErrorMessage);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView className="bg-white">
      <ScrollView
        className="flex flex-col px-6 gap-6 h-full "
        contentContainerStyle={{
          justifyContent: "center",
          alignItems: "center",
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="w-full  justify-center min-h-[85vh] px-4 my-6">
          <View className="w-full justify-center flex items-center">
            <Image
              source={images.ZIMNERVE_lime_logo}
              resizeMode="contain"
              className="h-[70px] w-[70px]"
            />
          </View>
          <Text className="text-2xl text-center font-bold text-md text-black py-6">
            Sign In to your account{" "}
          </Text>
          <View>
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              placeholder="example@gmail.com"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              placeholder="••••••••••••••••"
            />
            <CustomButton
              title={`${isSubmitting ? "Loading..." : "SIGN IN"}`}
              handlePress={handleSubmit}
              containerStyles="mt-7"
              isLoading={isSubmitting}
              textStyles="text-white font-bold"
            />
            <View className="mt-6 flex-row justify-center">
              <Text className="text-gray-500">Don't Have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/register")}>
                <Text className="text-green-600 font-bold">SIGN UP</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
