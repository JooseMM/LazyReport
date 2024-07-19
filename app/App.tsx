import { StyleSheet } from 'react-native';
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from './ApplicationState';
import HomeScreen from "./screens/Home";
import IngresoSEPPScreen from "./screens/IngresoSEPP";
import FinishReportScreen from './screens/FinishReport';
import { colors } from "../constants/constants";

const Stack = createNativeStackNavigator();

const customTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'white',
	}
};

export default function App() {
  return (
	  <AuthProvider>
		  <NavigationContainer theme={customTheme}>
			<Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.blue },  headerTitleStyle: { color: 'white', fontWeight: 'bold', fontSize: 20 } }}>
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: "Lazy Report"}} />
				<Stack.Screen name="IngresoSEPP" component={IngresoSEPPScreen}  />
				<Stack.Screen name="FinishReport" component={FinishReportScreen}  />
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
