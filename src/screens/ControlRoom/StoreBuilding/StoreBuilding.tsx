import { useEffect, useState } from "react";
import {
View,
Text,
StyleSheet,
ScrollView
} from "react-native";
import { storeTypeChecker } from "./helper";
import { storeBuildingStyles } from "./styles";
import { AppReportState, ControlRoomReport } from "../../../constants/customTypes";
import TextBaseInput from "../../../components/Input/TextBaseInput";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import { connectionHealth } from "../../../constants/constantData";
import { PickerBaseInput } from "../../../components/Input/PickerBaseInput";
import StaffBox from "../../../components/StaffBox/StaffBox";
import { useAuth } from "../../../ApplicationState";

const StoreBuilding = ({ route }) => {
    const { storeCode, storeName } = route.params!;
    const [ storeType ] = useState(storeTypeChecker(storeCode));
    const [ reportID ]  = useState(uuidv4());
    const { report, setReport } = useAuth();

    useEffect(()=> {
	setReport((prev: AppReportState)=> {
	    return ({
		...prev,
		controlRoomState: {
		    ...prev.controlRoomState,
		    reportState: [
			...prev.controlRoomState.reportState,
			{
			    storeName: storeName,
			    storeCode: storeCode,
			    bossStaff: [],
			    securityStaff: [],
			    news: [],
			    cctvStaff: []
			}
		    ]
		}
	    })
	})
    }, [])

    return (
	<ScrollView style={storeBuildingStyles.container}>
	    <View style={storeBuildingStyles.titleContainer}>
		<Text style={storeBuildingStyles.title}>{ "L" + storeCode + " " }</Text>
		<Text style={[storeBuildingStyles.title, storeBuildingStyles.titleName]}>{ storeType + " " }</Text>
		<Text style={[storeBuildingStyles.title, storeBuildingStyles.titleName]}>{ storeName }</Text>
	    </View>
	    <PickerBaseInput targetFormat="controlRoomState" reportIdentifier={reportID} inputObject={connectionHealth}/>
	    {
		report.controlRoomState.reportState.map((current: ControlRoomReport, index)=> {
		    return <Text>{ current.storeCode }</Text>
		})
	    }
	    <Text>{ }</Text>
	    <StaffBox />
	</ScrollView>
    );
};


export default StoreBuilding;
