import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Intro({ navigation }) {
  const urlImg = "../../../assets/adaptive-icon.png";
  const [name, setName] = useState("");

  const handlePress = async () => {
    if (name.trim() !== "") {
      try {
        await AsyncStorage.setItem("userName", name);
        navigation.navigate("Home");
      } catch (e) {
        console.error("Failed to save name.");
      }
    }
  };

  return (
    <View style={styles.introScreen}>
      <Image style={styles.img} source={require(urlImg)} />
      <View style={styles.box}>
        <Text style={styles.title}>Informe seu nome</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#fff"
          placeholder="Digite seu nome"
          keyboardType="default"
          value={name}
          onChangeText={setName}
        />
        <TouchableOpacity style={styles.btn} onPress={handlePress}>
          <Text style={styles.textBtn}>Entrar</Text>
          <AntDesign name="rightcircle" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  introScreen: {
    backgroundColor: "#000",
    width: "100%",
    height: "100%",
  },

  img: {
    width: 140,
    height: 140,
    alignSelf: "center",
    borderRadius: 20,
    top: "14%",
  },

  box: {
    backgroundColor: "#53cfab",
    width: "90%",
    height: "26%",
    top: "26%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 12,
  },

  title: {
    color: "#000",
    fontWeight: "bold",
    fontSize: 20,
    alignSelf: "center",
    marginTop: 14,
  },

  input: {
    color: "#fff",
    backgroundColor: "#222",
    width: "90%",
    padding: 20,
    alignSelf: "center",
    marginTop: 20,
    borderRadius: 10,
  },

  btn: {
    backgroundColor: "#222",
    width: "50%",
    alignSelf: "center",
    alignContent: "center",
    alignItems: "center",
    marginTop: 20,
    padding: 12,
    borderRadius: 20,
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },

  textBtn: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 22,
    alignSelf: "center",
  },
});
