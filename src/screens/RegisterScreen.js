import React, { useState } from "react";
import { ScrollView, TextInput, StyleSheet, Image, Text, TouchableOpacity, KeyboardAvoidingView } from "react-native";
import { addSupplier, getSuppliers } from '../data/SupplierData.js';

export default function RegisterScreen({ navigation }) {
    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [category, SetCategory] = useState('');
    const [address, setAddress] = useState('');

    return <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.list}
        keyboardVerticalOffset={80}>
        <ScrollView contentContainerStyle={styles.scrollList}>
            <Image style={styles.icon} source={{ uri: `${image ? image : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQcCBQYEA//EADUQAAIBAwEEBggGAwAAAAAAAAABAgMEEQUGITFREhNBYXGBFCIjMlJysdFCYpGhweEkNJP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAjH/2gAMAwEAAhEDEQA/ALKAB0cgAAAAAAAAA1d9r+nWbcJVusqL8FJdL9+BuGtoDl6m2EE/Z2cn800iKe2MG8VbKaXOM0xlZsdSDV2Ov6deSUI1uqqPhCr6ufPgbTx3GNAAAAAAAAAAAAAAAAAAAIk1GLlJ4SWW+RJzW2WoypUIWNKTUqvrVMfDy8zZCtbr+0FS9nO3s5uFqnhyTw6n9GgALQkgAMDf6BtBUs5woXknUtm8J8XD+jQAC1YyUoqUWpJ7012ok5rY7UZVaM7GtJudJdKn8vLy/k6UiukAAYAAAAAAAAAAAAAAVvrVy7vVbmq3mPTah4LcWHdT6q1rVM+5Bv8AYq/Od77d5XKekAApIAAAAA92i3LtNVtq2cJTUZfK9zLIKpzjfyLRtanW21Kpn34Rf7E9L5fUAEtAAAAAAAAAAAAAHi1p9HSLxrj1Mitiy9Xh1ml3UFxdKX0K0XAvlPQADUgAAAAAWTor6WkWcudGP0K2LL0iHV6VaQe5qjH6E9eK5esAEqAAAAAAAAAAAAAESSlFxfCSwysb23laXla3nulTm15dhZ5z+02iSvoq5tYr0iC3x+Nfc2VljiQZSjKEpRnFxlF4aaw0zEtAAAABlCLnJRim5PclFZbA+tlbyu7yjbwWXUmo/cs6MVGKiuEVheBoNmNFlYr0m6WLmaxGPwL7nQEW6uTAAGNAAAAAAAAAAAAAAdgAHjvdMsr7/Zt4TfBT4SXmaitsfaS30bqtT7pJSOj7Q9yy+A0yOTexz7L5edL+xHY59t6v+T+500rq2h71xRj4zQhd20/cuKT8Jo3azI0VHZC0jjr7mtUXKKUTcWOmWdhvtbeMJfHxl+rPXH1llb1zA1skAAYAAAAAAAAAAAAAAAAB4NS1az02Obmpmf4acFmTNTr+0ioSna6fh1FunV4qPcubOQnOVScpzlKU5PLk3lsqRlrfX21d3WbjaQVvDnjMv1NLXu7m4ea9xVqfNNs+INxOmEMIA1j70Lu5t3mhXq03zjNo3VjtXeUWldxjXhz3Rl+pzwMyN1Y+m6tZ6lH/AB6ntMb6ct0l5dvij3lVwnKnKM6cnGUXlOLw0zr9A2k69wtdQeKj3QrcFLufeTYqV0oHigY0AAAAAAAAAADjuOZ2q1t0k7G0nipJe1mnvin2LvNvreoLTLCpW3Oo/Vpx5yZXVScqk5TnLpSk8t82VIm1iACkgAAAAAAAAAA7DZXWnX6Njdy9dL2U298kvwvvOmKrhKUJxnCTjKLzGS4p8yxdF1BanYQr7usXq1EuySIsXK94AMaAAAAAABhWqKjSnVl7sIuT8gOJ2uvXcaireMvUt10cfmfH+EaMyrTlVqzqzy5Tk5SzzZgdIigJAYgEgCASAIBIAgEgCDfbIXvo2pejzl7O4XRx+ZcP5RojKlUlRqwq090oSUl4reZWxaYMKVSNWlCrH3ZxUkZkLAABOBgkBqMGu2hk6ei3sovD6tr6AAVxF9yJkwDpEMcsZZIAjLGWSAIyxlkgCMsZZIAjLGWSAIyxlkgCyNBk5aNZN9tNI2GCQc1owMEgD//Z'}` }} />
            <Text>Insira a URL da imagem</Text>
            <TextInput
                style={styles.input}
                placeholder="Ex: https://imagem-exemplo.com"
                onChangeText={newImage => setImage(newImage)}
                defaultValue={image}
            />
            <Text>Insira o nome da Empresa</Text>
            <TextInput
                style={styles.input}
                placeholder="Empresa Exemplo"
                onChangeText={newName => setName(newName)}
                defaultValue={name}
            />
            <Text>Insira a categoria da Empresa</Text>
            <TextInput
                style={styles.input}
                placeholder="Empresa Exemplo"
                onChangeText={newCategory => SetCategory(newCategory)}
                defaultValue={category}
            />
            <Text>Insira o telefone de contato da Empresa</Text>
            <TextInput
                style={styles.input}
                placeholder="(21) 0000-0000"
                onChangeText={newPhone => setPhone(newPhone)}
                defaultValue={phone}
            />
            <Text>Insira o email de contato da Empresa</Text>
            <TextInput
                style={styles.input}
                placeholder="empresa@exemplo.com"
                onChangeText={newEmail => setEmail(newEmail)}
                defaultValue={email}
            />
            <Text>Insira o endereço da Empresa</Text>
            <TextInput
                style={styles.input}
                placeholder="Empresa Exemplo"
                onChangeText={newAddress => setAddress(newAddress)}
                defaultValue={address}
            />
            <TouchableOpacity style={styles.button} onPress={async () => {
                const suppliersList = await getSuppliers();
                const list = {
                    "id": `${suppliersList.length}`, "image": `${image ? image : 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAsAMBIgACEQEDEQH/xAAbAAEAAgMBAQAAAAAAAAAAAAAAAQcCBQYEA//EADUQAAIBAwEEBggGAwAAAAAAAAABAgMEEQUGITFREhNBYXGBFCIjMlJysdFCYpGhweEkNJP/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAgED/8QAGBEBAQEBAQAAAAAAAAAAAAAAAAERAjH/2gAMAwEAAhEDEQA/ALKAB0cgAAAAAAAAA1d9r+nWbcJVusqL8FJdL9+BuGtoDl6m2EE/Z2cn800iKe2MG8VbKaXOM0xlZsdSDV2Ov6deSUI1uqqPhCr6ufPgbTx3GNAAAAAAAAAAAAAAAAAAAIk1GLlJ4SWW+RJzW2WoypUIWNKTUqvrVMfDy8zZCtbr+0FS9nO3s5uFqnhyTw6n9GgALQkgAMDf6BtBUs5woXknUtm8J8XD+jQAC1YyUoqUWpJ7012ok5rY7UZVaM7GtJudJdKn8vLy/k6UiukAAYAAAAAAAAAAAAAAVvrVy7vVbmq3mPTah4LcWHdT6q1rVM+5Bv8AYq/Od77d5XKekAApIAAAAA92i3LtNVtq2cJTUZfK9zLIKpzjfyLRtanW21Kpn34Rf7E9L5fUAEtAAAAAAAAAAAAAHi1p9HSLxrj1Mitiy9Xh1ml3UFxdKX0K0XAvlPQADUgAAAAAWTor6WkWcudGP0K2LL0iHV6VaQe5qjH6E9eK5esAEqAAAAAAAAAAAAAESSlFxfCSwysb23laXla3nulTm15dhZ5z+02iSvoq5tYr0iC3x+Nfc2VljiQZSjKEpRnFxlF4aaw0zEtAAAABlCLnJRim5PclFZbA+tlbyu7yjbwWXUmo/cs6MVGKiuEVheBoNmNFlYr0m6WLmaxGPwL7nQEW6uTAAGNAAAAAAAAAAAAAAdgAHjvdMsr7/Zt4TfBT4SXmaitsfaS30bqtT7pJSOj7Q9yy+A0yOTexz7L5edL+xHY59t6v+T+500rq2h71xRj4zQhd20/cuKT8Jo3azI0VHZC0jjr7mtUXKKUTcWOmWdhvtbeMJfHxl+rPXH1llb1zA1skAAYAAAAAAAAAAAAAAAAB4NS1az02Obmpmf4acFmTNTr+0ioSna6fh1FunV4qPcubOQnOVScpzlKU5PLk3lsqRlrfX21d3WbjaQVvDnjMv1NLXu7m4ea9xVqfNNs+INxOmEMIA1j70Lu5t3mhXq03zjNo3VjtXeUWldxjXhz3Rl+pzwMyN1Y+m6tZ6lH/AB6ntMb6ct0l5dvij3lVwnKnKM6cnGUXlOLw0zr9A2k69wtdQeKj3QrcFLufeTYqV0oHigY0AAAAAAAAAADjuOZ2q1t0k7G0nipJe1mnvin2LvNvreoLTLCpW3Oo/Vpx5yZXVScqk5TnLpSk8t82VIm1iACkgAAAAAAAAAA7DZXWnX6Njdy9dL2U298kvwvvOmKrhKUJxnCTjKLzGS4p8yxdF1BanYQr7usXq1EuySIsXK94AMaAAAAAABhWqKjSnVl7sIuT8gOJ2uvXcaireMvUt10cfmfH+EaMyrTlVqzqzy5Tk5SzzZgdIigJAYgEgCASAIBIAgEgCDfbIXvo2pejzl7O4XRx+ZcP5RojKlUlRqwq090oSUl4reZWxaYMKVSNWlCrH3ZxUkZkLAABOBgkBqMGu2hk6ei3sovD6tr6AAVxF9yJkwDpEMcsZZIAjLGWSAIyxlkgCMsZZIAjLGWSAIyxlkgCyNBk5aNZN9tNI2GCQc1owMEgD//Z'
                        }`, "name": `${name}`, "category": `${category}`, "phone": `${phone}`, "email": `${email}`, "address": `${address}`
                };
                await addSupplier(list);
                navigation.goBack();
            }}>
                <Text style={styles.textButton}>Adicionar Empresa</Text>
            </TouchableOpacity>
        </ScrollView>
    </KeyboardAvoidingView>
};

const styles = StyleSheet.create({
    list: {
        backgroundColor: "#DDF2FD",
        height: "100%"
    },
    scrollList: {
        width: "100%",
        alignItems: "center",
    },
    input: {
        backgroundColor: "#9BBEC8",
        borderWidth: 2,
        borderColor: "#FFFFFF",
        width: "80%",
        padding: "2%",
        borderRadius: 15,
        marginBottom: 12,
        marginTop: 6
    },
    icon: {
        width: 156,
        height: 156,
        marginVertical: "5%",
        borderRadius: 100
    },
    button: {
        backgroundColor: "#427D9D",
        borderWidth: 2,
        borderColor: "#FFFFFF",
        width: "80%",
        padding: "4%",
        borderRadius: 15,
        marginTop: "1.5%",
    },
    textButton: {
        textAlign: "center",
        fontSize: 16,
        color: "#DDF2FD"
    }
});