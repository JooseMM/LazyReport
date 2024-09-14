import IngresoSEPPScreen from "../Detained/IngresoSEPP/index";
import InstructionBox from "../Popups/InstructionBox/InstructionBox";
import { createDrawerNavigator } from "@react-navigation/drawer";
import EmergencyPopup from "../Popups/EmergencyPopup/EmergencyPopup";
import ReportScreen from "../Report";
import AlertBox from "../Popups/AlertBox/AlertBox";
import { useEffect } from "react";
import { Pressable, Text, ScrollView } from "react-native";
import { colors, options } from "../../constants/constantData";

const Detained = ({navigation}) => {
    const Drawer = createDrawerNavigator();

    return (
	<Drawer.Navigator>
	    <Drawer.Screen name="Entry" component={IngresoSEPPScreen}/>
	    <Drawer.Screen name="Report" component={ReportScreen}/>
	    <Drawer.Group>
		<Drawer.Screen name="Instruction" component={InstructionBox} />
		<Drawer.Screen name="AddEmergencyCall" component={EmergencyPopup} />
		<Drawer.Screen name="Alert" component={AlertBox} />
	    </Drawer.Group>
	</Drawer.Navigator>
    );
}

export default Detained;
