import { Image, ScrollView, Text, View } from "react-native";
import TopAppBar from "./HomeComponent/TopAppBar";
import Balance from "./HomeComponent/Balance";
import Access from "./HomeComponent/Access";

function Homescreen() {
  return (
    <View className="">
      <ScrollView>
        <View className="">
          <TopAppBar />
          <Balance />
          <Access />
        </View>
      </ScrollView>
    </View>
  );
}
export default Homescreen;
