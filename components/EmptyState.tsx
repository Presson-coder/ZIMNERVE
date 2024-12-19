import { View, Text, Image } from 'react-native'
import React from 'react'
import { images } from '@/constants'
import CustomButton from './CustomButton'
import { router } from 'expo-router'
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

interface NoAdsProps {
    title: string
    subtitle: string
}

const NoAds = ({ title, subtitle}: NoAdsProps) => {
  return (
    <View className="justify-center items-center px-4">
      <MaterialIcons name="hourglass-empty" size={24} color="black" />
      <Text className="font-medium text-sm text-gray-100">{subtitle}</Text>
      <Text className="text-xl text-center mt-2 font-psemibold text-white">
        {title}
      </Text>
      <CustomButton
        title="Upload Video"
        handlePress={() => router.push("/advertise")}
        containerStyles="w-full my-5"
      />
    </View>
  );
}

export default NoAds