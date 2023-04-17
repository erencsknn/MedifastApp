import { View, Text, Image, ScrollView } from "react-native";
import HeaderMain from "../../components/HeaderMain";
import BannerCarousel from "../../components/BannerCarousel";
import CategoryItem from "../../components/CategoryItem"


function index() {
  return (
    <ScrollView>
      <HeaderMain />
      <BannerCarousel/>
      <CategoryItem/>
    </ScrollView>
  );
}

export default index;
