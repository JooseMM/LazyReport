import { useState } from "react";
import {
View,
Text,
StyleSheet,
ScrollView,
ViewStyle
} from "react-native";
import { storeTypeChecker } from "./helper";
import { storeBuildingStyles } from "./styles";
import { ControlRoomReport } from "../../../constants/customTypes";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import { connectionHealth } from "../../../constants/constantData";
import { PickerBaseInput } from "../../../components/Input/PickerBaseInput";
import StaffBox from "../../../components/StaffBox/StaffBox";
import { useAuth } from "../../../ApplicationState";
import { STAFF_GROUPS } from "../../../components/StaffBox/helper";
import ControlRoomReportActions from "../../../components/ControlRoomReportActions";

const StoreBuilding = ({ route }) => {
    const { storeCode, storeName } = route.params!;
    const [ storeType ] = useState(storeTypeChecker(storeCode));
    const [ reportIdentifier ]  = useState(uuidv4());
    const { report } = useAuth();
    const [ currentStoreState ] = useState<ControlRoomReport>(report.controlRoomState.reportState.find(store => store.storeCode === storeCode))

    return (
	<ScrollView style={storeBuildingStyles.container}>
	    <View style={storeBuildingStyles.titleContainer}>
		<Text style={storeBuildingStyles.title}>{ "L" + storeCode + " " }</Text>
		<Text style={[storeBuildingStyles.title, storeBuildingStyles.titleName]}>{ storeType + " " }</Text>
		<Text style={[storeBuildingStyles.title, storeBuildingStyles.titleName]}>{ storeName }</Text>
	    </View>
	    <PickerBaseInput targetFormat="controlRoomState" reportIdentifier={reportIdentifier} inputObject={connectionHealth}/>
	    <View style={{ marginVertical: 15 }}>
		<Text style={storeBuildingStyles.labels}>Dotaciones:</Text>
		{
		    STAFF_GROUPS.map((group, index)=> (
			<StaffBox 
			 key={index}
			 staffGroupName={group}
			 storeCode={storeCode}
			 completed={currentStoreState.completed} 
			 styles={index > 0 && { marginTop: 20 } as ViewStyle}
			/>
		    ))

		}
	    </View>
	    <ControlRoomReportActions completed={currentStoreState.completed} storeCode={storeCode}/>
	</ScrollView>
    );
};

export default StoreBuilding;

