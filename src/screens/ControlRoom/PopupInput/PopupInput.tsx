import {
View,
Text,
TouchableOpacity,
StyleSheet
} from "react-native";
import {
ControlRoomReport,
InputObject,
AppReportState,
StaffUpdatedPopupProps
} from "../../../constants/customTypes";
import TextBaseInput from "../../../components/Input/TextBaseInput";
import { STAFF_UPDATE, colors } from "../../../constants/constantData";
import { useAuth } from "../../../ApplicationState";
import { useEffect, useState } from "react";
import { Image } from "expo-image";

const StaffUpdatePopup = (props: StaffUpdatedPopupProps) => {
    const { setReport } = useAuth();
    const [ currentIndex, setCurrentIndex ] = useState(props.index)
    const trashIcon = require("../../../../assets/trash.svg");
    const [ validation, setValidation ] = useState<Array<"name" | "position">>([]);

    const submitData = ()=> {
	if(validation.length === 0)
	    props.toggleVisibility([]);
    };
    const deleteCurrentInfo = () => {
	    setReport((prev: AppReportState)=> ({
		...prev,
		controlRoomState: ({
		    ...prev.controlRoomState,
		    reportState: prev.controlRoomState.reportState.map((current: ControlRoomReport)=> {
			if(current.storeCode === props.storeCode && currentIndex !== undefined) {
			    current[props.staffGroup] = 
				current[props.staffGroup].filter((_match, index) => index !== currentIndex);
			}
			return current;
		    })
		})
		    
	    }));
    }
    const closeBox = () => {
	deleteCurrentInfo();
	props.toggleVisibility([]);
    }
    useEffect(()=> {
	if(currentIndex === undefined || currentIndex === null) {
	    setReport((prev: AppReportState)=> ({
		...prev,
		controlRoomState: ({
		    ...prev.controlRoomState,
		    reportState: prev.controlRoomState.reportState.map((current: ControlRoomReport)=> {
			if(current.storeCode === props.storeCode) {
			    current[props.staffGroup] = [
				...current[props.staffGroup],
				{ name: undefined, position: undefined } 
			    ];
			    setCurrentIndex(
				current[props.staffGroup]
				 .length > 0 ? current[props.staffGroup].length - 1 : 0
			    )
			}
			return current;
		    })
		}) 
	    })
	    );
	}
    },[])
    return(
	<View style={ownStyles.background}>
	    <View style={ownStyles.container}>
		<TouchableOpacity style={ownStyles.closeButton} onPress={closeBox}>
		    <Image source={require("../../../../assets/close.svg")} style={{ width: 35, height: 35 }}/>
		</TouchableOpacity>
		{
		    STAFF_UPDATE.map((current: InputObject, index: number)=> (
			<TextBaseInput 
			 updateParentValidation={setValidation}
			 key={index}
			 inputObject={current}
			 storeCode={props.storeCode}
			 index={currentIndex}
			 keyProperty={props.staffGroup}
			 updateState={current.updaterFunction} 
			 styles={index > 0 && { marginTop: 14 }}
			/>
		    ))
		}
		<View style={ownStyles.actionContainer}>
		    <TouchableOpacity
		     style={[ownStyles.button, validation.length > 0 && ownStyles.invalidButton]} disabled={validation.length > 0}
		     onPress={submitData}
		    >
			<Text style={ownStyles.buttonlabel}>Actualizar</Text>
		    </TouchableOpacity>
		    <TouchableOpacity
		     style={ownStyles.deleteButtonContainer}
		     onPress={closeBox}
		    >
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
    invalidButton: {
	opacity: 0.6,
	backgroundColor: 'gray' 
    },
    container: {
	position: "relative",
	backgroundColor: "white",
	marginTop: "10%",
	width: "90%",
	maxWidth: 400,
	padding: 20,
	borderRadius: 5
    },
    actionContainer: {
	flexDirection: "row",
	marginTop: 25,
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
    },
    closeButton: {
	position: "relative",
	alignSelf: "flex-end",
	zIndex: 100
    }
})
export default StaffUpdatePopup;
