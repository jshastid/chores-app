import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationBar, NavigationProvider } from './src/navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { Chores } from "./screens/chores"
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';

function Home() {
  
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Chores are shown </Text>
        <NavigationBar />
      </View>
    </SafeAreaProvider>
  );
}

function Shopping() {
  
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Shopping list goes here</Text>
        <NavigationBar />
      </View>
    </SafeAreaProvider>
  );
}

function Maintenance() {
  
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Maintenance schedule is shown here</Text>
        <NavigationBar />
      </View>
    </SafeAreaProvider>
  );
}

function Schedule() {
  
  return (
    <SafeAreaProvider>
      <View style={styles.container}>
        <Text>Accounts will be added soon!</Text>
        <NavigationBar />
      </View>
    </SafeAreaProvider>
  );
}

export default function App() {

  const screens = [
    {name: "Home", component: Home},
    {name: "Chores", component: Chores},
    {name: "Shopping", component: Shopping},
    {name: "Maintenance", component: Maintenance},
    {name: "Schedule", component: Schedule},
  ];

  return (
    <GestureHandlerRootView>
    <BottomSheetModalProvider>
      <SafeAreaProvider>
        <NavigationProvider screens={screens} />
      </SafeAreaProvider>
    </BottomSheetModalProvider>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
