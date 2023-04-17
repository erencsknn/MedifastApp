import React, { useState } from 'react'
import { ScrollView,Text } from 'react-native'
import TypeFiltering from "../../../components/CategoryandTypeFiltering/CategoryandTypeIlaclar/TypeFiltering"
import ProductItem from "../../../components/CategoryandTypeFiltering/CategoryandTypeIlaclar/ProductItem"
import FilteringCategory from "../../../components/CategoryandTypeFiltering/CategoryandTypeIlaclar/FilteringCategory"
import ProductsContainer from "../../../components/ProductsContainer"

function index() {
  
  return (
    <ScrollView>
        <FilteringCategory/>
        <TypeFiltering/>
        <ProductsContainer/>
    </ScrollView>
  )
}

export default index