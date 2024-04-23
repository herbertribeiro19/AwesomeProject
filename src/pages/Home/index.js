import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View, FlatList } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Moviments from "../../components/Moviments";
import Actions from "../../components/Actions";
import Form from "../../components/Form";

export default function Home() {
  const [list, setList] = useState([]);

  useEffect(() => {
    // Carregar dados salvos ao iniciar o componente
    loadList();
  }, []);

  // Função para carregar a lista de movimentações salvas
  const loadList = async () => {
    try {
      const savedList = await AsyncStorage.getItem("movements");
      if (savedList !== null) {
        setList(JSON.parse(savedList));
      }
    } catch (error) {
      console.error("Erro ao carregar lista:", error);
    }
  };

  // Função para salvar a lista de movimentações
  const saveList = async (newList) => {
    try {
      await AsyncStorage.setItem("movements", JSON.stringify(newList));
    } catch (error) {
      console.error("Erro ao salvar lista:", error);
    }
  };

  // Função para adicionar uma nova entrada à lista
  const handleSaveEntry = (entry) => {
    const newList = [...list, entry];
    setList(newList);
    saveList(newList); // Salvar a lista atualizada
    alert("Dados cadastrado com sucesso!");
  };

  return (
    <View style={styles.container}>
      <Header name="Herbert Ribeiro"></Header>
      <Balance saldo="2.000,00" gastos="-1.500,00"></Balance>

      <Actions onSaveEntry={handleSaveEntry} />

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <Moviments data={item} />}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    height: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
    marginLeft: 20,
    marginTop: 16,
  },

  list: {
    color: "#fff",
    marginStart: 14,
    marginEnd: 14,
    marginTop: 14,
  },

  items: {
    color: "#fff",
    fontSize: 16,
  },
});
