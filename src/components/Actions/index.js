import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Modal,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Form from "../Form/";

export default function Actions() {
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View>
      <ScrollView
        style={styles.container}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <TouchableOpacity style={styles.actionButton} onPress={openModal}>
          <View style={styles.areaButton}>
            <AntDesign name="addfolder" size={26} color="#fff"></AntDesign>
          </View>
          <Text style={styles.labelButton}>Entradas</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="tagso" size={26} color="#fff"></AntDesign>
          </View>
          <Text style={styles.labelButton}>Compras</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="creditcard" size={26} color="#fff"></AntDesign>
          </View>
          <Text style={styles.labelButton}>Carteira</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="barcode" size={26} color="#fff"></AntDesign>
          </View>
          <Text style={styles.labelButton}>Boletos</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton}>
          <View style={styles.areaButton}>
            <AntDesign name="setting" size={26} color="#fff"></AntDesign>
          </View>
          <Text style={styles.labelButton}>Conta</Text>
        </TouchableOpacity>
      </ScrollView>

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        statusBarTranslucent={true}
        onRequestClose={closeModal}
        style={styles.modalComplete}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <TouchableOpacity onPress={closeModal}>
              <AntDesign name="close" size={20} color="#fff"></AntDesign>
            </TouchableOpacity>
            <Text style={styles.modalText}>Entrada de informação</Text>
          </View>
          <Form />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    maxHeight: 120,
    marginBottom: 20,
    marginTop: 18,
    paddingEnd: 4,
    paddingStart: 26,
  },

  actionButton: {
    alignItems: "center",
    marginRight: 24,
  },

  areaButton: {
    backgroundColor: "#111",
    height: 62,
    width: 62,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },

  labelButton: {
    marginTop: 10,
    color: "#fff",
    fontSize: 14,
    marginBottom: 30,
    textAlign: "center",
  },

  modalContainer: {
    top: 200,
    height: "70%",
    width: "90%",
    borderRadius: 30,
    alignContent: "center",
    alignSelf: "center",
    padding: 20,
    backgroundColor: "#333",
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
