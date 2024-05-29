import React, { useState } from "react";

import {
  View,
  StyleSheet,
  Text,
  StatusBar,
  TouchableOpacity,
  Modal,
  Image,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import Profile from "./Profile";
const statusBarHeight = StatusBar.currentHeight
  ? StatusBar.currentHeight + 26
  : 64;

export default function Header({ name }) {
  const imgUrl = "../../assets/profile.png";
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.username}>{name}</Text>
        <TouchableOpacity
          activeOpacity={0.9}
          style={styles.buttonUser}
          onPress={() => setModalVisible(true)}
        >
          <Image style={styles.imgProfile} source={require(imgUrl)} />
        </TouchableOpacity>
      </View>

      <Modal
        visible={modalVisible}
        animationType="fade"
        transparent={true}
        statusBarTranslucent={true}
        onRequestClose={() => setModalVisible(false)}
        style={styles.modalComplete}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <AntDesign name="close" size={20} color="#fff"></AntDesign>
            </TouchableOpacity>
            <Profile name="Herbert Ribeiro" />
          </View>
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

  username: {
    fontSize: 18,
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
    height: "44%",
    width: "90%",
    borderRadius: 30,
    alignContent: "center",
    alignSelf: "center",
    padding: 20,
    backgroundColor: "#111",
  },

  modalHeader: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },

  modalText: {
    color: "#fff",
    fontSize: 12,
    marginBottom: 20,
  },
});
