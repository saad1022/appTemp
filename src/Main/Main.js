import React, { Component } from 'react';
import { Container, Header, Content, Button, Text,Left,Body,Right } from 'native-base';
import  { StyleSheet,TouchableOpacity } from 'react-native';

export default class Main extends Component {
  render() {
    return (
      <Container >
        
        <Content>

         <Left></Left>
         <TouchableOpacity onPress={()=>this.props.navigation.navigate('student')}>
            <Button rounded large info style={styles.btn} onPress={()=>this.props.navigation.navigate('student')}>
                <Text style={styles.txt}>I m Student</Text>
            </Button>
          </TouchableOpacity>

          <TouchableOpacity onPress={()=>this.props.navigation.navigate('teacher')}>
            <Button rounded large success  style={styles.btn1} onPress={()=>this.props.navigation.navigate('teacher')}>
                <Text style={styles.txt}>I m Teacher</Text>
            </Button>
          </TouchableOpacity>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
    btn: {
        paddingLeft: 70,
        paddingRight:70,
        paddingTop: 115,
        paddingBottom: 115,
        marginLeft: 50,
        marginTop: 280
    },
    btn1: {
        paddingLeft: 70,
        paddingRight:70,
        paddingTop: 115,
        paddingBottom: 115,
        marginLeft: 50,
        marginTop: 50
    },
    txt: {
        fontSize: 24,
        color: '#34495e'
    }
});