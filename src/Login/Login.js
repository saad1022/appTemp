import React, { Component } from "react";
import { View,Text,Image,TextInput,StyleSheet,KeyboardAvoidingView,TouchableOpacity,StatusBar} from "react-native";

import LoginForm from "./LoginForm";

export default class Login extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <TouchableOpacity 
                        style={styles.buttonContainer} 
                        onPress= {() => this.props.navigation.navigate('Signup')}
                >
                    <Text style={styles.buttonText}>SIGNUP</Text>
                </TouchableOpacity>
                <View style={styles.logoContainer}>
                    <Image 
                    source={require('../img/vl.jpeg')}
                    style={styles.logo}
                    />
                    <Text style={styles.title}>E-Learning Platform ... !</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.containerForm}>
                        <StatusBar barStyle="light-content" />
                        <TextInput 
                            style={styles.inputForm}
                            placeholder="Your Email"
                            placeholderTextColor="#FFFFFF"
                            returnKeyType="next"
                            onSubmitEditing={() => this.passwordInput.focus()}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            autoCorrect={false}
                        />

                        <TextInput 
                            secureTextEntry
                            placeholder="Password"
                            placeholderTextColor="#FFFFFF"
                            returnKeyType="go"
                            style={styles.inputForm}
                            ref={(input) => this.passwordInput = input}
                        />
                        <TouchableOpacity 
                                style={styles.buttonContainerForm} 
                                //navigate--go to req path mentioned
                                onPress= {() => this.props.navigation.navigate('Home')}
                        >
                            <Text style={styles.buttonTextForm}>LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3498db'
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#FFF',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.9,
        fontWeight: '300',
        fontSize: 20  
    },
    buttonContainer: {
        //backgroundColor: '#2980b9',
        paddingVertical:  15,
        alignItems: 'flex-end',
        padding: 20

    },
    buttonText: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    },
    containerForm: {
        padding: 20
    },
    inputForm: {

        //backgroundColor: 'rgba(255,255,255,0.2)',
       // marginBottom: 10,
        //paddingHorizontal: 10,

        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#ecf0f1',
        borderBottomWidth: 1,
        fontSize: 18
    },
    buttonContainerForm: {
        backgroundColor: '#2980b9',
        paddingVertical:  15

    },
    buttonTextForm: {
        textAlign: 'center',
        color: '#FFFFFF',
        fontWeight: '700'
    }
});