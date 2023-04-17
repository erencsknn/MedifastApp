import React from 'react'
import { View,Text } from 'react-native'
import ProductItem from '../CategoryandTypeFiltering/CategoryandTypeIlaclar/ProductItem'
import productsFastecza from '../../../assets/productsFastecza'

function index() {
  return (
    <View>
    {/* 2 products */}
    <View style = {{flexDirection : 'row',alignItems : 'center', backgroundColor : 'white',}}>
        {productsFastecza.slice(0,2).map((item) =>(
            <ProductItem key={item.id} item = {item}/>   
        ))}
      
    </View>
    <Text style = {{color : 'gray', fontWeight : 'bold',padding : 14}}>
        Ağrı Kesici
        </Text>
    {/* Ağrı Kesici products */}
    <View style = {{flexDirection : 'row',flexWrap : 'wrap',flex : 1, backgroundColor : 'white',paddingVertical : 10,alignItems : 'center'}}>
      {productsFastecza.slice(2,5).map((item) => (
        <ProductItem  key={item.id} item = {item} />
      ))}


    </View>
    <Text style = {{color : 'gray', fontWeight : 'bold',padding : 14}}>
       Alerji
        </Text>
          {/* Alerji products */}
    <View style = {{flexDirection : 'row',flexWrap : 'wrap',flex : 1, backgroundColor : 'white',paddingVertical : 10,alignItems : 'center'}}>
      {productsFastecza.slice(5,8).map((item) => (
        <ProductItem  key={item.id} item = {item} />
      ))}


    </View>
    <View>
      {/* Damla products */}
    <Text style = {{color : 'gray', fontWeight : 'bold',padding : 14}}>
        Ağrı Kesici
        </Text>
        <View style = {{flexDirection : 'row',flexWrap : 'wrap',flex : 1, backgroundColor : 'white',paddingVertical : 10,alignItems : 'center'}}>
      {productsFastecza.slice(8,11).map((item) => (
        <ProductItem  key={item.id} item = {item} />
      ))}


    </View>

    </View>
    <View>
      {/* Damla products */}
    <Text style = {{color : 'gray', fontWeight : 'bold',padding : 14}}>
        Soğuk Algınlığı
        </Text>
        <View style = {{flexDirection : 'row',flexWrap : 'wrap',flex : 1, backgroundColor : 'white',paddingVertical : 10,alignItems : 'center'}}>
      {productsFastecza.slice(11,15).map((item) => (
        <ProductItem  key={item.id} item = {item} />
      ))}


    </View>

    </View>
    
    
  
    </View>
  )
}

export default index