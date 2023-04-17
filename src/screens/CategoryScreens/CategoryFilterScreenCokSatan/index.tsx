import React, { useState } from 'react'
import { ScrollView,Text } from 'react-native'
import CategoryFiltering from "../../../components/CategoryandTypeFiltering/CategoryandTypeCokSatan/CategoryFiltering"
import TypeFiltering from "../../../components/CategoryandTypeFiltering/CategoryandTypeCokSatan/TypeFiltering"
import ProductItem from "../../../components/CategoryandTypeFiltering/CategoryandTypeCokSatan/ProductItem"


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