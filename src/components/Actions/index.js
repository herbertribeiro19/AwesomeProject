import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';

import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
    return (
        <ScrollView style={styles.container} horizontal={true} showsHorizontalScrollIndicator={false}>
            <TouchableOpacity style={styles.actionButton}>
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
})