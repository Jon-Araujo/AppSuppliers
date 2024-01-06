import React, { useState, useEffect } from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import { Modal } from "react-native";

import { deleteSupplier } from '../data/SupplierData.js';

export default function ModalDelete({ id, name, value, onClose }) {
    const [valueModal, setModal] = useState(value);

    useEffect(() => {
        setModal(value);
    }, [value]);

    const closeModal = () => {
        setModal(false);
        onClose();
    };

    const closeAndDelete = () => {
        deleteSupplier(id);
        closeModal();
    };

    return <Modal visible={valueModal}>
        <View style={styles.modal}>
            <Text style={styles.title}>Confirme a exclusão da empresa {name}</Text>
            <TouchableOpacity style={styles.button} onPress={closeAndDelete}><Text style={styles.textButton}>Confirmar</Text></TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={closeModal}><Text style={styles.textButton}>Cancelar</Text></TouchableOpacity>
        </View>
    </Modal>
};

const styles = StyleSheet.create({
    modal: {
        marginTop: '50%',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    title: {
        textAlign: 'center',
        fontFamily: 'MontserratRegular',
        width: '100%',
        fontSize: 24,
        marginBottom: 32,
        color: '#164863'
    },
    button: {
        marginLeft: 16,
        borderWidth: 3,
        borderColor: '#164863',
        borderRadius: 20
    },
    textButton: {
        fontFamily: 'MontserratSemiBold',
        textAlign: 'center',
        padding: '5%',
        fontSize: 18,
        color: '#164863'
    }
})

