import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import Animated, { SlideInDown, SlideOutDown, FadeIn, FadeOut } from "react-native-reanimated"


export function ChoreModal({hideModal}) {
  const dim = Dimensions.get("screen");
  
  const backdropShape = {
    width: dim.width,
    height: dim.height,
  };

  return (
    <>
      <Animated.View 
        style={[styles.backdrop, backdropShape]}
        entering={FadeIn}
        exiting={FadeOut}
      >
        <TouchableOpacity 
          activeOpacity={1} 
          style={{flex: 1}} 
          onPress={() => hideModal()}
        />
      </Animated.View>

      <Animated.View 
        style={styles.modalContainer}
        entering={SlideInDown}
        exiting={SlideOutDown}
      >

      </Animated.View>
    </>
  );
}


const styles = StyleSheet.create({
  backdrop: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%",
    backgroundColor: "white",
    borderRadius: 35,
  },
});