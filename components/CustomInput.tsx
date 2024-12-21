import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';

const {width,height} = Dimensions.get('window')
const CustomInput = () => {
  return (
      <View style={{ 
        flex: 1, 
        flexDirection: 'row',
        height: 40,
        backgroundColor:'#F4F4F4',
        borderRadius:16,
        justifyContent:'center',
        alignItems:'center',
        paddingHorizontal:10
        }}>
      <Ionicons name='search' size={18} color='#4F4F4F'/>
      <TextInput 
      placeholder='Search...'
      // width={'100%'}
      style={{flex:1, height: 40, fontSize: 16, marginLeft: 10}}
      />
      
    </View>
  )
}

export default CustomInput

const styles = StyleSheet.create({})