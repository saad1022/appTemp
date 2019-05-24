import React, { Component } from 'react';
import { Text,View,Image } from 'react-native';

class Category extends Component {
    render(){
        return(
            <View style={{height:130,width:130,marginLeft:20,borderWidth: 3,borderColor: '#3498db',borderRadius: 9}}>
                <View style={{flex:2}}>
                    <Image 
                    /* instead of passing hardcoded path  --> source = {require('../images/java.jpg')}
                       use props */
                    source = {this.props.imageUri}
                    style={{flex:1,width: null, height:null,resizeMode:'cover',marginTop:5}}
                    />
                </View>
                <View style={{flex:1,paddingLeft:10,paddingTop:10}}>
                    <Text>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}

export default Category;