import { View, Text, Image } from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

function Balance() {
  return (
    <View className="bg-slate-100 rounded-tr-3xl">
      <View className="flex-row justify-between p-4 px-5 pt-7">
        <View className="flex-row gap-3  ">
          <View>
            <Text className="text-lg font-medium">Balances</Text>
          </View>
          <View className="self-center">
            <Feather name="refresh-cw" size={16} color="black" />
          </View>
        </View>
        <View className="flex-row gap-3">
          <View className="">
            <Text className="font-medium">View all</Text>
          </View>
          <View>
            <AntDesign name="rightcircle" size={18} color="black" />
          </View>
        </View>
      </View>

      <View className="flex-row p-4 py-0 px-5 justify-between">
        <View className="rounded-xl bg-yelow  shadow-2xl h-24 w-40">
          <View className="flex-row gap-2 p-2 pl-4">
            <View className="self-center">
              <MaterialCommunityIcons
                name="phone-in-talk"
                size={14}
                color="black"
              />
            </View>
            <View>
              <Text className="text-sm font-medium">AIRTIME</Text>
            </View>
          </View>
          <View className="rounded-b-lg rounded-tl-xl bg-white h-16 w-40 border-2 border-yelow">
            <View className="p-2 gap-1">
              <View className="">
                <Text className="text-lg font-bold ">GHS 200.00</Text>
              </View>
              <View>
                <Text className="text-xs ">BONUS:</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="rounded-xl bg-yelow  shadow-2xl h-24 w-40">
          <View className="flex-row gap-2 p-2 pl-4">
            <View className="pt-1">
              <MaterialCommunityIcons
                name="network-strength-4"
                size={14}
                color="black"
              />
            </View>
            <View>
              <Text className="text-sm font-medium">DATA</Text>
            </View>
          </View>
          <View className="rounded-b-lg rounded-tl-xl bg-white h-16 w-40 border-2 border-yelow">
            <View className="p-2 gap-1">
              <View className="">
                <Text className="text-lg font-bold ">6.02 GB</Text>
              </View>
              <View>
                <Text className="text-xs ">BONUS:</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row p-4 px-5 pt-7 justify-between">
        <View className="rounded-xl bg-yelow  shadow-xl h-24 w-40">
          <View className="flex-row gap-2 p-2 pl-4">
            <View className="pt-1">
              <MaterialIcons name="mic" size={14} color="black" />
            </View>
            <View>
              <Text className="text-sm font-medium">VOICE</Text>
            </View>
          </View>
          <View className="rounded-b-lg rounded-tl-xl bg-white h-16 w-40 border-2 border-yelow">
            <View className="p-2 gap-1">
              <View className="">
                <Text className="text-lg font-bold ">384.12 MIN</Text>
              </View>
              <View>
                <Text className="text-xs ">BONUS:</Text>
              </View>
            </View>
          </View>
        </View>

        <View className="rounded-xl bg-yelow  shadow-2xl h-24 w-40">
          <View className="flex-row gap-2 p-2 pl-4">
            <View className="self-center">
              <MaterialCommunityIcons name="wifi" size={14} color="black" />
            </View>
            <View>
              <Text className="text-sm font-medium">BROADBAND</Text>
            </View>
          </View>
          <View className="rounded-b-lg rounded-tl-xl bg-white h-16 w-40 border-2 border-yelow">
            <View className="p-2 gap-2">
              <View className="">
                <Text className="text-sm font-bold ">GET CONNECTED</Text>
              </View>
              <View>
                <Text className="text-xs ">CLICK HERE:</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="self-center py-10">
        <Text className="text-slate-500 text-xs">
          Showing Balances as at March 21 2024, 1:45:57 PM
        </Text>
      </View>
    </View>
  );
}
export default Balance;
