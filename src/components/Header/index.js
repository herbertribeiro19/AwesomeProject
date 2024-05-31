import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AntDesign } from "@expo/vector-icons";
import Profile from "./Profile";

const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 26
  : 64;

export default function Header({ name }) {
  const imgUrl = "../../assets/profile.png";
  const [modalVisible, setModalVisible] = useState(false);
  const [username, setUserName] = useState(name);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  useEffect(() => {
    getUserName();
  }, []);

  const getUserName = async () => {
    try {
      const storedName = await AsyncStorage.getItem("userName");
      if (storedName) {
        setUserName(storedName);
      }
    } catch (error) {
      console.error("Erro ao carregar nome do usuário:", error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View>
          <Text style={styles.username1}>Olá</Text>
          <Text style={styles.username2}>{username}</Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonUser}
          onPress={openModal}
        >
          <Image style={styles.imgProfile} source={require(imgUrl)} />
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <View style={styles.modalHeader}>
              <TouchableOpacity onPress={closeModal}>
                <AntDesign name="close" size={20} color="#fff" />
              </TouchableOpacity>
            </View>
            <View>
              <Text style={styles.title}>Configurações de Perfil</Text>
            </View>
          </View>
          <Profile name={username} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#53cfab",
    paddingTop: statusBarHeight,
    flexDirection: "row",
    paddingStart: 16,
    paddingEnd: 16,
    paddingBottom: 44,
    borderEndEndRadius: 14,
    borderEndStartRadius: 14,
  },

  content: {
    flex: 1,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  username1: {
    fontSize: 18,
    color: "#222",
    fontWeight: "500",
    marginLeft: 16,
  },

  username2: {
    fontSize: 16,
    color: "#111",
    fontWeight: "bold",
    marginLeft: 16,
  },

  imgProfile: {
    width: 45,
    height: 45,
    borderColor: "#000",
    borderWidth: 1.2,
    borderRadius: 50,
  },

  buttonUser: {
    width: 44,
    height: 44,
    backgroundColor: "rgba(0,0,0, 0.3)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 22,
  },

  modalContainer: {
    top: 120,
    height: "50%",
    width: "90%",
    borderRadius: 30,
    alignContent: "center",
    alignSelf: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#111",
  },

  modalHeader: {
    flexDirection: "row-reverse",
  },

  title: {
    marginTop: 0,
    fontSize: 16,
    fontWeight: "400",
    color: "#fff",
  },

  modalHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
});
