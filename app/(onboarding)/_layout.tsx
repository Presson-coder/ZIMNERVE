import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function OnBoardingLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="first-screen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="second-screen"
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="third-screen"
          options={{
            headerShown: false,
          }}
        />
      </Stack>
      <StatusBar backgroundColor="#161622" style="light"/>
    </>
  );
}
