import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import SupplierContact from "../components/SupplierContact.js";
import FloatingButton from "../components/FloatingButton.js";
import { getSuppliers } from "../data/SupplierData.js";
import ModalFilter from "../components/ModalFilter.js";

export default function ShowScreen({ navigation }) {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const suppliersData = await getSuppliers();
                setSuppliers(suppliersData);
            } catch (error) {
                console.error('Erro ao obter fornecedores:', error);
            }
        };

        fetchData();
    }, [suppliers]);


    const [search, setSearch] = useState('');

    const [filterBar, setFilterBar] = useState(false);

    const [transp, setTransp] = useState(false);
    const [paper, setPaper] = useState(false);

    const checkboxChange = (checkboxName, isChecked) => {
        if (checkboxName === 'transp') {
            setTransp(isChecked);
        } else if (checkboxName === 'paper') {
            setPaper(isChecked);
        }
    };

    return <>
        <View style={styles.searchContainer}>
            <TextInput placeholder="Digite aqui sua pesquisa" style={styles.searchBar} value={search} onChangeText={setSearch} />
            <TouchableOpacity style={styles.button} onPress={() => { setFilterBar(!filterBar) }}>
                <Ionicons name="filter" size={20} color="#000" style={styles.filterButton}/>
            </TouchableOpacity>
        </View>
        {filterBar && <View style={styles.container}>
            <ModalFilter transp={transp} paper={paper} onCheckBoxChange={checkboxChange} />
        </View>}
        <ScrollView style={{ marginBottom: "5%" }}>
            {suppliers.map((suppliers, index) => {
                if (transp === true && suppliers.category.toLowerCase() === 'transportadora') {
                    if (search !== '') {
                        if (search.toLowerCase() === suppliers.name.slice(0, search.length).toLowerCase()) {
                            return <SupplierContact key={index} {...suppliers} />
                        }
                    } else {
                        return <SupplierContact key={index} {...suppliers} />
                    }
                }
                else if (paper === true && suppliers.category.toLowerCase() === 'papel') {
                    if (search !== '') {
                        if (search.toLowerCase() === suppliers.name.slice(0, search.length).toLowerCase()) {
                            return <SupplierContact key={index} {...suppliers} />
                        }
                    } else {
                        return <SupplierContact key={index} {...suppliers} />
                    }
                } else if (transp === false && paper === false) {
                    if (search !== '') {
                        if (search.toLowerCase() === suppliers.name.slice(0, search.length).toLowerCase()) {
                            return <SupplierContact key={index} {...suppliers} />
                        }
                    } else {
                        return <SupplierContact key={index} {...suppliers} />
                    }
                }
            })}

        </ScrollView>

        <FloatingButton navigation={navigation} />
    </>
};

const styles = StyleSheet.create({
    searchContainer: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    searchBar: {
        width: '80%',
        padding: '3%',
    },
    button: {
        width: '20%',
    },
    filterButton: {
        textAlign: 'center'
    },
})