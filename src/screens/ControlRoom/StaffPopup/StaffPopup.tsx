import {
View,
Text,
TouchableOpacity,
} from "react-native";
import popupInput from "./styles";
import TextBaseInput from "../../../components/Input/TextBaseInput";
import { STAFF_UPDATE } from "../../../constants/constantData";
import {
useEffect,
useState
} from "react";
import { Image } from "expo-image";
import { TRASH_SOURCE, createEmptyElement, onCloseOrDelete, onFinish } from "./staffPopupHelper";

const StaffPopup = (props: Props.CurrentPopupProps) => {
    const [ invalidCounter, setInvalidCounter ] = useState<boolean>(); 
    const [ currentIndex ] = useState<number>(
	props.infoTarget.infoTargetIndex == null ? 
		createEmptyElement({
		    state: props.state,
		    infoTarget: props.infoTarget.infoTarget 
		}) // returns the index of the new created element
		: props.infoTarget.infoTargetIndex
    );
    return(
	<View style={popupInput.background}>
	    <View style={popupInput.container}>
		<TouchableOpacity style={popupInput.closeButton} onPress={()=> onCloseOrDelete(props)}>
		    <Image source={require("../../../../assets/close.svg")} style={{ width: 35, height: 35 }}/>
		</TouchableOpacity>
		{
		    STAFF_UPDATE.map((current:ControlRoom.StaffInfo, index: number)=> (
			<TextBaseInput 
			 label={current.label}
			 placeholder={current.placeholder}
			 state={props.state}
			 key={index}
			 target={{ ...props.infoTarget, infoTargetIndex: currentIndex }}
			 validation={{ current: invalidCounter, updater: setInvalidCounter }}
			 contentType={current.contentType}
			 styles={index > 0 && { marginTop: 14 }}
			/>
		    ))
		}
		<View style={popupInput.actionContainer}>
		    <TouchableOpacity
		     style={[popupInput.button, invalidCounter && popupInput.invalidButton]} disabled={invalidCounter}
		     onPress={()=> onFinish({
			 ...props,
			 infoTarget: {
			     ...props.infoTarget,
			     infoTargetIndex: currentIndex 
			 },
			 validData: invalidCounter 
		     })}
		    >
			<Text style={popupInput.buttonlabel}>Actualizar</Text>
		    </TouchableOpacity>
		    <TouchableOpacity
		     style={popupInput.deleteButtonContainer}
		     onPress={()=> onCloseOrDelete({
			 ...props,
			 infoTarget: {
			     ...props.infoTarget,
			     infoTargetIndex: currentIndex 
			 }
		     })}
		    >
			<Image source={TRASH_SOURCE} style={popupInput.trashImage}/>
		    </TouchableOpacity>
		</View>
	    </View>
	</View>
    );
}

export default StaffPopup;
