import React, { useCallback, useState } from 'react'
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Alert, } from 'react-native'
import firebase from 'firebase/compat/app'
import { Subheading} from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'



const index = () => {
  
const navigation = useNavigation()

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [adress,setAdress] = useState("")
  const [isloading, setIsLoading] = useState(false)
  const [error,setError] = useState("")



const createAccount = async () =>{
  setIsLoading(true)
 try{
  const response = await firebase
  .auth()
  .createUserWithEmailAndPassword(email,password)
   await response.user?.updateProfile({displayName : name,})
   
   alert("Başarıyla Kayıt Olundu.")
   navigation.goBack()
   
 }
 catch(e){
  setIsLoading(false)
 
  alert(e.message)
 }
}


  return (
    <View style={styles.container}>
     
      <View style={styles.inputContainer}>
      
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/user-male-circle.png' }}
        />
        <TextInput
          
          value={name} 
          onChangeText={(text) => setName(text)}
          style={styles.inputs}
          placeholder=" Name"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          
        />
      </View>

      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-filled/512/circled-envelope.png' }}
        />
        <TextInput
        value={email} 
        onChangeText={(text) => setEmail(text)}
          style={styles.inputs}
          placeholder="Email"
          keyboardType="email-address"
          underlineColorAndroid="transparent"
          
        />
      </View>
      <View style={styles.inputContainer}>
        <Image
          style={styles.inputIcon}
          source={{ uri: 'https://img.icons8.com/ios-glyphs/512/key.png' }}
        />
        <TextInput
        value={password} 
        onChangeText={(text) => setPassword(text)}
          style={styles.inputs}
          placeholder="Password"
          secureTextEntry={true}
          underlineColorAndroid="transparent"
        
        />
        
      </View>
  
      <TouchableOpacity onPress={()=>createAccount()} 
      
        style={[styles.buttonContainer, styles.signupButton]}
        //loading = {isloading}
        
        >
        <Text style={styles.signUpText} >Sign Up</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={()=>navigation.navigate("UserLogIn")}
        style={[styles.buttonContainer, styles.signupButton]}
        >
        <Text style={styles.signUpText}>Sign In</Text>
      </TouchableOpacity>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3d0c45',
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 250,
    height: 45,
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginLeft: 15,
    justifyContent: 'center',
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
  },
  signupButton: {
    backgroundColor: 'white',
  },
  signUpText: {
    color: 'black',
  },
})

export default index