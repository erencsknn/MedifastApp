import React, { useState } from 'react'
import { ScrollView,Text } from 'react-native'
import CategoryFiltering from "../../../components/CategoryandTypeFiltering/CategoryandTypeFirsatUrünleri/CategoryFiltering"
import TypeFiltering from "../../../components/CategoryandTypeFiltering/CategoryandTypeFirsatUrünleri/TypeFiltering"
import ProductItem from "../../../components/CategoryandTypeFiltering/CategoryandTypeFirsatUrünleri/ProductItem"


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