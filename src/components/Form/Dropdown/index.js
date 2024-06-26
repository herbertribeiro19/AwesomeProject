import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";

export default function Dropdown({ onSelected }) {
  const handleSelect = (selectedItem) => {
    const selectedValue = selectedItem[0]?.value; // Usamos ? para tratar o caso de selectedItem[0] ser undefined
    onSelected(selectedItem);
    console.log("Testando aqui..");
    console.log(selectedItem);
  };

  const data = [
    { key: "1", value: "Entrada" },
    { key: "2", value: "Saída" },
  ];

  return (
    <View style={styles.dropdownBox}>
      <SelectList
        style={styles.dropdown}
        placeholder="Selecione uma entrada ou saída"
        setSelected={handleSelect}
        data={data}
        save="value"
        search={false}
        boxStyles={{ backgroundColor: "#444", borderRadius: 20 }}
        inputStyles={{
          fontSize: 12,
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
    marginTop: 16,
    marginBottom: 10,
  },
});
