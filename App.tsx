import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { createStackNavigator } from "@react-navigation/stack"
import NewsScreen from "./screens/NewsScreen"
import NewsDetailsScreen from "./screens/NewsDetailsScreen"
import GalleryScreen from "./screens/GalleryScreen"
import DrawerContent from "./screens/DrawerContent"

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

function NewsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Новини" component={NewsScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Деталі" component={NewsDetailsScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Новини" component={NewsStack} />
        <Drawer.Screen name="Галерея" component={GalleryScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  )
}
