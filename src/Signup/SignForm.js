import React, { Component } from "react";
import { View,Text,TextInput,TouchableOpacity,StyleSheet,KeyboardAvoidingView} from "react-native";


export default class Signup extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.header}>Registration Form</Text>

                <TextInput 
                    placeholder="Your Name"
                    placeholderTextColor="#FFFFFF"
                    returnKeyType="next"
                    onSubmitEditing={() => this.emailInput.focus()}
                    autoCapitalize="none"
                    autoCorrect={false}
                    style={styles.input}
                />

                <TextInput 
                    style={styles.input}
                    placeholder="Your Email"
                    placeholderTextColor="#FFFFFF"
                    returnKeyType="next"
                    ref={(input) => this.emailInput = input}
                    onSubmitEditing={() => this.passwordInput.focus()}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    autoCorrect={false}
                    // underlineColorAndroid={'transparent'}
                />  

                <TextInput 
                    secureTextEntry
                    placeholder="Password"
                    placeholderTextColor="#FFFFFF"
                    returnKeyType="go"
                    style={styles.input}
                    ref={(input) => this.passwordInput = input}
                    // underlineColorAndroid={'transparent'}
                />

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttontext}>REGISTER</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#3498db',
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch'   
    },
    header: {
        fontSize: 24,
        color: '#fff',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#ecf0f1',
        borderBottomWidth: 1
    },
    input: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#fff',
        borderBottomColor: '#ecf0f1',
        borderBottomWidth: 1,
        fontSize: 18
    },
    button: {
        //alignSelf: 'stretch',
        //alignItems: 'center',
        //padding: 20,
        //marginTop: 10,        
        backgroundColor: '#1abc9c',
        //paddingVertical:  15

        
        paddingVertical:  15
    },
    buttontext: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontWeight: '700'
    }
});