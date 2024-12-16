import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function OnBoardingLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="online-shopping"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="content-creation"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="advertisement"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light"/>
    </>
  );
}
