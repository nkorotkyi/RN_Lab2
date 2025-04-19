import React from "react"
import { View, Text, Image, StyleSheet, ScrollView } from "react-native"

export default function NewsDetailsScreen({ route }) {
  const { news } = route.params

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: news.image }} style={styles.image} />
      <Text style={styles.title}>{news.title}</Text>
      <Text style={styles.date}>{news.date}</Text>
      <Text style={styles.description}>{news.description}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { padding: 20 },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    backgroundColor: "#eee",
    marginBottom: 20,
    borderRadius: 10,
  },
  title: { fontSize: 20, fontWeight: "bold", marginBottom: 5 },
  date: { color: "#777", fontSize: 14, marginBottom: 10 },
  description: { fontSize: 16, lineHeight: 22 },
})
