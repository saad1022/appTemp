import React, { Component } from 'react';
import { Platform,StatusBar,StyleSheet,Text,TextInput,View,ScrollView,Image,TouchableOpacity,SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import Category from './Category';
import Card from './Card';

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
                             <Icon name="ios-search"size={26} style={{marginTop:10}}   />
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
                                     
                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('List')}>
                                        <Category imageUri={require('../img/java.jpg')} name="Java" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('List')}>
                                        <Category imageUri={require('../img/csharp.jpg')} name="C#" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('List')}>
                                        <Category imageUri={require('../img/jscript.jpg')} name="JavaScript" />
                                    </TouchableOpacity>

                                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('List')}>
                                         <Category imageUri={require('../img/mysql.jpg')} name="MySql" />
                                    </TouchableOpacity>

                                 </ScrollView>
                            </View>     
                        </View>
                     {/* / tags area */} 

                      {/* course area */}
                      <View style={{flex:1,backgroundColor: 'white',paddingTop:15,paddingBottom:20}}>
                            <Text style={{fontSize:24,fontWeight:'700',paddingHorizontal:20}}>
                                Choose a course
                            </Text>
                                 
                            <View style={{ height:300,marginTop:15,marginBottom:10}}>
                                 <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>

                                    <Card logoUri={require('../img/javalogo.jpg')}
                                    head="Java" subhead="Tuitorials for Beginners"
                                    details="Java Fundamentals for Absolute Beginners" />
                                   
                                   <Card logoUri={require('../img/js.png')}
                                    head="JS" subhead="Learn JS in 1 Hour"
                                    details="JavaScript Basics Beginners" />

                                    <Card logoUri={require('../img/rn.png')}
                                    head="React Native" subhead="Intermediate to Advanced"
                                    details="React-Native Basics " />

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
    }
  });