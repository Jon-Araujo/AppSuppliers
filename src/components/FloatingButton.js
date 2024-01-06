import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default function FloatingButton({ navigation }) {
    return <>
        <TouchableOpacity style={styles.button} onPress={() => { navigation.navigate('Register'); }}>
            <Text style={styles.text}>+</Text>
        </TouchableOpacity >
    </>
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#164863',
        paddingVertical: 10,
        width: "20%",
        borderRadius: 15,
        position: "absolute",
        bottom: "5%",
        right: "5%"
    },
    text: {
        fontSize: 48,
        color: '#DDF2FD',
        textAlign: 'center',
    }
});