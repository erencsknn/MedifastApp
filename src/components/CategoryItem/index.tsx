import React from 'react'
import { TouchableOpacity,Image,Text, View,Dimensions } from 'react-native'
import { Category } from '../../models';
import { useNavigation } from "@react-navigation/native";


const {width,height} = Dimensions.get('window');


function index() {
  const navigation = useNavigation()



  return (
    <View style = {{flexDirection : 'column'}}>
      <View style = {{flexDirection : 'row'}}>
   <TouchableOpacity 
    onPress={() => navigation.navigate("CategoryDetailsFirsatUrünleri" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://www.celebikozmetik.com/wp-content/uploads/2022/05/buyukfirsaturunu2.png "}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> Fırsat Ürünleri</Text>
    
    
   </TouchableOpacity>
   <TouchableOpacity 
   onPress={() => navigation.navigate("CategoryDetailsCokSatan" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://e7.pngegg.com/pngimages/941/559/png-clipart-megaphone-megaphone-thumbnail.png "}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> Çok Satanlar </Text>
    
    
   </TouchableOpacity>
   <TouchableOpacity 
   onPress={() => navigation.navigate("CategoryDetailsMedikal" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://doktorclub.com/haberimages/10045healthcaretechnology.jpg "}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> Medikal Ürünler</Text>
    
    
   </TouchableOpacity>
   <TouchableOpacity 
   onPress={() => navigation.navigate("CategoryDetailsIlaclar" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://www.cumhuriyet.com.tr/Archive/2021/10/16/1877247/kapak_163311.jpg "}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> İlaçlar</Text>
    
    
   </TouchableOpacity>
   <TouchableOpacity 
   onPress={() => navigation.navigate("CategoryDetails" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://c1.alamy.com/thumbs/2f6g9pm/sunscreen-tube-orange-yellow-and-green-vector-icon-flat-design-cartoon-style-colorful-tube-of-sunscreen-sun-protection-factor-spf-sun-cream-with-uv-protectionvector-illustration-isolated-on-white-background-2f6g9pm.jpg"}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> Güneş Bakımı</Text>
    
    
   </TouchableOpacity>
   </View>
   <View style = {{flexDirection : 'row'}}>
   <TouchableOpacity 
   onPress={() => navigation.navigate("CategoryDetails" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://img2.freepng.es/20180304/ayq/kisspng-food-pyramid-healthy-eating-pyramid-clip-art-vegetables-and-bread-5a9c44a02b2042.2727686015201906241767.jpg "}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> Besin Takviyesi</Text>
    
    
   </TouchableOpacity>
   <TouchableOpacity 
   onPress={() => navigation.navigate("CategoryDetails" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://parktipmerkezi.com/wp-content/uploads/2020/04/bagisiklik-sistemi-ve-saglikli-beslenme.jpg "}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> Bağışıklık Güçlendirici</Text>
    
    
   </TouchableOpacity>
   <TouchableOpacity 
   onPress={() => navigation.navigate("CategoryDetails" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://previews.123rf.com/images/seamartini/seamartini1711/seamartini171100457/90587421-píldoras-de-vitamina-vector-cartel-cápsula-3d.jpg "}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> Vitamin ve Mineral</Text>
    
    
   </TouchableOpacity>
   <TouchableOpacity 
   onPress={() => navigation.navigate("CategoryDetails" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://kadinveyasam.net/wp-content/uploads/2021/04/73599.jpg "}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> Kişisel Bakım</Text>
    
    
   </TouchableOpacity>
   <TouchableOpacity 
   onPress={() => navigation.navigate("CategoryDetails" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://i.pinimg.com/originals/14/0f/8f/140f8f8f63dc9370a6f69d47f49e4514.jpg "}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> Anne ve Bebek</Text>
    
    
   </TouchableOpacity>
   </View>
   <View style = {{flexDirection : 'row'}}>
   <TouchableOpacity 
   onPress={() => navigation.navigate("CategoryDetails" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://www.buseterim.com.tr/upload/default/2020/8/10/dogalsacbakm4.jpg "}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> Saç Bakımı</Text>
    
    
   </TouchableOpacity>
   <TouchableOpacity 
   onPress={() => navigation.navigate("CategoryDetails" ) } style = {{width : width*0.20, height: height*0.13,flexDirection:'column',alignItems:'center',justifyContent:'space-between',marginTop:20}}>
    <Image style={{width:width*0.15,height:height*0.10,borderRadius:8}} source={{uri : "https://www.edermo.com/Data/Blog/7.jpg "}} />
    <Text style = {{fontSize : 9,color :'#616161',fontWeight:'500',marginTop:2}}> DermoKozmetik</Text>
    
    
   </TouchableOpacity>

   </View>
   
   
   </View>
   
  )
}

export default index;