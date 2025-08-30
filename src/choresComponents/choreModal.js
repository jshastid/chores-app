import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import Animated, { SlideInDown, SlideOutDown } from "react-native-reanimated";


export function ChoreModal({closeModal}) {
    const dim = Dimensions.get("screen");

    const modalDim = {
        width: dim.width,
        height: dim.height * 0.9,
    };

    const shadowDim = {
        width: dim.width,
        height: dim.height,
    }

    return (
        <>
            <TouchableOpacity 
                activeOpacity={1} 
                style={[styles.shadowBackdrop, shadowDim]}
                onPress={closeModal}
            />
            
            <Animated.View 
                entering={SlideInDown} 
                exiting={SlideOutDown} 
                style={[styles.container, modalDim]}
            >
                <Text>Hello World</Text>
            </Animated.View>
        </>
    );
}


const styles = StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        backgroundColor: "white",
        borderRadius: 15,
        padding: 10,
        zIndex: 20,
    },
    shadowBackdrop: {
        backgroundColor: "rgba(0, 0, 0, 0.4)",
        position: "absolute"
    }
})