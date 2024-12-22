import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ThemedView } from './ThemedView'
import CustomInput from './CustomInput'
import { HelloWave } from './HelloWave'

const CustomHeader = () => {
  return (
    <ThemedView style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
        marginBottom: 10,
        marginTop: 15,
      }}>
        <CustomInput />
        <HelloWave />
      </ThemedView>
  )
}

export default CustomHeader

const styles = StyleSheet.create({})