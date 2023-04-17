import React, { useState } from 'react'
import { ScrollView,Text } from 'react-native'
import CategoryFiltering from "../../../components/CategoryandTypeFiltering/CategoryandTypeMedikal/CategoryFiltering"
import TypeFiltering from "../../../components/CategoryandTypeFiltering/CategoryandTypeMedikal/TypeFiltering"
import ProductItem from "../../../components/CategoryandTypeFiltering/CategoryandTypeMedikal/ProductItem"


function index() {
  
  return (
    <ScrollView>
        <CategoryFiltering/>
        <TypeFiltering/>
        <ProductItem/>
    </ScrollView>
  )
}

export default index