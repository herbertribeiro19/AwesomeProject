import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, FlatList, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Header from "../../components/Header";
import Balance from "../../components/Balance";
import Moviments from "../../components/Moviments";
import Actions from "../../components/Actions";
import Card from "../../components/Card";

export default function Home() {
  const [list, setList] = useState([]);
  const [saldo, setSaldo] = useState(0);
  const [gastos, setGastos] = useState(0);
  const [username, setUserName] = useState("");

  useEffect(() => {
    // Carregar dados salvos ao iniciar o componente
    loadList();
    getUserName();
  }, []);

  useEffect(() => {
    // Atualizar saldo e gastos sempre que a lista mudar
    calculateBalance();
  }, [list]);

  const getUserName = async () => {
    try {
      const name = await AsyncStorage.getItem("userName");
      if (name) {
        setUserName(name);
      }
    } catch (error) {
      console.error("Erro ao carregar nome do usuário:", error);
    }
  };

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
      // Atualizar o estado apenas após salvar com sucesso
      setList(newList);
    } catch (error) {
      console.error("Erro ao salvar lista:", error);
    }
  };

  const handleSaveEntry = (entry) => {
    const existingItemIndex = list.findIndex((item) => item.id === entry.id);
    if (existingItemIndex !== -1) {
      // Se o item já existe, atualiza-o na lista
      const updatedList = [...list];
      updatedList[existingItemIndex] = entry;
      saveList(updatedList); // Salvar a lista atualizada
    } else {
      // Se é um novo item, adiciona à lista
      const newList = [...list, entry];
      saveList(newList); // Salvar a lista atualizada
    }
    Alert.alert(
      "Novo registro adicionado",
      `Seu registro foi salvo com sucesso.`,
      [{ text: "Confirmar" }]
    );
  };

  const handleDeleteEntry = (id) => {
    const updatedList = list.filter((item) => item.id !== id);
    saveList(updatedList); // Salvar a lista atualizada
  };

  const calculateBalance = () => {
    let totalSaldo = 0;
    let totalGastos = 0;

    list.forEach((item) => {
      if (item.type === 1) {
        totalSaldo += item.value;
      } else {
        totalGastos += item.value;
        totalSaldo -= item.value;
      }
    });

    setSaldo(totalSaldo.toFixed(2).replace(".", ","));
    setGastos(totalGastos.toFixed(2).replace(".", ","));
  };

  return (
    <View style={styles.container}>
      <Header name={username} />
      <Balance saldo={saldo} gastos={gastos} />

      <Actions onSaveEntry={handleSaveEntry} />
      <Card name={username} />

      <Text style={styles.title}>Últimas movimentações</Text>
      <FlatList
        style={styles.list}
        data={list}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Moviments data={item} onDelete={handleDeleteEntry} />
        )}
      />
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
});
