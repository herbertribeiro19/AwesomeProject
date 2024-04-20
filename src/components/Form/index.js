import React, { useState } from 'react';
import { View, StyleSheet, Text, Button, TextInput } from 'react-native';

export default function Form() {
    return (
        <View>
            <Text>Você deseja adicionar uma entrada ou saída?</Text>

            <Text>Valor</Text>
            <TextInput placeholder="Ex. 1.75" keyboardType="decimal-pad"></TextInput>
        </View >
    );
}