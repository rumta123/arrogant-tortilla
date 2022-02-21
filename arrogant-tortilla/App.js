import * as React from 'react';

import { Text, View, StyleSheet, Button, SafeAreaView, Dimensions } from 'react-native';

import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import MapExample from './components/MapExample';
import ButtonGo1 from './components/ButtonGo1';
import BurgerButton1 from './components/BurgerButton1';
import MyComponent from './components/MyComponent';
import ModalButton from './components/ModalButton'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (

    <View style={{ flex: 1}}>

<ModalButton/>    
  <MapExample />
  
      {/*   <MyComponent/>   */}

     
     
<View>
<BurgerButton1 />
</View>

      <View
        style={{ position: 'absolute', top: '80%', }}
      >

  
   {/*      <BurgerButton1 style={{

position: 'absolute',//use absolute position to show button on top of the map
top: '10%', //for center align
alignSelf: 'stretch',
//for align to right


}}  />  */}
   <ButtonGo1 style={{

position: 'absolute',//use absolute position to show button on top of the map
top: '20%', //for center align
alignSelf: 'stretch',
//for align to right


}} />
      </View>

   

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
