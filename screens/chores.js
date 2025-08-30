import { View, Text, Dimensions } from "react-native"
import { NavigationView } from "../src/navigation"
import { useStorage } from "../src/persistant"
import { Shadow } from "react-native-shadow-2";

import { CategoryContainer } from "../src/chores-components";

export function Chores() {
  console.log("rendered chore page");

  return (
    <NavigationView style={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 15, justifyContent: "space-evenly"}}>
      <CategoryContainer />

      <CategoryContainer />
    </NavigationView>
  )
}