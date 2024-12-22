import { useRouter } from 'expo-router'
import React from 'react'
import { Image, View,Text, Dimensions, Pressable } from 'react-native'
import { green } from 'react-native-reanimated/lib/typescript/Colors'
const {width,height} = Dimensions.get('window')

interface CarouselCardProp{
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  details: string;
  author: string;
  views: number;
  date: string;
}


const SmallDisplayCard = ({ 
  id,
  title,
  description,
  imageUrl,
  link,
  details,
  author,
  views,
  date
}:CarouselCardProp) => {
    const router = useRouter()
    const handleNavigation = () => {
        router.push('/blogId')
    }
  return (
    <Pressable style={{ height:79, overflow:'hidden', flexDirection:'row'}} onPress={handleNavigation}> 
        <Image
        source={require('@/assets/images/vrr.png')}
        style={{width:96, height:79, borderRadius:16}}
        width={96}
        height={79}
        />
        <View style={{padding:10, width:width-96}}>
             <View style={{flexDirection:'row', justifyContent:'space-between', width:'82%', alignItems:'center'}}>
            <Category/>
            <DateAndTime/>
           
        </View>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginVertical: 10, paddingLeft:2}}>
        {title}
            </Text> 
        </View>
      
    </Pressable>
  )
}

const Category = () => {
  return (
    <View style={{ backgroundColor:'#F2F2F2' , justifyContent:'center', paddingHorizontal:3}}>
      <Text style={{fontSize: 8,color:'#2C2C2C', fontWeight: 'regular'}}>
      Trending
      </Text>
    </View>
  )
}

const DateAndTime = () => { 
  return (
    <View style={{ }}>
      <Text style={{ fontSize:8, color:'#828282', fontWeight:'regular' }}>Oct 12, 2021
        <Text> • </Text>
        <Text> 3344 views </Text>
      </Text>
    </View>
  )
}
export default SmallDisplayCard