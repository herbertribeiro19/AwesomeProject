import React, { useState } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'

export default function Moviments({ data }) {
    const [showValue, setShowValue] = useState(false);

    return (
        <TouchableOpacity style={styles.container} onPress={() => setShowValue(!showValue)}>
            <Text style={styles.data}>{data.data}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                {showValue ? (
                    <Text
                        style={data.type === 1 ? styles.valor : styles.expenses}
                    >
                        {data.type === 1 ? `R$ ${data.value}` : `R$ -${data.value}`}
                    </Text>
                ) : (
                    <View style={styles.visualizacao}>
                        <Feather style={styles.icon} name="eye" size={12} color="#f1f1f1"></Feather>
                    </View>
                )}
            </View>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        color: "#fff",
        backgroundColor: "#111",
        borderRadius: 8,
        margin: 6,
        flex: 1,
        borderBottomColor: "#444",
        padding: 24,
    },

    data: {
        color: "#fff",
        fontSize: 14,
    },

    content: {
        color: "#fff",
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 2,
    },

    label: {
        color: "#f1f1f1",
        fontSize: 14,
        marginTop: 0,
    },

    valor: {
        color: '#66ffd2',
        fontSize: 16,
        fontWeight: "bold",
    },

    expenses: {
        color: '#e74c3c',
        fontSize: 16,
        fontWeight: "bold",
    },

    visualizacao: {
        alignItems: 'flex-end',
        width: 50,
        backgroundColor: "#303030",
        borderRadius: 20,
        padding: 4,
        flexDirection: "column",
        alignContent: "right",
        justifyContent: "right",
    },

    icon: {
        marginRight: 4,
    }
})