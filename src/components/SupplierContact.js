import React, { useState } from "react";
import { Text, Image, StyleSheet, View, Animated } from "react-native";
import { GestureHandlerRootView, Swipeable } from "react-native-gesture-handler";
import Ionicons from '@expo/vector-icons/MaterialCommunityIcons';

import ModalDelete from "./ModalDelete.js";

function rightActions(progress, dragX) {
    const scale = dragX.interpolate({
        inputRange:[-300, 0],
        outputRange:[2, 1],
        extrapolate: 'clamp'
    })

    return <View style={styles.deleteButton}>
        <Animated.Text style={[{ marginRight: 32 }, {transform: [{scale}]}]}>
            <Ionicons  name="delete-sweep" size={40} color="#FFF" />
            </Animated.Text>
    </View>
};


export default function SupplierContact({ id, image, name, phone, email, address }) {
    const [valueModal, setModal] = useState(false);
    const openModal = () => {
        setModal(true);
    };

    const closeModal = () => {
        setModal(false);
    };

    return <GestureHandlerRootView>
        <Swipeable
            renderRightActions={rightActions}
            onSwipeableOpen={openModal}
            style={styles.swipeable}>
            <View style={styles.card}>
                <Image source={{ uri: image }} style={styles.icon} />
                <View style={styles.cardData}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.subtitle}>{phone}</Text>
                    <Text style={styles.text}>{email}</Text>
                    <Text style={styles.text}>{address}</Text>
                </View>
            </View>
        </Swipeable>
        <ModalDelete id={id} name={name} value={valueModal} onClose={() => closeModal()} />
    </GestureHandlerRootView>
};

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        alignItems: "center",
        padding: "5%",
        borderBottomWidth: 3,
        borderColor: "#9BBEC8",
        backgroundColor: "#DDF2FD",
        zIndex: 1
    },
    icon: {
        width: 100,
        height: 100,
        marginRight: 32,
        borderRadius: 100
    },
    cardData: {
        justifyContent: "space-between",
        width: '65%'
    },
    title: {
        fontFamily: "MontserratBold",
        fontSize: 22
    },
    subtitle: {
        fontFamily: "MontserratSemiBold",
        fontSize: 14
    },
    text: {
        fontFamily: 'MontserratRegular',
        fontSize: 14,
    },
    deleteButton: {
        alignItems: 'flex-end',
        justifyContent: 'center',
        backgroundColor: 'red',
        flex: 1,
    }
});