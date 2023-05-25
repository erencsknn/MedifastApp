import { View, Text, Image } from "react-native";
import styles from "./styles";
import { Entypo } from "@expo/vector-icons";


function index() {
  

 
  return (
    <View style={styles.headerMain}>
      <View style = {styles.headerOne}>
        <Image style={styles.image} source= {{uri:'https://cdn.getir.com/misc/emoji/house.png'}} />
        <View style = {styles.headerOneView}>
        <Text style = {{fontSize:16, fontWeight : '600', marginLeft : 10}}>Ev</Text>
        <Text style = {{fontSize:11, fontWeight : '500', marginLeft : 7, marginRight : 4}} >Karaman Mahallesi 2.Dilek Sokak... </Text>
        <Entypo name="chevron-thin-right" size={10} color="#752311" />
        
            
        </View>
        <View style = {styles.headerTwo}>
          <Text style = {{fontSize : 10, fontWeight: 'bold',color: 'white'}}>
          TVS
          </Text>
          <Text style = {{fontSize : 15, fontWeight : 'bold', color: 'white'}}>
          15 <Text style = {{fontSize : 11,color: "white", textAlign:'center'}}> dk</Text>
          </Text>
        </View>
      </View>
      <View>

      </View>
    </View>
  );
}

export default index;
