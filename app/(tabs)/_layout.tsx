import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

interface TabIconProps {
  icon: any;
  color: string;
  name: string;
  focused: boolean;
}

const TabIcon = ({ name, icon, color, focused }: TabIconProps) => {
  return (
    <View className="items-center justify-center flex flex-col w-20 gap-2 mt-4">
      {icon}
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs `}
        style={{ color: color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#80af49",
          tabBarInactiveTintColor: "#000",
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 0.1,
            borderTopColor: "#232533",
            height: 60,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Home"
                icon={<AntDesign name="home" size={24} color={color} />}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="categories"
          options={{
            title: "Categories",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Categories"
                icon={<MaterialIcons name="category" size={24} color={color} />}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="advertise"
          options={{
            title: "Advertise",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Advertise"
                icon={<FontAwesome5 name="ad" size={24} color={color} />}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="favorites"
          options={{
            title: "Favorites",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Favorites"
                icon={
                  <MaterialIcons
                    name="favorite-outline"
                    size={24}
                    color={color}
                  />
                }
                color={color}
                focused={focused}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                name="Profile"
                icon={<AntDesign name="user" size={24} color={color} />}
                color={color}
                focused={focused}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
