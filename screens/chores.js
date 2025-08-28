import { View, Text } from "react-native"
import { NavigationView } from "../src/navigation"
import { useStorage } from "../src/persistant"

export function Chores() {
  console.log("rendered chore page");

  return (
    <NavigationView>
      <Text>Hello World</Text>
    </NavigationView>
  )
}