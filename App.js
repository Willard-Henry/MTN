import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Homescreen from "./Screens/Homescreen";

export default function App() {
  return (
    <View className=" pt-12 bg-yelow">
      <Homescreen />
      <StatusBar style="auto" />
    </View>
  );
}
