import React from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default function BurgerButton1()   {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'row',}}>
      
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonBurger}
          activeOpacity={0.5}  onPress={() => alert('Hello, world!')} >
          <Image
         source={require('../assets/Vector.png')} 
       
            style={styles.buttonImageIconStyle}
          />
      
          
        </TouchableOpacity>
        
      </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    //верхний отступ
   
   
  },

  buttonBurger: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#000',
    borderWidth: 0.5,
    //верх
    marginTop: -780,
    marginLeft: 28,
    padding: 20,
    height: 54,
    width: 54,
    borderRadius: 330,
    margin: 5,
  },
  
  buttonImageIconStyle: {
    padding: 10,
    //margin: 10,
    marginLeft:-5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
    
  },

  buttonTextStyle: {
    color: '#000',
    marginBottom: 4,
    marginLeft: 10,
  },

});



