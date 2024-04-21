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
import React, { useState } from "react";
import DateTimePicker from "@react-native-community/datetimepicker";
import { AntDesign } from "@expo/vector-icons";

export default function Calendario() {
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(true);
  const [dateInfo, setDateInfo] = useState("");

  const [open, setOpen] = useState(false); //open and close the modal
  function handleOnPress() {
    setOpen(!open);
  }

  const toggleDatepicker = () => {
    setShowPicker(showPicker);
    handleOnPress();
  };

  const onChange = ({ type }, selectedDate) => {
    if (type == "set") {
      const currentDate = selectedDate;
      setDate(currentDate);

      if (Platform.OS === "android") {
        toggleDatepicker();
        setDateInfo(formatDate(currentDate));
      }
    } else {
      toggleDatepicker();
    }
  };

  const confirmIOSDate = () => {
    setDateInfo(formatDate(date));
    toggleDatepicker();
    handleOnPress();
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
      <View>
        <Text style={styles.textData}>Selecione a Data</Text>
        {showPicker && (
          <Pressable onPress={toggleDatepicker}>
            <TextInput
              style={styles.textDateStyle}
              placeholder="Data"
              value={dateInfo}
              onChangeText={setDateInfo}
              editable={false}
              onPressIn={toggleDatepicker}
            ></TextInput>
          </Pressable>
        )}

        <Modal animationType="slide" transparent={true} visible={open}>
          <View>
            <View>
              {/* MODAL DATA PICKER */}
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
                    <TouchableOpacity onPress={handleOnPress}>
                      <Text style={[styles.buttonText, { color: "red" }]}>
                        Cancel
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={confirmIOSDate}>
                      <Text style={[styles.buttonText, { color: "green" }]}>
                        Confirm
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            </View>
          </View>
        </Modal>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  TextDate: {
    color: "white",
  },

  modalStyle: {
    width: "100%",
    height: "80%",
    top: 240,
    borderRadius: 30,
    alignContent: "center",
    alignSelf: "center",
    padding: 20,
  },

  modalDatePicker: {
    backgroundColor: "white",
    top: 300,
    padding: 30,
    margin: 30,
    borderRadius: 30,
  },

  container: {
    flex: 1,
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },

  closeView: {
    top: -20,
    backgroundColor: "#111",
    borderRadius: 30,
    width: "18%",
    padding: 15,
    alignItems: "center",
    color: "white",
  },

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
});
