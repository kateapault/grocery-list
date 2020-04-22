import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollList } from 'react-native';

import Header from './components/Header'
import Input from './components/Input'
// import List from './components/List'

export default function App() {
  const [thingsList, setThingsList] = useState([]);
  const [enteredThing, setEnteredThing] = useState('');
  const [idCount, setIDCount] = useState(1);

  const handleInput = newText => {
    setEnteredThing(newText)
    // console.log(enteredThing)
  }

  const handleAddThings = newThing => {
    console.log('add things button pushed')
    setThingsList([...thingsList, newThing])
    console.log(thingsList)
  }

  return (
    <View style={styles.container}>
      <Text>Grocery List</Text>
      <TextInput 
        placeholder="toilet paper" 
        onChangeText={handleInput}
      />
      <Button 
        title="add" 
        onPress={handleAddThings.bind(this, enteredThing)}  
      />
      {/* {thingsList.map(thing => {
        <Text>{thing}</Text>
      })} */}
      {/* <Text>{enteredThing}</Text> */}
      {thingsList.map(thing=><View><Text>{thing}</Text></View>)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
