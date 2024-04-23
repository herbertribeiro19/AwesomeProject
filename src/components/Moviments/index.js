import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Moviments({ data }) {
  return (
    <View style={styles.container}>
      <Text style={styles.data}>{data.data}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        <Text style={data.type === 1 ? styles.valor : styles.expenses}>
          {data.type === 1 ? `R$ ${data.value}` : `-R$ ${data.value}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#111",
    borderRadius: 8,
    margin: 6,
    flex: 1,
    borderBottomColor: "#444",
    padding: 24,
  },
  data: {
    color: "#fff",
    fontSize: 14,
  },
  content: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 2,
  },
  label: {
    color: "#f1f1f1",
    fontSize: 14,
    marginTop: 0,
  },
  valor: {
    color: "#66ffd2",
    fontSize: 16,
    fontWeight: "bold",
  },
  expenses: {
    color: "#e74c3c",
    fontSize: 16,
    fontWeight: "bold",
  },
});
