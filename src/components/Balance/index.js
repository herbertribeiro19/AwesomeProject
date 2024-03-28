import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Balance({ saldo, gastos }) {
    return (
        <View style={styles.container}>

            <View style={styles.item}>
                <Text style={styles.itemTitle}>Saldo</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.balance}>{saldo}</Text>
                </View>
            </View>
            <View style={styles.item}>
                <Text style={styles.itemTitle}>Gastos</Text>
                <View style={styles.content}>
                    <Text style={styles.currencySymbol}>R$</Text>
                    <Text style={styles.expenses}>{gastos}</Text>
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        
        backgroundColor: '#111',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingStart: 20,
        paddingEnd: 20,
        marginTop: -24,
        marginStart: 16,
        marginEnd: 16,
        // marginBottom: 600,
        borderRadius: 20,
        paddingTop: 22,
        paddingBottom: 22,
        zIndex: 99,
    },

    item: {

    },

    content: {
        marginTop: 6,
        flexDirection: 'row',
        gap: 4,
        alignItems: 'center',
    },

    itemTitle: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        alignContent: 'center',

    },

    currencySymbol: {
        color: '#f9f9f9',
        fontSize: 16,
    },

    balance: {
        color: '#66ffd2',
        fontSize: 16,
    },

    expenses: {
        color: '#e74c3c',
        fontSize: 16,
    },

})