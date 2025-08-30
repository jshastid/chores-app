import { useState } from "react"
import { View, Text, Dimensions, TouchableOpacity } from "react-native"
import { NavigationView } from "../src/navigation"
import { useStorage } from "../src/persistant"
import { Shadow } from "react-native-shadow-2";

import { CategoryContainer, ChoreModal } from "../src/chores-components";

export function Chores() {
  console.log("rendered chore page");
  const [showModal, setShowModal] = useState(true);

  const categories = [
    {name: "Outdoors", img: require("../assets/lawn-mower.png")},
    {name: "Cleaning", img: require("../assets/cleaning-products.png")},
    {name: "Laundry", img: require("../assets/laundry-machine.png")},
    {name: "Kitchen", img: require("../assets/dish-washing.png")},
  ];

  return (
    <>
      <NavigationView style={{display: "flex", flexDirection: "row", flexWrap: "wrap", gap: 15, justifyContent: "space-evenly"}}>
        {categories.map((category, index) => (
          <CategoryContainer category={category} key={index} />
        ))}
        <TouchableOpacity onPress={() => {setShowModal(true)}}>
          <Text>show Modal</Text>
        </TouchableOpacity>
      </NavigationView>
      {showModal && <ChoreModal closeModal={() => setShowModal(false)}/>}
    </>
  )
}