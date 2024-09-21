import { 
useEffect,
useState
} from "react";
import {
View,
Text,
ScrollView,
ViewStyle
} from "react-native";
import { storeBuildingStyles } from "./styles";
import StaffBox from "../../../components/StaffBox/StaffBox";
import { useAuth } from "../../../ApplicationState";
import { STAFF_GROUPS } from "../../../components/StaffBox/helper";
import ControlRoomReportActions from "../../../components/ControlRoomReportActions";
import StaffUpdatePopup from "../PopupInput/PopupInput";
import { CONTROL_ROOM_CONNECTION_HEALTH } from "./helper";
import { PickerBaseInput } from "../../../components/Input/PickerBaseInput";

const StoreBuilding = ({ route }) => {
    const { report } = useAuth();
    const [ currentStoreInfo, setCurrentStoreInfo ] = useState<ControlRoom.StoreInfo>({
	...route.params,
	...report.controlRoomState
	    .reportState.find(store => store.storeCode === route.params.code)
    }
    );
    const [ currentUpdateStaff, setCurrentUpdateStaff ] = useState<ControlRoom.CurrentPopupInfo>({
	isOpen: false,
	targetInfo: undefined,
	targetInfoKey: undefined,
	optionalIndex: undefined
    });

    return (
	<ScrollView 
	 scrollEnabled={!currentUpdateStaff.isOpen}
	 style={storeBuildingStyles.container}
	 contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
	>
	    {
		currentUpdateStaff.isOpen && 
		    <StaffUpdatePopup
		     index={currentUpdateStaff.optionalIndex}
		     state={{ current: currentStoreInfo, updater: setCurrentStoreInfo, popupControl: setCurrentUpdateStaff }}
		    /> 
	    }
	    <View style={storeBuildingStyles.titleContainer}>
		<Text style={storeBuildingStyles.title}>{ "L" + currentStoreInfo.storeCode + " " }</Text>
		{
		    currentStoreInfo.storeCode !== 90 && 
			<Text style={[storeBuildingStyles.title, storeBuildingStyles.titleName]}>{ currentStoreInfo.storeCode + " " }</Text> 
		}
		<Text style={[storeBuildingStyles.title, storeBuildingStyles.titleName]}>{ currentStoreInfo.storeName }</Text>
	    </View>
	    {
	    <PickerBaseInput  
	     utils={CONTROL_ROOM_CONNECTION_HEALTH.utils}
	     styles={{ width: "90%", maxWidth: 400 }}
	     inputObject={CONTROL_ROOM_CONNECTION_HEALTH}
	     state={{ current: currentStoreInfo, updater: setCurrentStoreInfo }}

	    />
	    }
	    <View style={storeBuildingStyles.staffContainer}>
		<Text style={storeBuildingStyles.labels}>Dotaciones:</Text>
		{
		    STAFF_GROUPS.map((group, index)=> (
			<StaffBox 
			 state={{ state: currentStoreInfo, popupControl: setCurrentUpdateStaff}}
			 key={index}
			 utils={group}
			 completed={currentStoreInfo.completed} 
			 styles={index > 0 && { marginTop: 20 } as ViewStyle}
			/>
		    ))
		}
	    </View>
	    <ControlRoomReportActions completed={currentStoreInfo.completed} storeCode={currentStoreInfo.storeCode}/>
	</ScrollView>
    );
};

export default StoreBuilding;

