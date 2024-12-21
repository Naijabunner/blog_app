import { Image, StyleSheet, Platform,ScrollView, SafeAreaView, View,Text } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import { ThemedView } from '@/components/ThemedView';
import CustomInput from '@/components/CustomInput';
import { Ionicons } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import SmallDisplayCard from '@/components/Cards/SmallDisplayCard';


export default function HomeScreen() {
  return (
    <ScrollView>
    <SafeAreaView style={{ flex: 1, paddingTop:50,paddingHorizontal:15, height: '100%', backgroundColor: '#fff' }}>
      <StatusBar translucent={false}/>
      <ThemedView style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,  
        marginBottom: 10,     
      }}>
      <CustomInput/>
        <HelloWave />
      </ThemedView>
      <View >
      <Text style={{fontSize: 24, fontWeight: 'bold', marginVertical: 10, marginBottom: 14, paddingLeft:2}}>
      Recommended
      </Text>
      <ScrollView
      horizontal={true}
      contentContainerStyle={{gap: 20, paddingBottom:20}}
      showsHorizontalScrollIndicator={false}   
      >
      <View style={{width:289}}>
        <View style={{ width:289 ,height:176,borderRadius:16, position:'relative', overflow:'hidden'}}>
          {/* <Image style={{width:289 , position:'absolute'}}  source={require('@/assets/images/vrr.png')}/> */}
          <Image style={{width:289 ,height:176, position:'absolute'}}  source={ {uri: 'https://www.clariontech.com/hubfs/MicrosoftTeams-image%20%2813%29-1.png'} }/>
        
        </View>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginVertical: 10, paddingLeft:2}}>
        New VR Headsets That Will Shape the Metaverse
        </Text>
        <View className="dateandtime" style={{width:'100%',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{ fontSize:10, color:'#333333' }}>By: Mason Eduard</Text>
        <Text style={{ fontSize:10, color:'#828282', fontWeight:'light' }}>Oct 12, 2021
          <Text> • </Text>
          <Text> 3344 views </Text>
        </Text>
        </View>
        </View>
      <View style={{width:289}}>
        <View style={{ width:289 ,height:176,borderRadius:16, position:'relative', overflow:'hidden'}}>
          <Image style={{width:289 , position:'absolute'}}  source={require('@/assets/images/vrr.png')}/>
        </View>
        <Text style={{fontSize: 16, fontWeight: 'bold', marginVertical: 10, paddingLeft:2}}>
        New VR Headsets That Will Shape the Metaverse
        </Text>
        <View className="dateandtime" style={{width:'100%',flexDirection:'row', alignItems:'center',justifyContent:'space-between'}}>
        <Text style={{ fontSize:10, color:'#333333' }}>By: Mason Eduard</Text>
        <Text style={{ fontSize:10, color:'#828282', fontWeight:'light' }}>Oct 12, 2021
          <Text> • </Text>
          <Text> 3344 views </Text>
        </Text>
        </View>
        </View>
      </ScrollView>
      <View style={{ width:'90%', height:2, backgroundColor:'#E0E0E0'}}/>
     
     <ScrollView contentContainerStyle={{
      marginVertical: 10,
      marginTop:15,
      gap: 10,
     }}
     horizontal={true}
     >
      <View style={{flex:1, borderColor:'#BDBDBD' ,borderRadius:6, borderWidth:1,height:31, justifyContent:'center', paddingHorizontal:5}}>
      <Text style={{fontSize: 14,color:'#828282', fontWeight: 'regular'}}>
      Trending
      </Text>
      </View>
     
     </ScrollView>
     <View style={{gap: 15, marginVertical:15}}>
     <SmallDisplayCard/>
     <SmallDisplayCard/>
     <SmallDisplayCard/>
     <SmallDisplayCard/>
     <SmallDisplayCard/>
     </View>
      </View>
    </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
});
