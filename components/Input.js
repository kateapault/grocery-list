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
    <View style={{flex:2,}}>

        <TextInput 
          placeholder="toilet paper" 
          onChangeText={props.handleInput}
        />
        <Button 
          title="add" 
          onPress={props.handleAddProducts.bind(this, props.enteredProduct)}  
        />
      </View>
    )
};

const styles = StyleSheet.create({
    inputView:{
        width: '100%',
    },
    inputBox: {
        borderWidth: 2,
        width: '80%',
    }
});

export default Input;