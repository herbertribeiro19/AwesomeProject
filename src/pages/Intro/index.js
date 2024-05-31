import React, { useState } from "react";
import {
  View,
  TextInput,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
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
        Alert.alert(
          "Bem vindo(a) ao Fnance!",
          `Aproveite a experiência, ${name}`,
          [
            {
              text: "Cancelar",
              onPress: () => navigation.navigate("Intro"),
              style: "cancel",
            },
            { text: "Continuar", onPress: () => navigation.navigate("Home") },
          ]
        );
        navigation.navigate("Home");
      } catch (e) {
        console.error("Failed to save name.");
      }
    }
  };

  return (
    <View style={styles.introScreen}>
      <View style={styles.containerTop}>
        <Text style={styles.textIntro}> Seja bem vindo (a) </Text>
        <Image style={styles.img} source={require(urlImg)} />
      </View>
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
    backgroundColor: "#222",
    width: "100%",
    height: "100%",
  },

  containerTop: {
    marginTop: 50,
    flexDirection: "column-reverse",
    gap: 20,
  },

  textIntro: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "500",
    marginTop: 10,
    marginBottom: 40,
    alignSelf: "center",
  },

  img: {
    width: 160,
    height: 160,
    alignSelf: "center",
    borderRadius: 20,
  },

  box: {
    backgroundColor: "#53cfab",
    width: "90%",
    height: "26%",
    top: "4%",
    alignSelf: "center",
    borderRadius: 20,
    padding: 12,
  },

  title: {
    color: "#222",
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
    fontWeight: "500",
    fontSize: 18,
    alignSelf: "center",
  },
});
