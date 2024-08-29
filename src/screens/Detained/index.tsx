import IngresoSEPPScreen from "../Detained/IngresoSEPP/index";
import InstructionBox from "../Popups/InstructionBox/InstructionBox";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmergencyPopup from "../Popups/EmergencyPopup/EmergencyPopup";
import ReportScreen from "../Report";
import AlertBox from "../Popups/AlertBox/AlertBox";

const Detained = () => {
    const Stack = createNativeStackNavigator();

    return (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
	    <Stack.Screen name="Entry" component={IngresoSEPPScreen}/>
	    <Stack.Screen name="Report" component={ReportScreen}/>
	    <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
		<Stack.Screen name="Instruction" component={InstructionBox} />
		<Stack.Screen name="AddEmergencyCall" component={EmergencyPopup} />
		<Stack.Screen name="Alert" component={AlertBox} />
	    </Stack.Group>
	</Stack.Navigator>
    );
}

export default Detained;
