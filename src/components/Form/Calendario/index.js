import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Pressable,
  Platform,
  Modal,
} from "react-native";
import React, { useState, useEffect } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";

export default function Calendario({ onSelectedDate }) {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [dateInfo, setDateInfo] = useState("");

  useEffect(() => {
    if (dateInfo) {
      onSelectedDate(dateInfo);
      console.log("Data selecionada:", dateInfo);
    }
  }, [dateInfo]);

  const handleSelectDate = (selectedDate) => {
    setDateInfo(selectedDate);
  };

  const [open, setOpen] = useState(false); //open and close the modal

  const toggleDatepicker = () => {
    setShowPicker(!showPicker);
    setOpen(!open);
  };

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
    if (Platform.OS === "android") {
      handleSelectDate(formatDate(currentDate));
      toggleDatepicker();
    }
  };

  const confirmIOSDate = () => {
    handleSelectDate(formatDate(date));
    toggleDatepicker();
  };

  const formatDate = (rawDate) => {
    let date = new Date(rawDate);
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;
    return `${day}/${month}/${year}`;
  };

  return (
    <View>
      <Text style={styles.textData}>Data</Text>
      <Pressable onPress={toggleDatepicker}>
        <TextInput
          onPress={toggleDatepicker}
          style={styles.textDateStyle}
          placeholder="Selecione uma data"
          value={dateInfo}
          onChangeText={setDateInfo}
          editable={false}
        />
      </Pressable>

      <Modal animationType="fade" transparent={true} visible={open}>
        <View style={styles.centeredView}>
          <View style={styles.modalDatePicker}>
            {showPicker && (
              <DateTimePicker
                mode="date"
                display="spinner"
                value={date}
                onChange={onChange}
              />
            )}

            {showPicker && Platform.OS === "ios" && (
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity onPress={toggleDatepicker}>
                  <Text style={[styles.buttonText, { color: "red" }]}>
                    Cancelar
                  </Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={confirmIOSDate}>
                  <Text style={[styles.buttonText, { color: "#fff" }]}>
                    Confirmar
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  textData: {
    marginTop: 20,
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 5,
  },

  textDateStyle: {
    fontSize: 14,
    color: "#f1f1f1",
    marginBottom: 5,
    width: "100%",
    padding: 12,
    backgroundColor: "#444",
    borderRadius: 20,
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
    backgroundColor: "rgba(0, 0, 0, 0.5)", // semi-transparent background
  },

  modalDatePicker: {
    backgroundColor: "#000",
    padding: 30,
    borderRadius: 30,
    color: "#333",
  },

  buttonText: {
    fontSize: 16,
  },
});
