import React, { Component } from 'react';
import { Container, Header, Content, ListItem, Text, Radio, Right, Left,Picker, Form } from 'native-base';
import  { StyleSheet,View,ScrollView,TextInput,TouchableOpacity } from 'react-native';


export default class PickerExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: "key0",
      selected1: "key0"
    };
  }
  onValueChange(value) {
    this.setState({
      selected: value
    });
  }
  onValueChange1(value) {
    this.setState({
      selected1: value
    });
  }
  render() {
    return (
      <Container>
        <Header title="Teacher Activity"/>
        <Content  style={styles.container}>
          <Form style={{marginTop:20}}>
            <Picker
              note
              mode="dropdown"
              style={{ width: 280,borderColor:"black",borderWidth:2 }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="Choose Tag" value="key0" />
              <Picker.Item label="# Java" value="key1" />
              <Picker.Item label="# C-Sharp" value="key2" />
              <Picker.Item label="# JS" value="key3" />
              <Picker.Item label="# Mysql" value="key4" />
            </Picker>
          </Form>

          <Text style={styles.txt}>  OR </Text>

          <Picker
              note
              mode="dropdown"
              style={{ width: 280 }}
              selectedValue={this.state.selected1}
              onValueChange1={this.onValueChange1.bind(this)}
            >
              <Picker.Item label="Choose Exsisting Course" value="key0" />
              <Picker.Item label="# Java" value="key1" />
              <Picker.Item label="# JavaScript" value="key2" />
              <Picker.Item label="# React Native" value="key3" />
            </Picker>

            <TextInput 
                style={styles.inputForm}
                placeholder="Select Video  "
                placeholderTextColor="#2d3436"
                autoCapitalize="none"
                autoCorrect={false}
                // underlineColorAndroid={'transparent'}
            />  

                      <TouchableOpacity 
                                style={styles.buttonContainerForm} 
                              
                               
                        >
                            <Text style={styles.buttonTextForm}>Upload</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                                style={styles.buttonContainerForm1} 
                                onPress={() => this.props.navigation.navigate('List')}
                        >
                            <Text style={styles.buttonTextForm}>All Uploaded Videos</Text>
                        </TouchableOpacity>

        </Content>
       

      </Container>
    );
  }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 30
    },
    txt: {
        marginLeft: 80,
        marginTop: 20,
        marginBottom: 10


    },
    
    inputForm: {
        alignSelf: 'stretch',
        height: 40,
        marginTop: 20,
        marginBottom: 30,      
        marginRight: 30,
        color: '#2d3436',
        borderBottomColor: '#2d3436',
        borderBottomWidth: 1,
        fontSize: 18
    },
    buttonContainerForm: {
      backgroundColor: '#686de0',
      paddingVertical:  12,
      marginRight:40

  },
  buttonTextForm: {
      textAlign: 'center',
      color: 'white',
      fontWeight: '700'
  },   
   buttonContainerForm1: {
    backgroundColor: '#30336b',
    paddingVertical:  12,
    marginRight:40,
    marginTop:45

},
});