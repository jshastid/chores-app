import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";
import Animated, { SlideInRight, SlideOutRight } from "react-native-reanimated";


export function ChoreSideScreen({closeScreen}) {
    const dim = Dimensions.get("screen");

    const screenShape = {
        width: dim.width,
        height: dim.height,
    };

    return (
        <Animated.View 
            style={[styles.container, screenShape]}
            entering={SlideInRight}
            exiting={SlideOutRight}
        >
            <TouchableOpacity onPress={() => closeScreen()}>
                <Text>
                    close screen
                </Text>
            </TouchableOpacity>
        </Animated.View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        position: "absolute"
    },
});