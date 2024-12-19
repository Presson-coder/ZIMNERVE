import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import SearchInput from "@/components/SearchInput";
import { router } from "expo-router";
import CategoryCard from "@/components/CategoryCard";
import images from "@/constants/images";
import Entypo from "@expo/vector-icons/Entypo";
import AdvertsFilter from "@/components/AdvertsFilter";

const Home = () => {
  const user = { first_name: "Presson" };
  const userNameFirstLetter = user.first_name.charAt(0);
  return (
    <SafeAreaView>
      <ScrollView className="p-4 ">
        <View className="flex flex-col gap-4">
          <View className="flex flex-row w-full justify-between items-center">
            <View>
              <Text className="text-2xl text-black font-black">
                Hello, {user.first_name}
              </Text>
              <Text>Welcome to ZimNerve</Text>
            </View>
            <View className="bg-gray-600 h-10 w-10 rounded-full border border-gray-600 flex items-center justify-center">
              <Text className="text-white text-xl text-center font-bold uppercase">
                {userNameFirstLetter}
              </Text>
            </View>
          </View>
          <SearchInput />
          <View className="flex flex-row w-full  justify-between">
            <Text className="text-black font-bold text-md   w-20 inline-block">
              Categories
            </Text>
            <TouchableOpacity onPress={() => router.push("/categories")}>
              <Text className="text-sm text-gray-500">View All</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-start",
              gap: 10,
            }}
            className=""
          >
            <CategoryCard
              name="Second hand deals"
              image={images.Deals}
              onPress={() => router.push("/second-hand-deals")}
            />
            <CategoryCard
              name="Real Estate"
              image={images.realEstate}
              onPress={() => router.push("/real-estate")}
            />
            <CategoryCard
              name="Rentals"
              image={images.house}
              onPress={() => router.push("/rentals")}
            />
            <CategoryCard
              name="Furniture"
              image={images.furniture}
              onPress={() => router.push("/furniture")}
            />
            <CategoryCard
              name="Events"
              image={images.events}
              onPress={() => router.push("/furniture")}
            />
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <AdvertsFilter
              name="flash sales"
              onPress={() => router.push("/")}
            />
            <AdvertsFilter name="popular" onPress={() => router.push("/")} />
            <AdvertsFilter
              name="new arrivals"
              onPress={() => router.push("/")}
            />
            <AdvertsFilter
              name="
             best sellers"
              onPress={() => router.push("/")}
            />
          </ScrollView>
          {/* <FlatList
          data = {data}
          renderItem={({item}) => (

          )}
          /> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
