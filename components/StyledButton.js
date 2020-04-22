import React from 'react';
import { View, Button, StyleSheet } from 'react-native'

const StyledButton = props => {
    return(
        <View style={{...styles.buttonView, ...props.style}}>
            <Button />
        </View>
    )
};

const styles = StyleSheet.create({
    
});

export default StyledButton;