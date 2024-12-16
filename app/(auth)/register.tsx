import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import axios from "axios";

import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import FormField from "@/components/FormField";
import { Link, router } from "expo-router";
import CustomButton from "@/components/CustomButton";
import registerUser from "@/hooks/useRegisterUser";
import useRegisterUser from "@/hooks/useRegisterUser";
import images from "@/constants/images";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    first_name: "",
    last_name: "",
    phone: "",
    confirm_password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [checked, setChecked] = useState(false);
  const toggleCheckbox = () => {
    setChecked(!checked);
  };

  const registerUser = useRegisterUser();
  const handleSubmit = async () => {
    if (
      !form.email ||
      !form.password ||
      !form.first_name ||
      !form.last_name ||
      !form.phone ||
      !form.confirm_password
    ) {
      alert("Please fill all fields");
      return;
    }
    console.log("form:::::::::::::", form);
    const specialCharacterRegex = /[!-@#$%^&*(),.?":{}|<>]/;
    if (form.password.length < 8) {
      Alert.alert("Password must be at least 8 characters long");
    } else if (!specialCharacterRegex.test(form.password)) {
      Alert.alert("Password must contain at least 1 special character");
    } else if (form.password !== form.confirm_password) {
      Alert.alert("Passwords do not match!");
    } else if (!checked) {
      Alert.alert("Please accept the terms & policy");
    }

    setIsSubmitting(true);
    try {
      const { confirm_password, ...requestBodyWithoutConfirmPassword } = form;
      await registerUser(requestBodyWithoutConfirmPassword, setErrorMessage);
    } catch (error) {
      setShowErrorMessage(true);
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
            Create your account{" "}
          </Text>
          <View>
            <FormField
              title="First Name"
              value={form.first_name}
              handleChangeText={(e) => setForm({ ...form, first_name: e })}
              placeholder="First Name"
            />
            <FormField
              title="Last Name"
              value={form.last_name}
              handleChangeText={(e) => setForm({ ...form, last_name: e })}
              placeholder="Last Name"
            />
            <FormField
              title="Email"
              value={form.email}
              handleChangeText={(e) => setForm({ ...form, email: e })}
              placeholder="example@gmail.com"
            />
            <FormField
              title="Phone Number"
              value={form.phone}
              handleChangeText={(e) => setForm({ ...form, phone: e })}
              placeholder="0777777777"
            />
            <FormField
              title="Password"
              value={form.password}
              handleChangeText={(e) => setForm({ ...form, password: e })}
              placeholder="••••••••••••••••"
            />
            <FormField
              title="Confirm Password"
              value={form.confirm_password}
              handleChangeText={(e) =>
                setForm({ ...form, confirm_password: e })
              }
              placeholder="••••••••••••••••"
            />
            <View className="flex-row items-center mt-4">
              <TouchableOpacity
                onPress={toggleCheckbox}
                className={`w-5 h-5 border flex flex-row items-center justify-center border-green-500 rounded mr-2 ${
                  checked ? "bg-green-600" : ""
                }`}
              >
                {checked && (
                  <Text className="text-white text-center p-0 m-0 leading-none">
                    ✔
                  </Text>
                )}
              </TouchableOpacity>
              <Text className="text-sm text-gray-600">
                I understand the{" "}
                <Text className="text-green-600 underline">terms & policy</Text>
                .
              </Text>
            </View>
            <CustomButton
              title={`${isSubmitting ? "Loading..." : "SIGN UP"}`}
              handlePress={handleSubmit}
              containerStyles="mt-7 bg-primary"
              isLoading={isSubmitting}
              textStyles="text-white font-bold"
            />
            <View className="mt-6 flex-row justify-center">
              <Text className="text-gray-500">Have an account? </Text>
              <TouchableOpacity onPress={() => router.push("/(auth)/sign-in")}>
                <Text className="text-primary font-bold">SIGN IN</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Register;
