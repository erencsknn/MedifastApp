import React, { useState } from "react";
import { View, Text,Dimensions } from "react-native";
import { Entypo } from '@expo/vector-icons';

type DetailPropertyProps = {
  yanetki: string,
  icindekiler: string,
  ss1 : string
};
const {width,height} = Dimensions.get('window')
function index({ icindekiler, yanetki,ss1 }: DetailPropertyProps) {
  return (
    <View style = {{width:'100%',backgroundColor:'white'}}>
    <View style = {{flexDirection:'row',alignItems:'center',justifyContent: 'space-between',paddingVertical:3,borderBottomWidth:0.4,borderBottomColor:'lightgray'}}>
    <Text style = {{fontSize:12,paddingHorizontal:8,color:'#687482'}}>
    {icindekiler}
    </Text>
    <Entypo  name="chevron-down" size={24} color="#687482"  />
    </View>
    <View style = {{flexDirection:'row',alignItems:'center',justifyContent: 'space-between',paddingVertical:3,borderBottomWidth:0.4,borderBottomColor:'lightgray'}}>
    <Text style = {{fontSize:12,paddingHorizontal:8,color:'#687482'}}>
     {ss1}
    </Text>
    <Entypo name="chevron-down" size={24} color="#687482" />
    </View>  
    <View style = {{flexDirection:'row',alignItems:'center',justifyContent: 'space-between',paddingVertical:3,borderBottomWidth:0.4,borderBottomColor:'lightgray'}}>
    <Text style = {{fontSize:12,paddingHorizontal:8,color:'#687482'}}>
    {yanetki} 
    </Text>
    <Entypo name="chevron-down" size={24} color="#687482"  />
    </View>
</View>
  );
}

export default index;
