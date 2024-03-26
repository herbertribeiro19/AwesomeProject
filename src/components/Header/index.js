import React from 'react'

import {
    View,
    StyleSheet,
    Text,
    StatusBar,
    TouchableOpacity,
    sh
} from 'react-native'

import { Feather } from '@expo/vector-icons'
const statusBarHeight = StatusBar.currentHeight ? StatusBar.currentHeight + 26 : 64;

export default function Header({ name }) {
    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.username}>{name}</Text>
                <TouchableOpacity activeOpacity={0.9} style={styles.buttonUser}>
                    <Feather name="user" size={30} color="#111"></Feather>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#53cfab',
        paddingTop: statusBarHeight,
        flexDirection: 'row',
        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 44,
        borderEndEndRadius: 14,
        borderEndStartRadius: 14,
    },

    content: {
        flex: 1,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    username: {
        fontSize: 18,
        color: '#333',
        fontWeight: 'bold',
    },

    buttonUser: {
        width: 44,
        height: 44,
        backgroundColor: 'rgba(0,0,0, 0.3)',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 22,

    }
})