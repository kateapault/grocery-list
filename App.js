import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, ScrollList, FlatList } from 'react-native';

import Header from './components/Header'
import Input from './components/Input'
// import List from './components/List'
import Product from './components/Product'

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
        id: idCount,
        crossOff: false,
      }
    ])
    setIDCount(idCount + 1)
    
    console.log('add things button pushed')
    console.log(productsList)
    console.log(idCount)
  }

  const handleCrossOff = productID => {
    setProductsList(currentProducts => {
      return currentProducts.map(product => 
        product.id === productID 
        ? {
          id: product.id,
          name: product.name,
          cross: !product.cross,
          }
        : product
        )
    })
    console.log(`cross/uncross button pushed on id:${productID}`)
    console.log(productsList)
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
        style={styles.list}
        keyExtractor={(item,index) => item.id}
        data={productsList}
        renderItem={ itemData => 
          <Product 
            id={itemData.item.id}
            cross={itemData.item.cross}
            name={itemData.item.name} 
            handleCrossOff={handleCrossOff}
          />
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
  list:{
    width: '60%',
  },
});
