import { useNavigation } from '@react-navigation/native'
import React, { useEffect } from 'react'
import { Text,View,TouchableOpacity,Dimensions } from 'react-native'
import { color } from 'react-native-elements/dist/helpers'




const {width,height} = Dimensions.get("window")
function index() {
  const navigation = useNavigation()
  
  
  return (
    <View style = {{flexDirection : 'row',width : "100%",height : "100%"}}>
    <TouchableOpacity style= {{backgroundColor : '#3d0c45',width : width*0.5,height : "100%",alignItems : 'center',justifyContent :'center'}} onPress={()=> navigation.navigate("UserLogIn")}>
      <Text style = {{fontSize : 40, fontWeight : 'bold', color :'white'}}>
        Kullanıcı Girişi
      </Text>

    </TouchableOpacity>
    <TouchableOpacity onPress={() =>{navigation.navigate("AdminScreen")}} style = {{backgroundColor : 'white', width: width*0.5,height : "100%",alignItems : 'center',justifyContent :'center'}}>
      <Text style = {{fontSize : 40, fontWeight : 'bold', color : '#3d0c45'}}>
        Admin Girişi
      </Text>

    </TouchableOpacity>
    </View>
  )
}

export default index