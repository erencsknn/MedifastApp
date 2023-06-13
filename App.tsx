import { LogBox, StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import "react-native-gesture-handler";
import store from "../fastEcza/src/Redux/store";
import { Provider } from "react-redux";
import { AppRegistry } from 'react-native';
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
import { initializeApp } from "firebase/app"





const firebaseConfig = {
  apiKey: "AIzaSyAo8igkInk-mRdzAwmMKtzyWOdfpFAXr1A",
  authDomain: "medifast-d2c80.firebaseapp.com",
  projectId: "medifast-d2c80",
  storageBucket: "medifast-d2c80.appspot.com",
  messagingSenderId: "162150588643",
  appId: "1:162150588643:web:a4d3aefbe7664926bb65d6",
  measurementId: "G-NDRM7ZGXYZ"
};
firebase.initializeApp(firebaseConfig)















LogBox.ignoreAllLogs();

export default function App() {
  return (
   
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}
AppRegistry.registerComponent('myApp', () => App); 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
