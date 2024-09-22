import {
View,
Text,
TouchableOpacity,
ViewStyle,
} from "react-native";
import staffBox from "./styles";
import { 
getStaffCount,
translateTitle
} from "./staffBoxHelper";

const StaffBox = (props: Props.CurrentPopupProps & { styles: ViewStyle }) => {
    const { 
	infoTarget,
    } = props;

    const openPopup = (index: number,):void => {
	props.propsUpdater((prev: Props.CurrentPopupProps)=> ({
	    ...prev,
	    isOpen: true,
	    infoTarget: {
		...props.infoTarget,
		infoTargetIndex: index,
	    },
	}))
    }
    return(
	<View style={[staffBox.container, props.styles]}>

	    <Text style={staffBox.title}>{ translateTitle(props.infoTarget.infoTargetKey) }</Text>
	    <Text style={staffBox.secondTitle}>{ getStaffCount(props.state?.[props.infoTarget.infoTargetKey]?.length) }</Text>
	    <View style={{ marginHorizontal: 15 }}>
		{
			    props.state.current?.[infoTarget.infoTargetKey]?.map((operator: {
				name: string, position: string 
			    }, index: number) => {
				return (
				    <TouchableOpacity 
				     onPress={()=> openPopup(index)}
				     key={index}
				     style={[
					 staffBox.operatorNameContainer,
					 index === (props.state.current?.[infoTarget.infoTargetKey]?.length - 1) &&
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
	    <TouchableOpacity style={staffBox.button} onPress={()=> openPopup(undefined)}>
		<Text style={staffBox.buttonLabel}>Agregar</Text>
	    </TouchableOpacity>
	</View>
    )
}
export default StaffBox;
