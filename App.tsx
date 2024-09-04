import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { NativeStackNavigationOptions, createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthProvider } from './src/ApplicationState';
import HomeScreen from "./src/screens/Home";
import { colors } from "./src/constants/constantData";
import { StatusBar } from 'expo-status-bar';
import Detained from "./src/screens/Detained";
import StatusSEPPScreen from "./src/screens/Detained/StatusSEPP";
import ControlRoomHome from "./src/screens/ControlRoom/Home/ControlRoomHome";

const Stack = createNativeStackNavigator();

const customTheme = {
	...DefaultTheme,
	colors: {
		...DefaultTheme.colors,
		background: 'white',
	}
};
const options: NativeStackNavigationOptions = { 
    headerStyle: { 
	backgroundColor: colors.blue 
    },
    headerTitleStyle: {
	color: 'white',
	fontWeight: 'bold',
	fontSize: 20 },
	headerTintColor: '#fff' 
};

export default function App() {
  return (
      <AuthProvider>
	  <StatusBar style="light" />
	  <NavigationContainer theme={customTheme}>
	      <Stack.Navigator screenOptions={options}>
		  <Stack.Screen name="Home" component={HomeScreen} options={{ title: "Lazy Report"}} />
		  <Stack.Screen name="Detained" component={Detained}  />
		  <Stack.Screen name="Status" component={StatusSEPPScreen}  />
		  <Stack.Screen name="ControlRoom" component={ControlRoomHome}  />
	      </Stack.Navigator>
	  </NavigationContainer>
      </AuthProvider>
  );
}
