import {
View,
StyleSheet,
Text,
TouchableOpacity,
} from "react-native";
import { colors } from "../../constants/constantData";
import { useAuth } from "../../ApplicationState";
import { ControlRoomReport, StaffBoxProps } from "../../constants/customTypes";
import { translateStaffGroupName, translatedSmallQuantities } from "./helper";
import { useEffect, useState } from "react";

const StaffBox = (props: StaffBoxProps) => {
    const { report } = useAuth();
    const [ groupName ] = useState(translateStaffGroupName(props.staffGroupName));
    const [ currentReport, setCurrentReport ] = useState<ControlRoomReport>(
	report.controlRoomState
	    .reportState.find((store: ControlRoomReport)=> (
		store.storeCode === props.storeCode
	    )));
    const [ staffQuantity ] = useState(
	translatedSmallQuantities(currentReport[props.staffGroupName].length)
    );

    useEffect(()=> {
	setCurrentReport(
	    report.controlRoomState.reportState
	     .find((store: ControlRoomReport)=> store.storeCode === props.storeCode));
    },[report]);

    return(
	<View style={[ownStyles.container, props.styles]}>
	    <Text style={ownStyles.title}>{ groupName }</Text>
	    <Text style={ownStyles.secondTitle}>{ 
		staffQuantity +
		" " +
		(currentReport[props.staffGroupName]
		    .length === 1 ? "Colaborador" : "Colaboradores") 
	    }</Text>
	    <View style={{ marginHorizontal: 15 }}>
		{
		    report.controlRoomState.reportState.map((store: ControlRoomReport)=> {
			if(store.storeCode === props.storeCode) {
			    return store[props.staffGroupName].map((operator, index) => {
				return (
				    <TouchableOpacity 
				     onPress={()=>props.update([props.staffGroupName, index])}
				     key={index}
				     style={[
					 ownStyles.operatorNameContainer,
					 index == (store.bossStaff.length - 1) && { borderBottomWidth: 0 } 
				     ]}
				     >
					<Text style={ownStyles.operatorName}>{operator.name}</Text>
					<Text style={ownStyles.operatorPosition}>{operator.position}</Text>
				    </TouchableOpacity>
				)
			    })
			}
		    })
		}
	    </View>
	    <TouchableOpacity style={ownStyles.button} onPress={() => props.update([props.staffGroupName, null])}>
		<Text style={ownStyles.buttonLabel}>Agregar</Text>
	    </TouchableOpacity>
	</View>
    )
}
const ownStyles = StyleSheet.create({
    container: {
	backgroundColor: colors.statusContainerBackground,
	paddingVertical: 15,
	paddingHorizontal: 20,
	borderRadius: 5,
	borderWidth: 1,
	borderColor: colors.softGray
    },
    title: {
	color: colors.blue,
	fontWeight: "bold",
	fontSize: 22
    },
    secondTitle: {
	color: colors.paragraphText,
	fontWeight: "regular",
	fontSize: 16,
	position: "relative",
	bottom: 5
    },
    operatorName: {
	color: colors.blue,
	fontWeight: "bold",
	fontSize: 18,
	marginHorizontal: 10
    },
    operatorNameContainer: {
	paddingVertical: 10,
	borderBottomColor: colors.softGray,
	borderBottomWidth: 1
    },
    operatorPosition: {
	color: colors.paragraphText,
	fontWeight: "medium",
	fontSize: 14,
	marginHorizontal: 10,
	position: "relative",
	bottom: 2
    },
    button: {
	backgroundColor: colors.blue,
	borderRadius: 5,
	paddingVertical: 15,
	paddingHorizontal: 20,
	marginTop: 15
    },
    buttonLabel: {
	color: "white",
	fontSize: 18,
	fontWeight: "semibold",
	marginHorizontal: "auto"
    }
})
export default StaffBox;
