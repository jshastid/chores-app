import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";

import { useSafeAreaInsets, SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

Stack = createNativeStackNavigator()


export function NavigationProvider({screens}) {

    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{animation: 'none', headerShown: false}}>
                {screens.map((screen, index) => (
                    <Stack.Screen component={screen.component} key={index} name={screen.name} />
                ))}
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export function NavigationBar() {
    const bottomInset = useSafeAreaInsets().bottom;
    const navBarWidth = Dimensions.get("window").width;

    const buttons = [
        {name: "Chores", src: "bed-outline", screen: "Chores"},
        {name: "Shopping", src: "cart-outline", screen: "Shopping"},
        {name: "Maintinance", src: "build-outline", screen: "Maintenance"},
        {name: "Account", src: "person-circle-outline", screen: "Schedule"},
    ];

    return (
        <View style={styles.shadowContainer}>
            <Shadow distance={6} startColor="rgba(0,0,0,0.2)">
                <View style={[styles.navBarContainer, {paddingBottom: bottomInset, width: navBarWidth}]}>
                    {buttons.map((button, index) => (
                        <NavigationButton key={index} button={button} />
                    ))}
                </View>
            </Shadow>
        </View>
    )
}

function NavigationButton({button}) {
    const navigation = useNavigation();

    return (
        <TouchableOpacity 
            style={styles.navBarButton} 
            onPress={() => navigation.navigate(button.screen)}
        >
            <Ionicons name={button.src} size={26} />
            <Text>{button.name}</Text>
        </TouchableOpacity>
    )
}

export function NavigationView({children, modal, style}) {
    return (
        <View style={{flex: 1}}>
            <SafeAreaView style={{flex: 1}}>
                <View style={[{flex: 1}, style]}>
                    {children}
                </View>
            </SafeAreaView>
            <NavigationBar />
        </View>
    )
}

const styles = StyleSheet.create({
    shadowContainer: {
        width: "100%",
        position: "absolute",
        bottom: 0,
    },
    navBarContainer: {
        height: 75,
        backgroundColor: "white",
        padding: 7,
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        zIndex: 0,
    },
    navBarButton: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    },
});