import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Moviments({ data }) {
    return (
        <TouchableOpacity style={styles.container}>
            <Text style={styles.textStilo}>{data.data}</Text>
            <View style={styles.content}>
                <Text style={styles.label}>{data.label}</Text>
                <Text style={styles.valor}>{data.value}</Text>
            </View>
        </TouchableOpacity>
    );
}



const styles = StyleSheet.create({
    container: {
        color: "#fff",
        backgroundColor: "#111",
        padding: 24,
        borderRadius: 20,
        marginBottom: 14,
    },

    textStilo: {
        color: "#fff",
    },

    content: {
        color: "#fff",
    },

    label: {
        color: "#fff",
    },

    valor: {
        color: "#fff",
    },
})