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
        // backgroundColor: "#111",
        borderBottomColor: "#444",
        borderBottomWidth: 0.5,
        padding: 24,
        borderRadius: 20,
        marginBottom: 14,
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",
        alignItems: "center",
    },

    textStilo: {
        color: "#fff",
        fontSize: 14,
        paddingStart: 4,
    },

    content: {
        color: "#fff",
        flexDirection: "column",
        alignContent: "right",
        alignItems: "right",
        justifyContent: "right",
        paddingEnd: 4,
    },

    label: {
        color: "#f1f1f1",
        fontSize: 14,
        fontWeight: "bold",

    },

    valor: {
        color: "#fff",
        fontSize: 16,
    },
})