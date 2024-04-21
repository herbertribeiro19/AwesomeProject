import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import Calendario from "./Calendario/";
import Dropdown from "./Dropdown";
import { AntDesign } from "@expo/vector-icons";

export default function Form() {
  return (
    <View>
      <View>
        <Dropdown />
      </View>

      <View>
        <Text style={styles.textValor}>Valor</Text>
        <TextInput
          style={styles.inputValor}
          placeholder="1.000"
          keyboardType="decimal-pad"
        ></TextInput>
      </View>

      <View>
        <Text style={styles.textDescricao}>Descrição</Text>
        <TextInput
          style={styles.inputDescricao}
          placeholder="Salário"
          keyboardType="ascii-capable"
        ></TextInput>
      </View>

      <View style={styles.dataBox}>
        <View style={styles.dataCalender}>
          <Calendario />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textValor: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },

  inputValor: {
    fontSize: 14,
    color: "#f1f1f1",
    marginBottom: 5,
    width: "100%",
    padding: 12,
    backgroundColor: "#444",
    borderRadius: 20,
  },

  textDescricao: {
    marginTop: 20,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },

  inputDescricao: {
    fontSize: 14,
    color: "#f1f1f1",
    marginBottom: 5,
    width: "100%",
    padding: 12,
    backgroundColor: "#444",
    borderRadius: 20,
  },
});
