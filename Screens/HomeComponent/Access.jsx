import { Image, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from '@expo/vector-icons';

function Access() {
  return (
    <View className="bg-white rounded-tl-xl">
      <View className="p-5 flex-row justify-between">
        <View className="">
          <Text className="text-xl">Quick access </Text>
        </View>
        <View className="flex-row gap-3 self-center">
          <View className="">
            <Text className="font-medium">View all</Text>
          </View>
          <View>
            <AntDesign name="rightcircle" size={18} color="black" />
          </View>
        </View>
      </View>

<View className="flex-row justify-between p-5">

<View className="flex-row gap-2">
<View>
<MaterialCommunityIcons name="network-strength-4" size={24} color="black" />
</View>
</View>

</View>

    </View>
  );
}
export default Access;
