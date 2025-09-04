import { StyleSheet, View, Text, TouchableOpacity, Image, Dimensions } from "react-native"
import { Shadow } from "react-native-shadow-2"


export function CategoryContainer({category, onPress=() => {}}) {
    const dim = Dimensions.get("screen");

    const containerShape = {
        width: dim.width * 0.40,
        height: dim.width * 0.40,
    };

    const iconShape = {
        width: dim.width * 0.24,
        height: dim.width * 0.25,
    };
    return (
        <View>
            <TouchableOpacity activeOpacity={0.6} onPress={onPress}>
                <Shadow>
                    <View style={[styles.container, containerShape]}>
                        <Image style={iconShape}  resizeMode="contain" source={category.img} />
                        <Text style={styles.text}>{category.name}</Text>
                    </View>
                </Shadow>
            </TouchableOpacity>
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
    },
    text: {
        fontSize: 20,
        fontWeight: "bold",
    }
});