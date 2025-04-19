import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { DrawerItemList, DrawerItem } from "@react-navigation/drawer"

export default function DrawerContent(props) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.profile}>
        <Image source={require("../assets/profile.png")} style={styles.avatar} />
        <Text style={styles.name}>Микита Короткий</Text>
        <Text style={styles.group}>ЗІПЗ-21-1</Text>
      </View>
      <DrawerItemList {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  profile: { alignItems: "center", padding: 20, backgroundColor: "#f2f2f2" },
  avatar: { width: 80, height: 80, borderRadius: 40, marginBottom: 10 },
  name: { fontWeight: "bold", fontSize: 16 },
  group: { color: "#888" },
})
