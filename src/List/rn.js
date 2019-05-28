import React, { Component } from "react";
import { Container,Content ,List,ListItem, Thumbnail,Text, Left,Body,Right,Button} from "native-base";
import {TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';


import Header from './Header';
import MyCard from './MyCard';

export default class VideoList extends Component {
   
    render() {
        return (
            <Container>
                {/* <Header Text="JavaScript"/> */}
               
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../img/rn.png')} />
                            </Left>
                            <Body>
                                <Text>Video 1</Text>
                                <Text note numberOfLines={1}>Some more description</Text>
                            </Body>
                            <Right>
                                <TouchableOpacity transparent>
                                    <Icon name="ios-play" size={25}	/>
                                </TouchableOpacity>  
                            </Right>
                            <Right>
                                <Button transparent>
                                    <Icon name="ios-cloud-download" size={25}	/>
                                </Button>  
                            </Right>
                        </ListItem>
                       {/*  */}
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../img/rn.png')} />
                            </Left>
                            <Body>
                                <Text>Video 2</Text>
                                <Text note numberOfLines={1}>Some more description</Text>
                            </Body>
                            <Right>
                                <TouchableOpacity transparent>
                                    <Icon name="ios-play" size={25}	/>
                                </TouchableOpacity>  
                            </Right>
                            <Right>
                                <Button transparent>
                                    <Icon name="ios-cloud-download" size={25}	/>
                                </Button>  
                            </Right>
                        </ListItem>
                        {/*  */}
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={require('../img/rn.png')} />
                            </Left>
                            <Body>
                                <Text>Video 3</Text>
                                <Text note numberOfLines={1}>Some more description</Text>
                            </Body>
                            <Right>
                                <TouchableOpacity transparent>
                                    <Icon name="ios-play" size={25}	/>
                                </TouchableOpacity>  
                            </Right>
                            <Right>
                                <Button transparent>
                                    <Icon name="ios-cloud-download" size={25}	/>
                                </Button>  
                            </Right>
                        </ListItem>
                     </List>  
                </Content>
             </Container>
    
        );
    }
}