import { useState, useRef } from "react"
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native"
import { NavigationView } from "../src/navigation"

import { CategoryContainer, ChoreModal } from "../src/chores-components";

export function Chores() {
  console.log("rendered chore page");
  const bottomSheetRef = useRef(null);

  const categories = [
    {name: "Outdoors", img: require("../assets/lawn-mower.png")},
    {name: "Cleaning", img: require("../assets/cleaning-products.png")},
    {name: "Laundry", img: require("../assets/laundry-machine.png")},
    {name: "Kitchen", img: require("../assets/dish-washing.png")},
  ];

  return (
    <>
      <NavigationView style={styles.navContainer}>
        <Text style={{textAlign: "left"}}>Hello James, you have 7 tasks to do today</Text>

        {categories.map((category, index) => (
          <CategoryContainer category={category} key={index} />
        ))}

        <TouchableOpacity onPress={() => { bottomSheetRef.current?.present() }}>
          <Text>show Modal</Text>
        </TouchableOpacity>

      </NavigationView>
      <ChoreModal theref={bottomSheetRef} />
    </>
  )
}


const styles = StyleSheet.create({
  navContainer: {
    display: "flex", 
    flexDirection: "row", 
    flexWrap: "wrap", 
    gap: 15, 
    justifyContent: "space-evenly"
  }
});