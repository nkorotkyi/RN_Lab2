import React, { useEffect, useState } from "react"
import { View, FlatList, Text, TouchableOpacity, Image, StyleSheet } from "react-native"

export default function NewsScreen({ navigation }) {
  const [news, setNews] = useState([])

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/nkorotkyi/RN_Lab2/main/news.json")
      .then((res) => res.json())
      .then((data) => {
        console.log("Fetched news:", data)
        setNews(data)
      })
  }, [])

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate("Деталі", { news: item })}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )

  return (
    <FlatList
      data={news}
      keyExtractor={(item) => item.id.toString()}
      renderItem={renderItem}
      contentContainerStyle={styles.container}
    />
  )
}

const styles = StyleSheet.create({
  container: { padding: 10 },
  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    elevation: 2, // Android тінь
    shadowColor: "#000", // iOS тінь
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#eee",
  },
  textContainer: { flex: 1 },
  title: { fontWeight: "bold", fontSize: 16, marginBottom: 2 },
  date: { color: "#777", fontSize: 12, marginBottom: 4 },
  description: { color: "#333", fontSize: 14 },
})
