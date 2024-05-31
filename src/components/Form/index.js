import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Keyboard,
  ScrollView,
  Pressable,
} from "react-native";
import Calendario from "./Calendario";
import Dropdown from "./Dropdown";
import { AntDesign } from "@expo/vector-icons";

export default function Form({ onSave }) {
  const [tipo, setTipo] = useState("");
  const [valor, setValor] = useState("");
  const [descricao, setDescricao] = useState("");
  const [data, setData] = useState("");

  const handleSave = () => {
    if (tipo && valor && descricao && data != null) {
      const valorCorrigido = valor.replace(",", ".");

      const newEntry = {
        id: Date.now().toString(), // Convertido para string para garantir que seja uma chave única
        label: descricao,
        value: parseFloat(valorCorrigido), // Convertendo para número
        data: data,
        type: tipo === "Entrada" ? 1 : 0, // Converte o tipo para um número (1 para entrada, 0 para saída)
      };
      onSave(newEntry);
      setTipo("");
      setValor("");
      setDescricao("");
      setData("");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  };

  return (
    <Pressable onPress={Keyboard.dismiss}>
      <View>
        <Dropdown onSelected={setTipo} />
      </View>

      <View>
        <Text style={styles.textValor}>Valor</Text>
        <TextInput
          style={styles.inputValor}
          placeholder="Ex: 1000"
          keyboardType="ascii-capable"
          placeholderTextColor={"#fff"}
          value={valor}
          onChangeText={(text) => {
            // Remove caracteres inválidos exceto dígitos e ponto
            const formattedText = text.replace(/[^\d.]/g, "");
            setValor(formattedText);
          }}
        ></TextInput>
      </View>

      <View>
        <Text style={styles.textDescricao}>Descrição</Text>
        <TextInput
          style={styles.inputDescricao}
          placeholder="Ex: Salário"
          placeholderTextColor={"#fff"}
          keyboardType="ascii-capable"
          value={descricao}
          onChangeText={setDescricao}
        ></TextInput>
      </View>

      <View style={styles.dataBox}>
        <View style={styles.dataCalender}>
          <Calendario onSelectedDate={setData} />
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.btnSave} onPress={handleSave}>
          <Text style={styles.btnSaveText}>Salvar</Text>
          <View style={styles.iconCheck}>
            <AntDesign
              name="check"
              size={22}
              color="#f1f1f1"
              borderRadius={50}
            ></AntDesign>
          </View>
        </TouchableOpacity>
      </View>
    </Pressable>
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

  btnSave: {
    width: "80%",
    backgroundColor: "#66ffd2",
    marginTop: 24,
    flexDirection: "row",
    alignSelf: "center",
    justifyContent: "center",
    gap: 12,
    alignItems: "center",
    padding: 16,
    borderRadius: 40,
  },

  btnSaveText: {
    fontSize: 18,
    fontWeight: "700",
    color: "#333",
  },

  iconCheck: {
    backgroundColor: "#333",
    padding: 4,
    borderRadius: 50,
  },
});
