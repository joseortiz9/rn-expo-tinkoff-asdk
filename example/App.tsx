import { StyleSheet, Text, View } from "react-native";
import * as RNExpoTinkoffAsdk from "rn-expo-tinkoff-asdk";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{RNExpoTinkoffAsdk.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
