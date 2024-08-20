import {
View,
Text,
StyleSheet
} from "react-native";
import IngresoSEPPScreen from "./IngresoSEPP";
import InstructionBox from "../../components/InstructionBox/InstructionBox";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Detained = () => {
    const Stack = createNativeStackNavigator();

    return (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
	    <Stack.Screen name="Entry" component={IngresoSEPPScreen}/>
	    <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
		<Stack.Screen name="Instruction" component={InstructionBox} />
	    </Stack.Group>
	</Stack.Navigator>
    );
}

export default Detained;
