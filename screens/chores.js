import { useState, useRef } from "react"
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native"
import { NavigationView } from "../src/navigation"
import { Ionicons } from "@expo/vector-icons";

import { CategoryContainer, ChoreModal, ChoreSideScreen } from "../src/chores-components";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export function Chores() {
  console.log("rendered chore page");
  const [showSide, setSide] = useState(false);
  const [showModal, setModal] = useState(false);

  const categories = [
    {name: "Outdoors", img: require("../assets/lawn-mower.png")},
    {name: "Cleaning", img: require("../assets/cleaning-products.png")},
    {name: "Laundry", img: require("../assets/laundry-machine.png")},
    {name: "Kitchen", img: require("../assets/dish-washing.png")},
  ];

  return (
    <View style={{flex: 1}}>
      <NavigationView style={styles.navContainer}>
        <Text style={{textAlign: "left"}}>Hello James, you have 7 tasks to do today</Text>
        {categories.map((category, index) => (
          <CategoryContainer onPress={() => setSide(true)} category={category} key={index} />
        ))}

        <TouchableOpacity 
          onPress={() => setModal(true)}
          style={styles.addPos}
        >
          <View style={styles.addContainer}>
            <Ionicons name="add" style={styles.addText} />
          </View>
        </TouchableOpacity>

      </NavigationView>
      {showModal && <ChoreModal hideModal={() => setModal(false)} />}
      {showSide && (<ChoreSideScreen closeScreen={() => setSide(false)} />)}
    </View>
  )
}


const styles = StyleSheet.create({
  navContainer: {
    display: "flex", 
    flexDirection: "row", 
    flexWrap: "wrap", 
    gap: 15, 
    justifyContent: "space-evenly"
  },
  addPos: {
    position: "absolute",
    bottom: 75,
    right: 20,
  },
  addContainer: {
    width: 60,
    height: 60,
    padding: 0,
    borderRadius: 35,
    backgroundColor: "#254ed3ff",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addText: {
    fontWeight: "bold",
    fontSize: 39,
    textAlign: "center",
    color: "white",
  },
});