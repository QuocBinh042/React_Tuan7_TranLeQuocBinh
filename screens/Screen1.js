import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image, Alert, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Screen1({ navigation }) {
    const users = [
        { email: "user1@example.com", password: "password1" },
        { email: "user2@example.com", password: "password2" },
        { email: "user3@example.com", password: "password3" },
        { email: "user4@example.com", password: "password4" },
        { email: "user5@example.com", password: "password5" },
    ];

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = () => {
        const user = users.find(
            (user) => user.email === email && user.password === password
        );
        if (user) {
            Alert.alert("Đăng nhập thành công!");
            navigation.navigate("Screen2");
        } else {
            setErrorMessage('Thông tin đăng nhập không chính xác!');
        }
    };

    return (
        <View style={styles.container}>
            {/* Nút back */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                <Icon name="arrow-left" size={24} color="black" />
            </TouchableOpacity>

            {/* Logo */}
            <Image
                source={require('../assets/Data/icon.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>Hello Again!</Text>
            <Text style={styles.subtitle}>Login into your account</Text>

            {/* Input Email */}
            <View style={styles.inputContainer}>
                <Icon name="envelope" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your email address"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>

            {/* Input Password */}
            <View style={styles.inputContainer}>
                <Icon name="lock" size={20} color="gray" style={styles.icon} />
                <TextInput
                    style={styles.input}
                    placeholder="Enter your password"
                    value={password}
                    secureTextEntry={true}
                    
                    onChangeText={setPassword}
                />
            </View>
            {/* Nút Quên mật khẩu */}
            <TouchableOpacity onPress={() => Alert.alert('Forgot Password clicked')} style={styles.forgotPasswordContainer}>
                <Text style={{ color: 'blue' }}>Forgot password?</Text>
            </TouchableOpacity>

            {/* Thông báo lỗi */}
            {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

            {/* Nút Continue */}
            <TouchableOpacity style={styles.button} onPress={handleLogin}>
                <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>

            <Text>Or</Text>

            <View style={styles.iconRow}>
                <Image source={require('../assets/Data/google.png')} style={styles.socialIcon} />
                <Image source={require('../assets/Data/face.png')} style={styles.socialIcon} />
                <Image source={require('../assets/Data/apple.png')} style={styles.socialIcon} />
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
        backgroundColor: '#fff',
    },
    backButton: {
        position: 'absolute',
        top: 40,
        left: 20,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 30,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        color: 'gray',
        marginBottom: 30,
    },
    inputContainer: {
        width: '100%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 15,
    },
    icon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        fontSize: 16,
    },
    error: {
        color: 'red',
        marginBottom: 15,
    },
    button: {
        backgroundColor: '#00bfff',
        paddingVertical: 15,
        borderRadius: 10,
        width: '100%',
        alignItems: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
    },
    forgotPasswordContainer: {
        width: '100%', // Để đảm bảo rằng nó chiếm đủ chiều rộng của container
        alignItems: 'flex-end', // Đưa phần tử con Text về bên phải
        marginBottom: 20, // Khoảng cách phía dưới
    },
    iconRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 20,
    },
    socialIcon: {
        marginHorizontal: 10,
    },

});
