import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

const Thing = props => {
    return(
        <View>
            <Text>{props.item}</Text>
        </View>
    );
};

