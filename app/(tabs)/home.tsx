import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "@/components/SearchInput";
import { router } from "expo-router";
import CategoryCard from "@/components/CategoryCard";
import images from "@/constants/images";

const Home = () => {
  const userNameFirstLetter = user.first_name.charAt(0);
  return (
    <SafeAreaView>
      <ScrollView>
        <View className="flex flex-row w-full justify-between items-center">
          <View>
            <Text>Hello, {user.first_name}</Text>
            <Text>Welcome to ZimNerve</Text>
          </View>
          <View className="bg-gray-600 h-4 w-4 rounded-full">
            <Text className="text-white font-bold uppercase">
              {userNameFirstLetter}
            </Text>
          </View>
        </View>
        <SearchInput />
        <View>
          <Text className="text-black font-bold text-md">Categories</Text>
          <TouchableOpacity onPress={() => router.push("/categories")}>
            <Text>View All</Text>
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className=""
        >
          <CategoryCard
            name="Second hand deals"
            image={images.secondHand}
            onPress={() => router.push("/second-hand-deals")}
          />
          <CategoryCard
            name="Real Estate"
            image={images.realEstate}
            onPress={() => router.push("/real-estate")}
          />
          <CategoryCard
            name="Rentals"
            image={images.rentals}
            onPress={() => router.push("/rentals")}
          />
          <CategoryCard
            name="Furniture"
            image={images.furniture}
            onPress={() => router.push("/furniture")}
          />
        </ScrollView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
