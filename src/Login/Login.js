import React, { Component } from "react";
import { View,Text,Image,StyleSheet,KeyboardAvoidingView,TouchableOpacity} from "react-native";

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
                    source={require('../img/books.png')}
                    style={styles.logo}
                    />
                    <Text style={styles.title}>E-Learning Platform ... !</Text>
                </View>
                <View style={styles.formContainer}>
                    <LoginForm  />
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
    }
});