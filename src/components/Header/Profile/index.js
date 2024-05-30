import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Profile({ route }) {
  const navigation = useNavigation();
  // const { name } = route.params; // assumindo que você passa o nome via params

  const imgUrl = "../../../assets/profile.png";

  function exit() {
    navigation.navigate("Home");
  }

  return (
    <View>
      <View style={styles.box}>
        <Text style={styles.title}>Configurações de Perfil</Text>

        <TouchableOpacity style={styles.box2}>
          <Image source={require(imgUrl)} style={styles.profileImg} />
          <Text style={styles.name}>Jr</Text>
          <AntDesign name="edit" size={16} color="#fff" />
        </TouchableOpacity>

        <View style={styles.box3}>
          <TouchableOpacity style={styles.lineIcons}>
            <AntDesign name="setting" size={36} color="#fff" />
            <Text style={styles.options}>Configurações</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lineIcons}>
            <AntDesign name="inbox" size={36} color="#fff" />
            <Text style={styles.options}>Novidades</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lineIcons}>
            <AntDesign name="Safety" size={36} color="#fff" />
            <Text style={styles.options}>Segurança</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.lineIcons} onPress={exit}>
            <AntDesign name="logout" size={36} color="#fff" />
            <Text style={styles.options}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box2: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 30,
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-around",
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
  profileImg: {
    width: 60,
    height: 60,
    alignSelf: "left",
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    color: "#fff",
    marginLeft: 14,
    marginTop: 4,
    marginRight: 8,
  },
  box3: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "column",
    marginLeft: 60,
    gap: 8,
  },
  lineIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    backgroundColor: "#333",
    padding: 6,
    borderRadius: 20,
  },
  options: {
    fontSize: 20,
    alignItems: "center",
    color: "#fff",
  },
});
