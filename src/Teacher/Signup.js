import React, { Component } from "react";
import { View,Text,Image,StyleSheet,KeyboardAvoidingView,TextInput,TouchableOpacity} from "react-native";


export default class Signup extends Component {
    render() {
        return (
            <KeyboardAvoidingView behavior="padding" style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image 
                    source={require('../img/books.png')}
                    style={styles.logo}
                    />
                    <Text style={styles.title}>E-Learning Platform ... !</Text>
                </View>

                <View style={styles.formContainer}>
                    <View style={styles.containerForm}>
                        <Text style={styles.headerForm}>Registration Form</Text>

                        <TextInput 
                            placeholder="Your Name"
                            placeholderTextColor="#2d3436"
                            returnKeyType="next"
                            onSubmitEditing={() => this.emailInput.focus()}
                            autoCapitalize="none"
                            autoCorrect={false}
                            style={styles.inputForm}
                        />

                        <TextInput 
                            style={styles.inputForm}
                            placeholder="Your Email"
                            placeholderTextColor="#2d3436"
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
                            placeholderTextColor="#2d3436"
                            returnKeyType="next"
                            style={styles.inputForm}
                            ref={(input) => this.passwordInput = input}
                            onSubmitEditing={() => this.institute.focus()}
                            // underlineColorAndroid={'transparent'}
                        />
                        
                        <TextInput 
                            
                            placeholder="Institution Name"
                            placeholderTextColor="#2d3436"
                            returnKeyType="go"
                            style={styles.inputForm}
                            ref={(input) => this.institute = input}
                            // underlineColorAndroid={'transparent'}
                        />

                        <TouchableOpacity style={styles.buttonForm} onPress = {() => this.props.navigation.navigate('Home')}>
                            <Text style={styles.buttontextForm}>REGISTER</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#b8e994'
    },
    formContainer: {
        flex:6,
        
    },
    logoContainer: {
        alignItems: 'center',
        marginTop: 30,
        flexGrow: 1
    },
    logo: {
        width: 100,
        height: 100
    },
    title: {
        color: '#2d3436',
        marginTop: 10,
        textAlign: 'center',
        opacity: 0.9,
        fontWeight: '300',
        fontSize: 20  
    },
    containerForm: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#b8e994',
        paddingLeft: 60,
        paddingRight: 60,
        alignSelf: 'stretch'   
    },
    headerForm: {
        fontSize: 24,
        color: '#2d3436',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: '#2d3436',
        borderBottomWidth: 1
    },
    inputForm: {
        alignSelf: 'stretch',
        height: 40,
        marginBottom: 30,
        color: '#2d3436',
        borderBottomColor: '#2d3436',
        borderBottomWidth: 1,
        fontSize: 18
    },
    buttonForm: {
        //alignSelf: 'stretch',
        //alignItems: 'center',
        //padding: 20,
        //marginTop: 10,        
        backgroundColor: '#2d3436',
        //paddingVertical:  15

        
        paddingVertical:  15
    },
    buttontextForm: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontWeight: '700'
    }
});