import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { CheckBox } from "react-native-elements";

export default function ModalFilter({transp, paper, onCheckBoxChange}) {

    return <View style={styles.container}>
        <CheckBox title={'Transportadora'} checked={transp} onPress={() => onCheckBoxChange('transp', !transp)} />
        <CheckBox title={'Papel'} checked={paper} onPress={() => onCheckBoxChange('paper', !paper)} />
    </View>
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: '2%'
    }
});