import { View, Text, Image, ScrollView } from "react-native";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";
import CategoryItem from "../../components/CategoryItem"
import MainCategories from "../../components/MainCategories"


function index() {
  return (
    <ScrollView>
      <HeaderMain />
      <BannerCarousel/>
      <MainCategories/>
    </ScrollView>
  );
}

export default index;
