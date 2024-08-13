import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from './src/ApplicationState';
import HomeScreen from "./src/screens/Home";
import IngresoSEPPScreen from "./src/screens/IngresoSEPP";
import ReportScreen from './src/screens/Report';
import { colors } from "./src/constants/constantData";
import { StatusBar } from 'expo-status-bar';
import StatusSEPPScreen from "./src/screens/StatusSEPP";

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
		<StatusBar style="light" />
		  <NavigationContainer theme={customTheme}>
			<Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: colors.blue },  headerTitleStyle: { color: 'white', fontWeight: 'bold', fontSize: 20 }, headerTintColor: '#fff' }}>
				<Stack.Screen name="Home" component={HomeScreen} options={{ title: "Lazy Report"}} />
				<Stack.Screen name="IngresoSEPP" component={IngresoSEPPScreen}  />
				<Stack.Screen name="StatusSEPP" component={StatusSEPPScreen}  />
				<Stack.Screen name="Report" component={ReportScreen}  />
			</Stack.Navigator>
		  </NavigationContainer>
	  </AuthProvider>
  );
}
