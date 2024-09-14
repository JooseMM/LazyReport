import {
View,
Text,
TouchableOpacity,
StyleSheet
} from "react-native";
import { ControlRoomReport, ControlRoomStaffGroup, InputObject, AppReportState, StaffUpdatedPopupProps } from "../../../constants/customTypes";
import TextBaseInput from "../../../components/Input/TextBaseInput";
import { STAFF_UPDATE, colors } from "../../../constants/constantData";
import { useAuth } from "../../../ApplicationState";
import { Image } from "expo-image";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

const StaffUpdatePopup = (props: StaffUpdatedPopupProps) => {
    const { report, setReport } = useAuth();
    const [ currentIndex, setCurrentIndex ] = useState(props.index)
    const trashIcon = require("../../../../assets/trash.svg");
    const submitData = ()=> {
	console.log(report.controlRoomState.reportState.find((store: ControlRoomReport)=> store.storeCode === props.storeCode)[props.staffGroup])
	props.toggleVisibility(false);
    }

    useEffect(()=> {
	if(props.index === undefined || props.index === null) {
	    setReport((prev: AppReportState)=> ({
		...prev,
		controlRoomState: ({
		    ...prev.controlRoomState,
		    reportState: prev.controlRoomState.reportState.map((current: ControlRoomReport)=> {
			if(current.storeCode === props.storeCode && props.index !== undefined) {
			    current[props.staffGroup] = [...current[props.staffGroup], { name: undefined, position: undefined } ]
			    setCurrentIndex(current[props.staffGroup].length - 1);
			}
			return current;
		    })
		})
		    
	    })
	    )
	}
    },[])
    return(
	<View style={ownStyles.background}>
	    <View style={ownStyles.container}>
		{
		    STAFF_UPDATE.map((current: InputObject, index: number)=> (
			<TextBaseInput 
			 key={index}
			 inputObject={current}
			 storeCode={props.storeCode}
			 setReport={setReport}
			 index={index}
			 staffGroup={props.staffGroup}
			 updateState={current.updaterFunction} 
			 styles={index > 0 && { marginTop: 14 }}
			/>
		    ))
		}
		<View style={ownStyles.actionContainer}>
		    <TouchableOpacity style={ownStyles.button} onPress={submitData}>
			<Text style={ownStyles.buttonlabel}>Actualizar</Text>
		    </TouchableOpacity>
		    <TouchableOpacity style={ownStyles.deleteButtonContainer}>
			<Image source={trashIcon} style={ownStyles.trashImage}/>
		    </TouchableOpacity>
		</View>
	    </View>
	</View>
    );
}

const ownStyles = StyleSheet.create({
    background: {
	position: 'absolute',
	zIndex: 100,
	top: 0,
	bottom: 0,
	right: 0,
	left: 0,
	backgroundColor: "rgba(51,51,51, 0.85)",
	alignItems: "center"
    },
    container: {
	backgroundColor: "white",
	marginTop: "10%",
	width: "90%",
	maxWidth: 400,
	padding: 20,
    },
    actionContainer: {
	flexDirection: "row",
	marginTop: 20,
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
	height: 70
    },
    button: {
	backgroundColor: colors.blue,
	borderRadius: 5,
	flex: 0.75,
	height: "100%",
	justifyContent: "center"
    },
    deleteButtonContainer: {
	backgroundColor: colors.red,
	paddingHorizontal: 20,
	height: "100%",
	borderRadius: 5,
	flex: 0.2,
	justifyContent: "center"
    },
    trashImage: {
	width: 30,
	height: 30,
	marginHorizontal: "auto",
    },
    buttonlabel: {
	color: "white",
	marginHorizontal: "auto",
	fontSize: 18,
	fontWeight: "bold"
    }
})
export default StaffUpdatePopup;
