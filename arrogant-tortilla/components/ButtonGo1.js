import React from 'react';

//import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';

export default function ButtonGo1()   {
  return (
    <SafeAreaView style={{flex: 1, flexDirection: 'row',}}>
      
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonGo}
          activeOpacity={0.5}>
          <Image
          source={require('../assets/circle_button.png')} 
       
            style={styles.buttonImageIconStyle}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          <Text style={styles.buttonTextStyle}>
            Куда поедем?
          </Text>
        </TouchableOpacity>
        
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.buttonArrow}
          activeOpacity={0.5}>
          <Image
          source={require('../assets/arrow.png')} 
       
            style={styles.buttonImageIconStyleArrow}
          />
          <View style={styles.buttonIconSeparatorStyle} />
          
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

  buttonGo: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#000',
    borderWidth: 0.5,
    marginTop: 70,
    marginLeft: 28,
    padding: 20,
    height: 54,
    width: 171,
    borderRadius: 330,
    margin: 5,
  },
  buttonArrow: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    color: '#000',
    borderWidth: 0.5,
    marginTop: 70,
    marginLeft: 268,
    height: 54,
    width: 54,
    borderRadius: 300,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 0,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonImageIconStyleArrow: {
    padding: 10,
    margin: 13,
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



