import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from "react-native";


export function MicroCategoryContainer({onPress, name, styleData}) {
    const dim = Dimensions.get("window");

    const shape = {
        width: dim.width * 0.05,
        height: dim.width * 0.05,
    };

    return (
        <TouchableOpacity style={[styles.container, shape]}>

        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {

    }
})