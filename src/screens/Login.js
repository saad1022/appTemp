import  React  from 'react';
import {Text , View , Button , ScrollView , StyleSheet} from 'react-native';



export default class Home extends React.Component {
    //custom styling for screens in their classes
    static navigationOptions = {
        headerStyle: {
            backgroundColor: 'blue'
        }
    }
    render(){
        return(
            <View style={styles.container}>
                <Text>Home</Text>
                <Button
                title="Go to Details"
                onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    }
});