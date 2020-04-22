import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollList, FlatList } from 'react-native';

import Header from './components/Header'
import Input from './components/Input'
// import List from './components/List'

export default function App() {
  const [productsList, setProductsList] = useState([]);
  const [enteredProduct, setEnteredProduct] = useState('');
  const [idCount, setIDCount] = useState(1);

  const handleInput = newText => {
    setEnteredProduct(newText)

    // console.log(enteredThing)
  }

  const handleAddProducts = newProduct => {

    setProductsList(allTheProducts => [
      ...allTheProducts, 
      { name: newProduct, 
        id: idCount
      }
    ])
    setIDCount(idCount + 1)
    
    console.log('add things button pushed')
    console.log(productsList)
    console.log(idCount)
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
        onPress={handleAddProducts.bind(this, enteredProduct)}  
      />
      {/* {productsList.map(product=><View><Text>{product.name}</Text></View>)} */}
      <FlatList 
        keyExtractor={(item,index) => item.id}
        data={productsList}
        renderItem={ itemData => 
          <View>
            <Text>{itemData.item.name}</Text>
          </View>
        }
      />
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
