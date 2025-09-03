import { useCallback } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BottomSheetModal, BottomSheetView, BottomSheetBackdrop } from "@gorhom/bottom-sheet"


export function ChoreModal({setBackdrop, theref}) {
    
  // won't be added until reanimated is patched
  //const backdrop = () => useCallback((props) =>
  //  (<BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />), []
  //);

  return (
      <BottomSheetModal
          ref={theref}
          enablePanDownToClose
          onDismiss={() => setBackdrop(false)}
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