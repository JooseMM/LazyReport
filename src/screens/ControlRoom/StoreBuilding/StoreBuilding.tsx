import { useState } from "react";
import {
View,
Text,
ScrollView,
ViewStyle
} from "react-native";
import { storeTypeChecker } from "./helper";
import { storeBuildingStyles } from "./styles";
import { ControlRoomReport, ControlRoomStaffGroup } from "../../../constants/customTypes";
import StaffBox from "../../../components/StaffBox/StaffBox";
import { useAuth } from "../../../ApplicationState";
import { STAFF_GROUPS } from "../../../components/StaffBox/helper";
import ControlRoomReportActions from "../../../components/ControlRoomReportActions";
import StaffUpdatePopup from "../PopupInput/PopupInput";

const StoreBuilding = ({ route }) => {
    const { storeCode, storeName } = route.params!;
    const [ storeType ] = useState(storeTypeChecker(storeCode));
    const { report } = useAuth();
    const [ currentStoreState ] = useState<ControlRoomReport>(
	report.controlRoomState
	    .reportState.find(store => store.storeCode === storeCode)
    );
    const [ currentUpdateStaff, setCurrentUpdateStaff ] = useState<Array<ControlRoomStaffGroup | number | null>>([]);

    return (
	<ScrollView 
	 scrollEnabled={currentUpdateStaff?.length < 1}
	 style={storeBuildingStyles.container}
	 contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
	>
	    { currentUpdateStaff.length > 0 && 
		<StaffUpdatePopup
		 index={currentUpdateStaff[1] as number}
		 storeCode={storeCode}
		 staffGroup={currentUpdateStaff[0] as ControlRoomStaffGroup}
		 toggleVisibility={setCurrentUpdateStaff}
		/> }
	    <View style={storeBuildingStyles.titleContainer}>
		<Text style={storeBuildingStyles.title}>{ "L" + storeCode + " " }</Text>
		<Text style={[storeBuildingStyles.title, storeBuildingStyles.titleName]}>{ storeType + " " }</Text>
		<Text style={[storeBuildingStyles.title, storeBuildingStyles.titleName]}>{ storeName }</Text>
	    </View>
	    {
		/*
	    <PickerBaseInput 
	     styles={{ width: "90%", maxWidth: 400 }}
	     storeCode={storeCode}
	     inputObject={connectionHealth}
	     updateState={null}
	    />
		 */
	    }
	    <View style={storeBuildingStyles.staffContainer}>
		<Text style={storeBuildingStyles.labels}>Dotaciones:</Text>
		{
		    STAFF_GROUPS.map((group, index)=> (
			<StaffBox 
			 update={setCurrentUpdateStaff}
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

