import IngresoSEPPScreen from "../Detained/IngresoSEPP/index";
import InstructionBox from "../../components/InstructionBox/InstructionBox";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import EmergencyPopup from "../../components/Input/EmergencyPopup/EmergencyPopup";
import ReportScreen from "../Report";

const Detained = () => {
    const Stack = createNativeStackNavigator();

    return (
	<Stack.Navigator screenOptions={{ headerShown: false }}>
	    <Stack.Screen name="Entry" component={IngresoSEPPScreen}/>
	    <Stack.Screen name="Report" component={ReportScreen}/>
	    <Stack.Group screenOptions={{ presentation: "transparentModal" }}>
		<Stack.Screen name="Instruction" component={InstructionBox} />
		<Stack.Screen name="AddEmergencyCall" component={EmergencyPopup} />
	    </Stack.Group>
	</Stack.Navigator>
    );
}

export default Detained;
