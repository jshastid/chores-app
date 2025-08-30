import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native"
import { Shadow } from "react-native-shadow-2"




export function CategoryContainer({category, icon}) {
    const dim = Dimensions.get("screen");

    const containerShape = {
        width: dim.width * 0.40,
        height: dim.width * 0.40,
    };

    const iconShape = {
        width: dim.width * 0.25,
        height: dim.width * 0.25,
    };


    return (
        <View>
            <Shadow>
                <View style={[styles.container, containerShape]}>
                    <Image style={iconShape}  resizeMode="contain" source={require("../../assets/lawn-mower.png")} />
                    <Text>temporary text</Text>
                </View>
            </Shadow>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 9,
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center"
    }
})