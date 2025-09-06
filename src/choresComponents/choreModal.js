import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from "react-native";
import Animated, { SlideInDown, SlideOutDown, FadeIn, FadeOut } from "react-native-reanimated"

import { SafeAreaView } from "react-native-safe-area-context";

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

      <SafeAreaView style={styles.primaryBody}>

        <Text style={styles.inputLabel}>
          Chore Name
        </Text>
        <TextInput 
          placeholder="wash clothes, mow lawn, make bed..."
          style={styles.inputShape}
        />

        <Text style={styles.inputLabel}>
          Chore Description
        </Text>
        <TextInput 
          placeholder="Add details about the chore and any notes to help you remember"
          style={styles.inputShape}
        />

      </SafeAreaView>


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
    height: "100%",
    backgroundColor: "white",
    borderRadius: 12,
  },
  inputLabel: {
    fontWeight: "bold",
    marginLeft: "5%",
    marginBottom: 2,
    fontSize: 16,
  },
  primaryBody: {
    padding: "5%",
  },
  inputShape: {
    borderWidth: 1,
    borderRadius: 14,
    width: "90%",
    margin: "auto",
    backgroundColor: "#f7f7f7ff",
    borderColor: "#ccccccff"
  }
});