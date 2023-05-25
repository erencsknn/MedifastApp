import { useNavigation } from '@react-navigation/native'
import React,{useEffect,useState} from 'react'
import { View,Text,TouchableOpacity} from 'react-native'
import { Avatar, Subheading, Title } from 'react-native-paper'
import firebase from 'firebase/compat'


function index() {
  const [name,setName] = useState("")
  const [mail,setMail] = useState("")
  const navigation = useNavigation()
  useEffect(()=>{
    firebase.auth().onAuthStateChanged(user=>{
      setName(user?.displayName ?? '')
      setMail(user?.email ?? '')
      
    })
  },[])
  return (
   <View style={{flex:1,alignItems : 'center'}}>  
   <View style = {{alignItems : 'center',marginTop : 80}}>
    <Avatar.Text label={name.split(" ").reduce((prev,current)=>prev + current[0],"")}>
    </Avatar.Text>
    <Title>{name}</Title>
    <Subheading>{mail}</Subheading>
    <TouchableOpacity onPress={()=>firebase.auth().signOut()} >
      <Text>Sign Out</Text>
    </TouchableOpacity>
    </View>

   </View>
  )
}

export default index