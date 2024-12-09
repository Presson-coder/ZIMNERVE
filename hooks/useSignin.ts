import { UserLogin } from "@/types";
import axios from "axios";
import { router } from "expo-router";
import { Alert } from "react-native";
// import { BASE_URL } from "@/config/config";
import AsyncStorage from "@react-native-async-storage/async-storage";
const BASE_URL = "https://api.com";

const useSignin = () => {
  const signinUser = async (
    form: UserLogin,
    setErrorMessage: (message: string) => void
  ) => {
    try {
      const response = await axios.post(`${BASE_URL}/auth/sign-in`, form, {
        withCredentials: true,
      });

      if (response.status === 201) {
        Alert.alert("login successful");
        router.push("/home");
      } else {
        throw new Error("Login failed");
      }
    } catch (error) {
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
