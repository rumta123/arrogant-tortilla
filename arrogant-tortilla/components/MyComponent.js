import * as React from 'react';
import { Modal, Portal, Text, Button, Provider, TouchableRipple } from 'react-native-paper';
import {Image, StyleSheet} from 'react-native'
const MyComponent = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const containerStyle = {backgroundColor: 'white', padding: 20, position:'absolute', zIndex:2, alignSelf: 'stretch'};

  return (
    <Provider  style={styles.buttonProvider}>
      <Portal >
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={containerStyle}>
          <Text>Example Modal.  Click outside this area to dismiss.</Text>
        </Modal>
      </Portal>

      <TouchableRipple 
      style={styles.buttonBurger1} onPress={showModal} 
      rippleColor="rgba(0, 0, 0, .32)"
      >
          <Image  
         source={require('../assets/Vector.png')} 
         style={styles.buttonImageIconStyle}
           
          />
      
          
        </TouchableRipple>
        

    

   
</Provider>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    //верхний отступ
   
   
  },
  
  buttonProvider:{
    flex: 0.1,
   
  },
  buttonBurger1: {
   position:'absolute',
   
  zIndex:100,
   flexDirection: 'row',
   alignItems: 'center',
    backgroundColor: '#fff',
    color: '#000',
    borderWidth: 0.5,
    //верх
 marginTop: 100,
   marginLeft: 28,
   padding: 20,
    height: 54,
   width: 54,
   borderRadius: 330,
  //  margin: 5,
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


export default MyComponent;