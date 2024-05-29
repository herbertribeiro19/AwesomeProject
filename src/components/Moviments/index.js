import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function Moviments({ data, onDelete }) {
  const formatValue = (value) => {
    // Formatando o valor para exibir duas casas decimais
    return parseFloat(value).toFixed(2).replace(".", ",");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.data}>{data.data}</Text>
      <View style={styles.content}>
        <Text style={styles.label}>{data.label}</Text>
        <Text style={data.type === 1 ? styles.valor : styles.expenses}>
          {data.type === 1
            ? `R$ ${formatValue(data.value)}`
            : `-R$ ${formatValue(data.value)}`}
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity onPress={() => onDelete(data.id)}>
          <Ionicons name="trash" size={32} color="white" />
        </TouchableOpacity>
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
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
  },
  buttonText: {
    color: "#3498db",
    fontSize: 16,
    fontWeight: "bold",
  },
});
