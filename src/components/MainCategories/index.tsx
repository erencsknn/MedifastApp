import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import CategoryItem from "../CategoryItem";
import { Category } from "../../models";
import categoriesEczane from "../../../assets/categoriesEczane";


function index() {
  
  const [categories, setCategories] = useState<Category[]>(categoriesEczane);
  return (
    <View>
      <View style = {styles.listConteiner}>
       
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  listConteiner: {
    flex: 1,
    flexDirection : 'row',
    alignItems : 'flex-start',
    flexWrap : 'wrap',
  },
});

export default index;
