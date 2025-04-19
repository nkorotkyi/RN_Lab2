import React from "react"
import { Image, StyleSheet } from "react-native"

export default function Header() {
  return (
    <Image
      source={{ uri: "https://i.postimg.cc/hPPMSrzn/2025-04-05-191344304.png" }}
      style={styles.logo}
      resizeMode="contain"
    />
  )
}

const styles = StyleSheet.create({
  logo: {
    width: "100%",
    height: 60,
    marginBottom: 10,
  },
})
