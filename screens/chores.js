import { useState, useRef } from "react"
import { StyleSheet, View, Text, Dimensions, TouchableOpacity } from "react-native"
import { NavigationView } from "../src/navigation"

import { CategoryContainer, ChoreModal, ChoreSideScreen } from "../src/chores-components";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export function Chores() {
  console.log("rendered chore page");
  const bottomSheetRef = useRef(null);
  const [showSide, setSide] = useState(false);
  const [showBackdrop, setBackdrop] = useState(false);

  const categories = [
    {name: "Outdoors", img: require("../assets/lawn-mower.png")},
    {name: "Cleaning", img: require("../assets/cleaning-products.png")},
    {name: "Laundry", img: require("../assets/laundry-machine.png")},
    {name: "Kitchen", img: require("../assets/dish-washing.png")},
  ];

  const dim = Dimensions.get("screen");
  const backdropShape = {
    width: dim.width,
    height: dim.height,
  };

  return (
    <View style={{flex: 1}}>
      <NavigationView style={styles.navContainer}>
        <Text style={{textAlign: "left"}}>Hello James, you have 7 tasks to do today</Text>
        {categories.map((category, index) => (
          <CategoryContainer onPress={() => setSide(true)} category={category} key={index} />
        ))}

        <TouchableOpacity onPress={() => { bottomSheetRef.current?.present(); setBackdrop(true) }}>
          <Text>show Modal</Text>
        </TouchableOpacity>

      </NavigationView>
      <ChoreModal setBackdrop={setBackdrop} theref={bottomSheetRef} />
      {showSide && (<ChoreSideScreen closeScreen={() => setSide(false)} />)}
      {showBackdrop && <Animated.View entering={FadeIn} exiting={FadeOut} style={[styles.backdrop, backdropShape]} />}
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
  backdrop: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
});