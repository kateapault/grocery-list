import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import { render } from 'react-dom';

import Constants from '../Constants'

const Header = props => {
    return(
        <View style={styles.headerView}>
            <Text style={styles.headerText}>grocery list</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    headerView: {
        flex: Constants.proportionA,
        width: '100%',
        height: '15%',
        // backgroundColor: 'green',
        justifyContent: 'flex-end',
        // alignSelf: 'flex-start'
    },
    headerText: {
        fontSize: 18,
        fontWeight: "bold",
        color: 'white',
        textAlign: "center",
        marginBottom: '6%',
    },
});

export default Header