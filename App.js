import  React  from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import { Text ,StyleSheet} from "react-native";
import Login from "./src/Login/Login";
import Signup from "./src/Signup/Signup";
import Explore from "./src/Explore//ExploreHome";
import VideoList from './src/List/VideoList';



//Navigator
const AuthNavigator = createStackNavigator(
    {
        //Path For Screens
        Login: Login,
        Signup: Signup,
    },
    {
        //default options for navigator
        headerMode: 'none',
        defaultNavigationOptions: {
           headerVisible: false
        }
    }
);

//Navigator
const MainNavigator = createStackNavigator(
    {
       
        //Path For Screens
        Explore: {
            screen: Explore,
            headerMode: 'none',
            navigationOptions:{
               header: null     
            }
        },
        List:{
            screen: VideoList,
            navigationOptions: {
                headerTitle: <Text>List</Text>,
                backgroundColor: '#34495e',
                headerStyle: { 
                    backgroundColor: '#3498db',               
                    borderBottomColor: '#3498db',
                    borderBottomWidth: 1,
                  },
                  headerTitleStyle: {
                    fontSize: 24,
                    fontWeight: 700
                  },
             
            }
        },
        Video:{
            
        }

    }
);

const AppContainer = createAppContainer(MainNavigator);


export default class App extends React.Component {
    render(){
        return(
           <AppContainer />
        );
    }
}

const styles = StyleSheet.create({
    head: {
        justifyContent: 'center',
        fontSize: 23
    },
});

