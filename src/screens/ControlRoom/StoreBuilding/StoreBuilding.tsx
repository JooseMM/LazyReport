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
import StaffUpdatePopup from "../StaffPopup/StaffPopup";
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
    const [ currentPopupInfo, setCurrentPopupInfo ] = useState<Props.CurrentPopupProps>({
	isOpen: false,
	infoTarget: undefined,
	state: { current: currentStoreInfo, updater: setCurrentStoreInfo },
    });

    return (
	<ScrollView 
	 scrollEnabled={!currentPopupInfo.isOpen}
	 style={storeBuildingStyles.container}
	 contentContainerStyle={{ justifyContent: "center", alignItems: "center" }}
	>
	    {
		currentPopupInfo.isOpen && 
		    <StaffUpdatePopup
		    {...currentPopupInfo}
		    propsUpdater={setCurrentPopupInfo}
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
		    STAFF_GROUPS.map((name, index)=> (
			<StaffBox 
			 state={{ current: currentStoreInfo, updater: setCurrentStoreInfo}}
			 isOpen={currentPopupInfo.isOpen}
			 infoTarget={{
			     ...currentPopupInfo.infoTarget,
			     infoTargetKey: name
			 }}
			 propsUpdater={setCurrentPopupInfo}
			 key={index}
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

