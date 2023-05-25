import React, { useState,useEffect } from 'react'
import { ScrollView,Text } from 'react-native'
import TypeFiltering from "../../../components/CategoryandTypeFiltering/CategoryandTypeIlaclar/TypeFiltering"
import ProductItem from "../../../components/CategoryandTypeFiltering/CategoryandTypeIlaclar/ProductItem"
import FilteringCategory from "../../../components/CategoryandTypeFiltering/CategoryandTypeIlaclar/FilteringCategory"
import ProductsContainer from "../../../components/ProductsContainer"
import { Category } from '../../../models'

function index(props) {
  const [category,setCategory] = useState<Category>()

  useEffect(() =>{
    setCategory(props.route.params.category)
  },[])
  console.log(category)

  
  return (
    <ScrollView>
        <FilteringCategory name = {category?.name}/>
        <ProductsContainer />
    </ScrollView>
  )
}

export default index