import React, { Component } from 'react';
import { Platform,StatusBar,StyleSheet,TextInput,View,ScrollView,Image,TouchableOpacity,SafeAreaView } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import IoniIcon from 'react-native-vector-icons/Ionicons';

import Category from './Category';
//import Card from './Card';

class Explore extends Component {
    
    componentWillMount(){
        this.startHeaderHeight = 80
        if(Platform.OS  ==  'android'){
            // Separte Header From Top
            this.startHeaderHeight = 70 + StatusBar.currentHeight    
        }
    }
    
    render(){
        return(
            //SafeAreaView to show borders in iphone
            <SafeAreaView  style={{  flex: 1 }}>
                {/* Main Container */}
                <View style={{  flex: 1 }}>
                    {/* header */}
                    <View style={{height: this.startHeaderHeight, backgroundColor: 'white',
                     borderBottomWidth: 1, borderBottomColor: '#dddddd'}}>
                        <View style={{flexDirection: 'row', padding: 10, 
                                backgroundColor: 'white', marginHorizontal: 20,
                                shadowOffset:{width: 0, height: 0},
                                shadowColor: 'black',
                                shadowOpacity: 0.2,
                                elevation: 1,
                                marginTop: Platform.OS  ==  'android' ? 15 : null   
                                 }}>
                             <IoniIcon name="ios-search"size={26} style={{marginTop:10}}   />
                            <TextInput
                                underlineColorAndroid = "transparent"
                                placeholder = "Search"
                                placeholderTextColor = "grey"
                                style={{flex: 1, fontWeight: '700', backgroundColor: 'white',marginLeft: 10}}
                            />                           
                        </View>
                    </View>
                    {/* / header */}
                    
                    {/* body */}
                    <ScrollView
                        // to send response as fast as Possible
                        scrollEventThrottle={16}
                    >
                    {/* tags area */}
                        <View style={{flex:1,backgroundColor: 'white',paddingTop:20}}>
                            <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                                Popular Tags 
                            </Text>
                                 
                            <View style={{height:130,marginTop:20}}>
                                 {/* to scroll components horizontally */}
                                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                     
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('javaList')}>
                                        <Category imageUri={require('../img/java.jpg')} name="Java" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('cList')}>
                                        <Category imageUri={require('../img/csharp.jpg')} name="C#" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('List')}>
                                        <Category imageUri={require('../img/jscript.jpg')} name="JavaScript" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('msql')}>
                                         <Category imageUri={require('../img/mysql.jpg')} name="MySql" />
                                    </TouchableOpacity>

                                 </ScrollView>
                            </View>     
                        </View>
                     {/* / tags area */} 

                      {/* course area */}
                      <View style={{flex:1,backgroundColor: 'white',paddingTop:15,paddingBottom:20}}>
                            <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                                Choose Course
                            </Text>
                                 
                            <View style={{ height:300,marginTop:15,marginBottom:10}}>
                                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                 
                             <TouchableOpacity onPress = { () => this.props.navigation.navigate('javaList') }>
                                 <Container style={styles.course}>
                                      <Content>
                                            <Card style={{flex: 1}}>
                                                <CardItem>
                                                <Left>
                                                    <Thumbnail source = {require('../img/javalogo.jpg')} />
                                                    <Body>
                                                    <Text style={styles.head}>Java</Text>
                                                    <Text note style={styles.title}>Tuitorials for Beginners</Text>
                                                    </Body>
                                                </Left>
                                                </CardItem>

                                                <CardItem>
                                                <Body>
                                                    <Text>
                                                    Java Fundamentals for Absolute Beginners
                                                    </Text>
                                                </Body>
                                                </CardItem>

                                                <CardItem>
                                                <Left>
                                                    <Button transparent textStyle={{color: '#87838B'}}>
                                                    <Icon name="logo-github" />
                                                    <Text>1,500 stars</Text>
                                                    </Button>
                                                </Left>
                                                </CardItem>
                                            </Card>
                                        </Content>
                                      
                                    </Container>
                                    </TouchableOpacity>

                                    {/* <Card logoUri={require('../img/javalogo.jpg')}
                                    head="Java" subhead="Tuitorials for Beginners"
                                    details="Java Fundamentals for Absolute Beginners" /> */}
                                <TouchableOpacity onPress = { () => this.props.navigation.navigate('List') }>
                                 <Container style={styles.course}>                                   
                                    <Content>
                                            <Card style={{flex: 1}}>
                                                <CardItem>
                                                <Left>
                                                    <Thumbnail source = {require('../img/js.png')} />
                                                    <Body>
                                                    <Text style={styles.head}>JS</Text>
                                                    <Text note style={styles.title}>Learn JS in 1 Hour</Text>
                                                    </Body>
                                                </Left>
                                                </CardItem>

                                                <CardItem>
                                                <Body>
                                                    <Text>
                                                    JavaScript Basics Beginners by Faizan Ali
                                                    </Text>
                                                </Body>
                                                </CardItem>

                                                <CardItem>
                                                <Left>
                                                    <Button transparent textStyle={{color: '#87838B'}}>
                                                    <Icon name="logo-github" />
                                                    <Text>3,926 stars</Text>
                                                    </Button>
                                                </Left>
                                                </CardItem>
                                            </Card>
                                        </Content>

                                    </Container>
                                    </TouchableOpacity>
                                   
                                   {/* <Card logoUri={require('../img/js.png')}
                                    head="JS" subhead="Learn JS in 1 Hour"
                                    details="JavaScript Basics Beginners" />

                                    
                                    <Card logoUri={require('../img/rn.png')}
                                    head="React Native" subhead="Intermediate to Advanced"
                                    details="React-Native Basics " /> */}
                              <TouchableOpacity onPress = { () => this.props.navigation.navigate('rn') }>
                                <Container style={styles.course}>
                                    <Content>
                                            <Card style={{flex: 1}}>
                                                <CardItem>
                                                <Left>
                                                    <Thumbnail source = {require('../img/rn.png')} />
                                                    <Body>
                                                    <Text style={styles.head}>React Native</Text>
                                                    <Text note style={styles.title}>Intermediate to Advanced</Text>
                                                    </Body>
                                                </Left>
                                                </CardItem>

                                                <CardItem>
                                                <Body>
                                                    <Text>
                                                    React-Native Basics with examples version : 16.8.3
                                                    </Text>
                                                </Body>
                                                </CardItem>

                                                <CardItem>
                                                <Left>
                                                    <Button transparent textStyle={{color: '#87838B'}}>
                                                    <Icon name="logo-github" />
                                                    <Text>406 stars</Text>
                                                    </Button>
                                                </Left>
                                                </CardItem>
                                            </Card>
                                        </Content>
                                    </Container>
                                    </TouchableOpacity>


                                 </ScrollView>
                            </View>     
                        </View>
                     {/* / course area */} 
                    </ScrollView>                
                    {/* / body */}
                </View>
                 {/* / Main Container */}
             </SafeAreaView>
        );
    }
}

export default Explore;

const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }, 
    img: {
        flex:1,
        //justifyContent: 'center',
       // alignItems: 'center',
        width: null,
        height: null,
        resizeMode: 'stretch',
        borderWidth:0
    },
    course:{
        borderRadius: 9,
        borderWidth: 3,
        borderColor: '#e74c3c',
        height:300,
        width:200,
        marginLeft:20,
        overflow: 'hidden'
    },
    txt: {
        textAlign: 'center',
        color: '#2c3e50',
        fontWeight: '700',
        fontSize:15
    },
    title:{
        width:100,
        textAlign: 'left',
    },
    head:{
        width:100
    }

  });