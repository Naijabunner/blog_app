import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

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

const CarouselCard = ({ 
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
   ;
  return (
       <View style={{width:289}}>
          <View style={{ width:289 ,height:176,borderRadius:16, position:'relative', overflow:'hidden'}}>
            {/* <Image style={{width:289 , position:'absolute'}}  source={require('@/assets/images/vrr.png')}/> */}
            <Image style={{width:289 ,height:176, position:'absolute'}}  source={ {uri: 'https://www.clariontech.com/hubfs/MicrosoftTeams-image%20%2813%29-1.png'} }/>
          
          </View>
          <Text style={{fontSize: 18, fontWeight: 'bold', marginVertical: 10, paddingLeft:2}}>
          {title}
          </Text>
          <View className="dateandtime" style={{width:'100%',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
          <Text style={{ fontSize:10, color:'#333333' }}>By: {author}</Text>
          <Text style={{ fontSize:10, color:'#828282', fontWeight:'light' }}>{date}
            <Text> • </Text>
            <Text> {views} views </Text>
          </Text>
          </View>
          </View>
  )
}

export default CarouselCard

const styles = StyleSheet.create({})