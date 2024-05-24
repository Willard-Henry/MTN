import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";

function TopAppBar() {
  return (
    <View className=" flex-row justify-between">
      <View className="">
        <Image
          className="h-16 w-20"
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/New-mtn-logo.jpg/800px-New-mtn-logo.jpg",
          }}
        />
      </View>
      <View className="flex-row gap-2 py-4">
        <View className="">
          <Text className="font-bold text-xl">Yo!</Text>
        </View>
        <View className="">
          <Text className="text-xl">WILLARD</Text>
        </View>
      </View>
      <View className="py-4 px-4">
        <AntDesign name="message1" size={28} color="black" />
      </View>
    </View>
  );
}
export default TopAppBar;
