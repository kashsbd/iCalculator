import React from 'react';
import { View, Text, StyleSheet } from 'react-native';



const AboutScreen = () => {
  return(
    <View style={styles.container}>
      <Text style={styles.calculator}>
        iCalculator
      </Text>
      <Text style={styles.version_size}>
      Version 1.0
      </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    flex:1,
    height:'100%',
    backgroundColor:'#fff',
    alignItems:'center',
    justifyContent:'center'
    
  },
  version_size:{
    fontSize:20,
    color:'#694fad'
  },
  calculator:{
    fontSize:20,
    marginBottom:10,
    color:'#694fad'
  }
})

export default AboutScreen;