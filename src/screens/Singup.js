import  React  from 'react';
import {Text , View , Button , ScrollView , StyleSheet} from 'react-native';



export default class DetailsScreen extends React.Component {
    render(){
        return(
            <View style={styles.container}>
            <Text>Details</Text>
            <Button
                title="Go to Details..again"
                //push--go to req path again if already there
                onPress={()=> this.props.navigation.push('Details')}
            />
            <Button
                title="Go to Home"
                //navigate--go to req path mentioned
                onPress={()=> this.props.navigation.navigate('Home')}
            />
            <Button
                title="Go Back"
                onPress={()=> this.props.navigation.goBack()}
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

