import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/Home";
import IngresoSEPPScreen from "./screens/IngresoSEPP";
import { AuthProvider } from './ApplicationState';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
	  <AuthProvider>
		  <NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: "Lazy Report"}} />
				<Stack.Screen name="IngresoSEPP" component={IngresoSEPPScreen}  />
			</Stack.Navigator>
		  </NavigationContainer>
	  </AuthProvider>
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
