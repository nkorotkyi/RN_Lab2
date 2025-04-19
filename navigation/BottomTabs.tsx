import React from "react"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import NewsScreen from "../screens/NewsScreen"
import GalleryScreen from "../screens/GalleryScreen"
import ProfileScreen from "../screens/DrawerContent"
import { Image, Text, View, StyleSheet } from "react-native"

const Tab = createMaterialTopTabNavigator()

export default function TopTabs() {
  return (
    <>
      <View style={styles.header}>
        <Image source={require("../assets/logo.png")} style={styles.logo} />
        <Text style={styles.title}>FirstMobileApp</Text>
      </View>

      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: "#007AFF",
          tabBarInactiveTintColor: "gray",
          tabBarLabelStyle: { fontSize: 12 },
          tabBarIndicatorStyle: { backgroundColor: "#007AFF" },
          tabBarStyle: { backgroundColor: "#f8f8f8" },
        }}
      >
        <Tab.Screen
          name="Головна"
          component={NewsScreen}
          options={{
            tabBarLabel: "Головна",
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/home.png")}
                  style={{ width: 24, height: 24, marginBottom: 2 }}
                  resizeMode="contain"
                />
                <Text style={{ fontSize: 12, color: focused ? "blue" : "gray" }}>Головна</Text>
              </View>
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Фотогалерея"
          component={GalleryScreen}
          options={{
            tabBarLabel: "Фотогалерея",
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/photogalery.png")}
                  style={{ width: 24, height: 24, marginBottom: 2 }}
                  resizeMode="contain"
                />
                <Text style={{ fontSize: 12, color: focused ? "blue" : "gray" }}>Фотогалерея</Text>
              </View>
            ),
            tabBarShowLabel: false,
          }}
        />
        <Tab.Screen
          name="Профіль"
          component={ProfileScreen}
          options={{
            tabBarLabel: "Профіль",
            tabBarIcon: ({ focused }) => (
              <View style={{ alignItems: "center" }}>
                <Image
                  source={require("../assets/profile.png")}
                  style={{ width: 24, height: 24, marginBottom: 2 }}
                  resizeMode="contain"
                />
                <Text style={{ fontSize: 12, color: focused ? "blue" : "gray" }}>Профіль</Text>
              </View>
            ),
            tabBarShowLabel: false,
          }}
        />
      </Tab.Navigator>
    </>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingBottom: 10,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  logo: {
    width: 130,
    height: 50,
    marginRight: 10,
    resizeMode: "contain",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
})
