import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

interface AdvertsFilterProps {
  onPress: () => void
  name: string
}

const AdvertsFilter = ({onPress, name}: AdvertsFilterProps) => {
    const [isPressed, setIsPressed] = useState(false);

    const handlePressIn = () => {
        setIsPressed(true);
    }

    const handlePressOut = () => {
        setIsPressed(false);
    }
  return (
    <TouchableOpacity
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      className={`rounded-3xl  px-3 py-1 mx-2 ${
        isPressed ? `bg-black ` : `bg-white `
      }`}
      onPress={onPress}
    >
      <Text
        className={`text-sm text-center ${
          isPressed ? "text-white" : "text-black"
        }`}
      >
        {name}
      </Text>
    </TouchableOpacity>
  );
}

export default AdvertsFilter