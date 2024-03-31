import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View, FlatList } from 'react-native';
import Header from '../../components/Header';
import Balance from '../../components/Balance';
import Moviments from '../../components/Moviments';
import Actions from '../../components/Actions';

const list = [
    {
        id: 3,
        label: 'Salário Março',
        value: '1.500,00',
        data: '28/03/2024',
        type: 1 //ganhos
    },

    {
        id: 1,
        label: 'Cartão de crédito',
        value: '500,00',
        data: '28/03/2024',
        type: 0 //despesas
    },
    {
        id: 2,
        label: 'Aluguel',
        value: '1.000,00',
        data: '25/03/2024',
        type: 0 //despesas
    },

    {
        id: 4,
        label: 'Aluguel',
        value: '1.000,00',
        data: '25/03/2024',
        type: 1
    },
    {
        id: 5,
        label: 'Salário Março',
        value: '1.000,00',
        data: '28/03/2024',
        type: 1 //ganhos
    },
]


export default function Home() {
    return (
        <View style={styles.container}>
            <Header name="Herbert Ribeiro"></Header>
            <Balance saldo="2.000,00" gastos="-1.500,00"></Balance>

            <Actions />

            <Text style={styles.title}>Últimas movimentações</Text>
            <FlatList
                style={styles.list}
                data={list}
                keyExtractor={(item) => String(item.id)}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <Moviments data={item}></Moviments>}
            />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        height: 10,
    },

    title: {
        fontSize: 18,
        fontWeight: 'bold',
        color: "#fff",
        marginLeft: 20,
        marginTop: 16,
    },

    list: {
        color: "#fff",
        marginStart: 14,
        marginEnd: 14,
        marginTop: 14,
    },

    items: {
        color: "#fff",
        fontSize: 16,

    },
});
