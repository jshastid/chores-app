import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet"


export function ChoreModal({theref}) {
    // ref



   
    // renders
    return (
        <BottomSheetModal
            ref={theref}
            enablePanDownToClose
            snapPoints={['90%']}
            enableDynamicSizing={false}
        >
            <BottomSheetView style={styles.contentContainer}>
            <Text>Awesome 🎉</Text>
            </BottomSheetView>
        </BottomSheetModal>
    );
}


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 36,
    alignItems: 'center',
  },
})