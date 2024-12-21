import { StyleSheet, Text, View, Image, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import CustomInput from '@/components/CustomInput'
import { HelloWave } from '@/components/HelloWave'
import { ThemedView } from '@/components/ThemedView'

const BlogId = () => {

  return (
    <View style={{ flex:1, padding: 15, paddingTop: 50, }} >

      <SafeAreaView style={{ flex: 1 }}>
        <ThemedView style={{
          flexDirection: 'row',
          alignItems: 'center',
          gap: 8,
          marginBottom: 10,
        }}>
          <CustomInput />
          <HelloWave />
        </ThemedView>
        <View style={{ width: 335, height: 204, borderRadius: 16, position: 'relative', overflow: 'hidden' }}>
          {/* <Image style={{width:335 , position:'absolute'}}  source={require('@/assets/images/vrr.png')}/> */}
          <Image style={{ width: 335, height: 204, position: 'absolute' }} source={{ uri: 'https://img.freepik.com/premium-photo/cat-sea-sunglasses-generative-ai_74760-621.jpg' }} />

        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', alignItems: 'center', marginVertical: 10, paddingHorizontal: 10 }}>
          <Category />
          <DateAndTime />

        </View>
        <ScrollView style={{ flex: 1 }}>
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 10, paddingLeft: 2 }}>
            New VR Headsets That Will Shape the Metaverse
          </Text>
          <Text style={{ fontSize: 10, color: '#828282', fontWeight: 'regular' }}>
            By: Mason Eduard</Text>

          <Text className="mainContent" style={{ fontSize: 16, fontWeight: 'regular', lineHeight: 24, color: '#333333', marginVertical: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet turpis. Facilisis faucibus semper cras purus.
          </Text>
          <Text className="mainContent" style={{ fontSize: 16, fontWeight: 'regular', lineHeight: 24, color: '#333333', marginVertical: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta.
          </Text>
          <Text className="mainContent" style={{ fontSize: 16, fontWeight: 'regular', lineHeight: 24, color: '#333333', marginVertical: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet turpis. Facilisis faucibus semper cras purus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet turpis. Facilisis faucibus semper cras purus.
          </Text>
          <Text className="mainContent" style={{ fontSize: 16, fontWeight: 'regular', lineHeight: 24, color: '#333333', marginVertical: 10 }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet turpis. Facilisis faucibus semper cras purus.
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas id sit eu tellus sed cursus eleifend id porta. Lorem adipiscing mus vestibulum consequat porta eu ultrices feugiat. Et, faucibus ut amet turpis. Facilisis faucibus semper cras purus.
          </Text>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

const Category = () => {
  return (
    <View style={{ backgroundColor: '#e7e5e5', justifyContent: 'center', padding: 3 }}>
      <Text style={{ fontSize: 12, color: '#2C2C2C', fontWeight: 'regular' }}>
        Trending
      </Text>
    </View>
  )
}

const DateAndTime = () => {
  return (
    <View style={{}}>
      <Text style={{ fontSize: 12, color: '#828282', fontWeight: 'regular' }}>Oct 12, 2021
        <Text> • </Text>
        <Text> 3344 views </Text>
      </Text>
    </View>
  )
}

export default BlogId

const styles = StyleSheet.create({})