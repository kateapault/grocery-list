import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Product = props => {
    return(
        <TouchableOpacity 
            style={styles.productView}
            onPress={props.handleCrossOff.bind(this, props.id)}
        >
            <View >
                <Text 
                    style={props.cross ? 
                    styles.crossedText
                    : styles.plainText
                }>
                    {props.name}
                </Text>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    productView:{
        width: '100%',
        backgroundColor:'green',
        borderWidth:1,
        margin: 3,
    },
    plainText:{
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
    },
    crossedText: {
        fontSize: 18,
        color: 'white',
        textAlign: 'center',
        textDecorationLine: 'line-through', 
        textDecorationStyle: 'solid',
        backgroundColor: 'grey',
    },
});

export default Product;