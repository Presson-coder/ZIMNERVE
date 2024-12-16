import { UserLogin } from "@/types";
import axios from "axios";
import { router } from "expo-router";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_URL = "http://54.164.91.166:8000/api";

const useSignin = () => {
  const signinUser = async (
    form: UserLogin,
    setErrorMessage: (message: string) => void
  ) => {
    console.log("sending login form:::::::::::::", form);
    try {
      const response = await axios.post(`${BASE_URL}/auth/mobile-login`, form, {
        withCredentials: true,
      });

      if (response.status === 200) {
        Alert.alert("login successful");
        router.push("/home");
      } else {
        throw new Error("Login failedh");
      }
    } catch (error) {
      console.log("login error ::::::::::::::::", error);
      if (axios.isAxiosError(error)) {
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 400)
        ) {
          setErrorMessage(error.response.data.error);
        } else {
          setErrorMessage("An error occurred during registration.");
        }
      }
      throw error;
    }
  };

  return signinUser;
};

export default useSignin;
