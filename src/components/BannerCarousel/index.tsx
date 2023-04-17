import React, { useState } from "react";
import { View, Image, FlatList, StyleSheet, Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");


function index() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [banners,setBanners] = useState([
      "https://cdn.discordapp.com/attachments/780442883572498463/1097199247641809016/getirbanner33.jpg",
      "https://cdn.discordapp.com/attachments/780442883572498463/1097199247004278974/getirbanner11.jpg",
      "https://cdn.discordapp.com/attachments/780442883572498463/1097199247381770441/getirbanner22.jpg",
      
    ])

  
  
  

  return (
  <FlatList
    data={banners}
    renderItem={(item) => (
        <Image
          source={{ uri: item.item }}
          style={{ width: width, height: height * 0.24,resizeMode:"stretch", }}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      snapToInterval={width}
      snapToAlignment={"center"}
      decelerationRate={"fast"}
      
  /> 


  )
}

export default index;