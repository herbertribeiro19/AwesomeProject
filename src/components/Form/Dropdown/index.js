import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Button,
  TextInput,
  TouchableOpacity,
  Modal,
} from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function Dropdown() {
  const [selected, setSelected] = React.useState("");

  const data = [
    { key: "1", value: "Entrada" },
    { key: "2", value: "Saída" },
  ];
  return (
    <View style={styles.dropdownBox}>
      <SelectList
        style={styles.dropdown}
        placeholder="Selecione uma entrada ou saída"
        setSelected={(val) => setSelected(val)}
        data={data}
        save="value"
        search={false}
        boxStyles={{ backgroundColor: "#444", borderRadius: 20 }}
        inputStyles={{
          fontSize: 14,
          color: "#f1f1f1",
        }}
        dropdownStyles={{ backgroundColor: "#444", borderRadius: 20 }}
        dropdownTextStyles={{ color: "#fff", fontSize: 14 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dropdownBox: {
    marginBottom: 10,
  },
});
