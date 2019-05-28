import  React  from 'react';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import { Text ,StyleSheet} from "react-native";
import Login from "./src/Login/Login";
import Signup from "./src/Signup/Signup";
import Explore from "./src/Explore//ExploreHome";
import VideoList from './src/List/VideoList';
import jList from './src/List/javaList';
import csharpList from './src/List/csharpList';
import mList from './src/List/rn';
import Vid from './src/Video/Video';
import frstScreen from './src/Main/Main';
import Logint from "./src/Teacher//Login";
import Signupt from "./src/Teacher/Signup";
import HomeT from "./src/Teacher//Home";




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
        javaList: {
            screen: jList
        },
        cList: {
            screen: csharpList
        },
        msql: {
            screen: mList
        },
        Video:{
            screen: Vid
        }

    },
    {
       // initialRouteName: Explore
    }
);

const TeachMainNavigator = createStackNavigator(
    {
       
        //Path For Screens
        Home: {
            screen: HomeT,
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
        javaList: {
            screen: jList
        },
        cList: {
            screen: csharpList
        },
        rn: {
            screen: mList
        },
        Video:{
            screen: Vid
        }

    },
    {
       // initialRouteName: Explore
    }
);
//Navigator
const AuthNavigator = createStackNavigator(
    {
        //Path For Screens
        Login: Login,
        Signup: Signup,
        Home: MainNavigator
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
const teachNavigator = createStackNavigator(
    {
        //Path For Screens
        Logint: Logint,
        Signupt: Signupt,
        Home: TeachMainNavigator
    },
    {
        //default options for navigator
        headerMode: 'none',
        defaultNavigationOptions: {
           headerVisible: false
        }
    }
);

const startNav = createStackNavigator(
    {
        frst: frstScreen,
        student: AuthNavigator,
        teacher: teachNavigator
        

   },
    {
        //default options for navigator
        headerMode: 'none',
        defaultNavigationOptions: {
           headerVisible: false
        }
    
    }
);

const AppContainer = createAppContainer(startNav);


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

