import React, { useEffect, useState } from "react"
import { View, FlatList, Image, StyleSheet, Dimensions } from "react-native"

const { width } = Dimensions.get("window")
const IMAGE_SIZE = (width - 40) / 2

export default function GalleryScreen() {
  const [images, setImages] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/nkorotkyi/RN_Lab2/main/gallery.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched img:", data)
        setImages(data)
      })
  }, [])

  return (
    <FlatList
      data={images}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      renderItem={({ item }) => (
        <View style={styles.box}>
          <Image source={{ uri: item.url }} style={styles.image} />
        </View>
      )}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  box: {
    margin: 5,
    backgroundColor: "#eee",
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    resizeMode: "cover",
  },
})
