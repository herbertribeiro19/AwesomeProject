import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Profile({ name }) {
  const navigation = useNavigation();
  const imgUrl = "../../../assets/profile.png";

  function exit() {
    navigation.navigate("Intro");
  }

  return (
    <View>
      <TouchableOpacity style={styles.box2}>
        <Image source={require(imgUrl)} style={styles.profileImg} />
        <Text style={styles.name}>{name}</Text>
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
  );
}

const styles = StyleSheet.create({
  box2: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
    justifyContent: "space-around",
  },


  profileImg: {
    width: 60,
    height: 60,
    alignSelf: "left",
    marginTop: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 16,
    color: "#fff",
    marginLeft: 14,
    marginTop: 4,
    marginRight: 8,
    fontWeight: "bold",
  },
  box3: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "column",
    gap: 8,
  },
  lineIcons: {
    flexDirection: "row",
    alignItems: "center",
    gap: 18,
    backgroundColor: "#222",
    padding: 6,
    borderRadius: 20,
  },
  options: {
    fontSize: 20,
    alignItems: "center",
    color: "#fff",
  },
});
