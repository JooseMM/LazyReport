import {
View,
Text,
TouchableOpacity,
} from "react-native";
import staffBox from "./styles";
import { 
ControlRoomStaffGroup,
StaffBoxProps,
} from "../../constants/customTypes";
import { 
translateStaffGroupName,
translatedSmallQuantities
} from "./helper";
import { useState } from "react";

const StaffBox = (props: StaffBoxProps) => {
    const [ groupName ] = useState(translateStaffGroupName(props.utils.name as ControlRoomStaffGroup));
    const [ staffQuantity ] = useState(
	translatedSmallQuantities(props.state.state?.[props.utils.name]?.length)
    );
    const create = () => {
	props.state.popupControl({ 
	    isOpen: true,
	    utils: props.utils,
	    index: undefined
	})
    }
    return(
	<View style={[staffBox.container, props.styles]}>
	    <Text style={staffBox.title}>{ groupName }</Text>
	    <Text style={staffBox.secondTitle}>{ 
		staffQuantity + " " +
		(props.state.state?.[props.utils.name].length === 1 ? "Colaborador" : "Colaboradores") 
	    }</Text>
	    <View style={{ marginHorizontal: 15 }}>
		{
			    props.state.state?.[props.utils.name].map((operator: { name: string, position: string }, index: number) => {
				return (
				    <TouchableOpacity 
				     onPress={()=>props.state.popupControl({
					 isOpen: true,
					 utils: props.utils,
					 index: index
				     })}
				     key={index}
				     style={[
					 staffBox.operatorNameContainer,
					 index === (props.state.state?.[props.utils.name].length - 1) &&
					 { borderBottomWidth: 0 } 
				     ]}
				     >
					<Text style={staffBox.operatorName}>{operator.name}</Text>
					<Text style={staffBox.operatorPosition}>{operator.position}</Text>
				    </TouchableOpacity>
				)
			    })
		}
	    </View>
	    <TouchableOpacity style={staffBox.button} onPress={create}>
		<Text style={staffBox.buttonLabel}>Agregar</Text>
	    </TouchableOpacity>
	</View>
    )
}
export default StaffBox;
