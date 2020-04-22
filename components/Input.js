import React from 'react';
import { 
    View, 
    TextInput, 
    Text, 
    Button, 
    StyleSheet 
} from 'react-native'

import Constants from '../Constants'

const Input = props => {
    return(
        <View style={styles.inputView}>
            <TextInput style={styles.inputBox} placeholder="eggs"/>
            <Button title="add"/>
        </View>
    )
};

const styles = StyleSheet.create({
    inputView:{
        width: '100%',
        // flex: Constants.proportionB,
        // backgroundColor: Constants.accentColor,

    },
    inputBox: {
        borderWidth: 2,
        width: '80%',
    }
});

export default Input;