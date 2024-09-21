import {
View,
Text,
TouchableOpacity,
ViewStyle,
} from "react-native";
import staffBox from "./styles";
import { 
translateStaffGroupName,
translatedSmallQuantities
} from "./helper";
import { useState } from "react";

const StaffBox = (props: Props.CurrentPopupProps & { styles: ViewStyle}) => {
    const [ groupName ] = useState();
    const [ staffQuantity ] = useState(/*translatedSmallQuantities(props.state.state?.[props.utils.staffName]?.length*/);
    const { 
	state,
	infoTarget,
    } = props;

    const openPopup = (index: number):void => {
	
    }
    return(
	<View style={[staffBox.container, props.styles]}>
	    <Text style={staffBox.title}>{ groupName }</Text>
	    <Text style={staffBox.secondTitle}>{ 
		/*
		staffQuantity + " " +
		(props.state.state?.[props.utils.staffName].length === 1 ? "Colaborador" : "Colaboradores") 
		*/
	    }</Text>
	    <View style={{ marginHorizontal: 15 }}>
		{
			    state.current?.[props.infoTarget.infoTarget].map((operator: { name: string, position: string }, index: number) => {
				return (
				    <TouchableOpacity 
				     onPress={()=> openPopup(index)}
				     key={index}
				     style={[
					 staffBox.operatorNameContainer,
					 index === (state.current?.[infoTarget.infoTarget]?.length - 1) &&
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
	    <TouchableOpacity style={staffBox.button} onPress={()=> openPopup(index)}>
		<Text style={staffBox.buttonLabel}>Agregar</Text>
	    </TouchableOpacity>
	</View>
    )
}
export default StaffBox;
