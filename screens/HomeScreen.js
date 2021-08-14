import React, { useState } from 'react';
import { Center, Select, VStack, CheckIcon,Input,Button } from 'native-base';
import { View,Text,StyleSheet } from 'react-native';




const HomeScreen = () => {

  const [type,setType] = useState('');

  return(
    <View>
      <Center>
        <Text style={styles.typeStyle}>Choose Type</Text>
        <VStack alignItems="center" space={4}>
      <Select
        selectedValue={type}
        minWidth={500}
        accessibilityLabel="Select Type"
        placeholderTextColor='gray'
        placeholder="Select One"
        onValueChange={(itemValue) => setType(itemValue)}
        _selectedItem={{
          bg: "cyan.600",
          fontSize:20,
          endIcon: <CheckIcon size={4} />,
        }}
      >
        <Select.Item label="Sun" value="sun" />
        <Select.Item label="Moon" value="moon" />
        <Select.Item label="Mangal" value="mangal" />
        <Select.Item label="Rahu" value="rahu" />
        <Select.Item label="Guru" value="guru" />
        <Select.Item label="Sani" value="sani" />
        <Select.Item label="Buda" value="buda" />
        <Select.Item label="Ketu" value="ketu" />
        <Select.Item label="Sukra" value="sukra" />

      </Select>
    </VStack>
    <View style={styles.inputWrapper}>
    <Input
      w="100%"
      mx={3}
      placeholder="Enter Day"
      _light={{
        placeholderTextColor: "gray",
      }}
      _dark={{
        placeholderTextColor: "gray",
      }}
    />
       <Input
      w="100%"
      mx={3}
      placeholder="Enter Month"
      _light={{
        placeholderTextColor: "gray",
      }}
      _dark={{
        placeholderTextColor: "gray",
      }}
    />
       <Input
      w="100%"
      mx={3}
      placeholder="Enter Year"
      _light={{
        placeholderTextColor: "gray",
      }}
      _dark={{
        placeholderTextColor: "gray",
      }}
    />
    </View>
    <View style={styles.calculateMe}>
      <Button>
        CALCULATE
      </Button>
    </View>
  </Center>
    </View>
  )
}

const styles = StyleSheet.create({
  typeStyle:{
    fontSize:28,
    marginVertical:50
  },
  selectItem:{
    fontSize:19
  },
  inputWrapper:{
    display:'flex',
    flexDirection:'row',
    marginTop:50
  },
  calculateMe:{
    marginTop:60
  }
})

export default HomeScreen;