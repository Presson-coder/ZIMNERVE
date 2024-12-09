import { UserRegister } from "@/types";
import axios from "axios";
import { router } from "expo-router";
import { Alert } from "react-native";
// import { BASE_URL } from "@/config/config";
const BASE_URL = "http://3.95.227.172:8000/api";

const useRegister = () => {
  const registerUser = async (form: UserRegister, setErrorMessage: (message: string) => void) => {
    console.log("sending form:::::::::::::", form);
    try {
      const response = await axios.post(
        `${BASE_URL}/auth/register`,
        form
      );

      // log posting url
      console.log("posting to url:::::::::::::", `${BASE_URL}/auth/register/`);

      if (response.status === 201) {
        Alert.alert("User created successfully");
        router.push("/sign-in");
      } else {
        throw new Error("Registration failed");
      }
    } catch (error) {
      console.log("registration error ::::::::::::::::", error); 
      if (axios.isAxiosError(error)) {
        if (error.response && (error.response.status === 401 || error.response.status === 400)) {
          setErrorMessage(error.response.data.error);
        } else {
          setErrorMessage("An error occurred during registration.");
        }
      }
      throw error;
    }
  };

  return registerUser;
};

export default useRegister;