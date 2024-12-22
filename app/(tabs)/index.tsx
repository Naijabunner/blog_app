import { Image, StyleSheet, Platform,ScrollView, SafeAreaView, View,Text, FlatList } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedView } from '@/components/ThemedView';
import CustomInput from '@/components/CustomInput';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import SmallDisplayCard from '@/components/Cards/SmallDisplayCard';
import CarouselCard from '@/components/Cards/CarouselCard';
import CustomHeader from '@/components/Header';
import cardData, { allCategories, recommendedCardData } from '@/data';


export default function HomeScreen() {
  return (
    <ScrollView>
    <SafeAreaView style={{ flex: 1, paddingTop:50,paddingHorizontal:15, height: '100%', backgroundColor: '#fff' }}>
        <StatusBar translucent={false} />
       <CustomHeader/>
        <View >
          <Text style={{ fontSize: 24, fontWeight: 'bold', marginVertical: 15, marginBottom: 14, paddingLeft: 2 }}>
            Recommended
          </Text>

      <FlatList
      data={recommendedCardData}
      contentContainerStyle={{gap: 20, paddingBottom:20}}
      horizontal={true}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(item)=>( <CarouselCard {...item.item}/>)}
      />


{/* line */}
      <View style={{ width:'90%', height:2, backgroundColor:'#E0E0E0', marginVertical:5 , paddingHorizontal:1}}/>
      <FlatList
      data={allCategories}
      contentContainerStyle={{
        marginVertical: 10,
        marginTop:15,
        gap: 10,
       }}
       showsHorizontalScrollIndicator={false}
      horizontal={true}
      keyExtractor={(item) => item.toString()}
      renderItem={(item)=>(  <View style={{ backgroundColor:item.item.toLowerCase() ==='all'?'black':'' ,flex:1, borderColor:'#BDBDBD' ,borderRadius:6, borderWidth:1,height:31, justifyContent:'center', paddingHorizontal:5}}>
        <Text style={{fontSize: 14,color:'#828282', fontWeight: 'regular'}}>
        {item.item}
        </Text>
        </View>)}
      />

     <FlatList
      data={cardData}
      contentContainerStyle={{gap: 15, marginVertical:15}}
      keyExtractor={(item) => item.id.toString()}
      renderItem={(item)=>( <SmallDisplayCard {...item.item}/>)}
      />
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
