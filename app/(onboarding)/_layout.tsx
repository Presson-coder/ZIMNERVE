import { Stack } from "expo-router";

export default function OnBoardingLayout() {
    return (
        <Stack>
            <Stack.Screen name="first-screen" options={{ headerShown: false }} />
            <Stack.Screen name="second-screen" options={{ headerShown: false }} />
            <Stack.Screen name="third-screen" options={{ headerShown: false }} />
        </Stack>
    )
}