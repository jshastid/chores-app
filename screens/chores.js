
import { useState } from "react"
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ImageBackground, Dimensions } from "react-native";
import { NavigationBar } from "../src/navigation";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";
import { Shadow } from "react-native-shadow-2";

export function Chores() {
    const [showModal, setShowModal] = useState(false);

    const todays = [
        "laundry",
        "cleaning",
        "yardwork",
        "cooking",
        "errands",
    ];
    
    return (
        <View style={{flex: 1, backgroundColor: "white"}}>
            <SafeAreaView style={styles.container}>
                <View style={styles.container}>
                    <Text style={styles.headerText}>
                        Hello James, you have 3 tasks to do today
                    </Text>

                    <View style={styles.choreHeader}>
                        <Text style={styles.choreHeaderText}>Today's Chores</Text>
                    </View>

                    <View style={{height: 225}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.choreList}>
                            {todays.map((str, index) => (
                                <ChoreBox key={index} name={str} completed={0} total={4} />
                            ))}
                        </View>
                    </ScrollView>
                    </View>


                    <View style={styles.choreHeader}>
                        <Text style={styles.choreHeaderText}>This Week's Chores</Text>
                    </View>

                    <View style={{height: 225}}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.choreList}>
                            {todays.map((str, index) => (
                                <ChoreBox key={index} name={str} completed={0} total={4} />
                            ))}
                        </View>
                    </ScrollView>
                    </View>

                </View>
            </SafeAreaView>
                <TouchableOpacity onPress={() => setShowModal(true)}>
                <View style={styles.plusBox}>
                    <Ionicons name="add-outline" size={44} color="white" />
                </View>
                </TouchableOpacity>
            <NavigationBar />
            {showModal && <CustomModel toggleModal={() => {setShowModal(!showModal) }}/>}
        </View>
    );
}

function CustomModel({toggleModal}) {

  return (
      <Animated.View entering={SlideInDown} exiting={SlideOutDown} style={styles.customModal}>
        <TouchableOpacity onPress={() => toggleModal()}>
          <Text>close modal</Text>
        </TouchableOpacity>
      </Animated.View>
  );
}


function ChoreBox({name, completed, total}) {
    const categories = {
        "cleaning": require("../assets/cleaning.png"),
        "laundry": require("../assets/laundry.png"),
        "yardwork": require("../assets/yardwork.png"),
        "cooking": require("../assets/cooking.png"),
        "errands": require("../assets/errands.png"),
    };

    return (
        <View style={styles.choreBox}>
            <ImageBackground source={categories[name]} style={{width: "100%", height: "100%"}}>
            <Text style={styles.completedText}>{completed}/{total}</Text>
            </ImageBackground>
        </View>
    )
}


const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: '#f5f5f5ff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headerText: {
    fontSize: 26,
    paddingHorizontal: 25,
    textAlign: "left",
  },
  userIcon: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: "5%",
    paddingTop: "3%",
  },
  choreHeader: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: "3%",
    marginTop: "6%",
  },
  choreHeaderText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  plusBox: {
    position: "absolute",
    bottom: 75 + 15,
    right: "5%",
    backgroundColor: "#408cd4ff",
    borderRadius: 35,
    padding: 3,
  },
  choreBox: {
    width: 200,
    height: 225,
    borderRadius: 7,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  choreList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 15,
    paddingHorizontal: 15,
  },
  choreBoxTitle: {
    position: "absolute",
    top: "3%",
    left: "3%",
  },
  completedText: {
    position: "absolute",
    bottom: "3%",
    right: "3%",
    fontSize: 26,
    fontWeight: "bold",
    color: "white",
  },
  customModal: {
    width: "100%",
    height: "90%",
    position: "absolute",
    backgroundColor: "white",
    bottom: 0,
    zIndex: 20,
    borderRadius: 15,
  }
});
