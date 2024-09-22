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
    const [ invalidCounter, setInvalidCounter ] = useState<string[]>([]); 
    const [ currentIndex, setCurrentIndex ] = useState<number>(props.infoTarget.infoTargetIndex);
    useEffect(()=> {
	if(currentIndex == null)
	    setCurrentIndex(
		createEmptyElement({
		    state: props.state,
		    infoTarget: props.infoTarget.infoTargetKey
		}) 
	    );
    },[])
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
			 target={{ ...props.infoTarget, infoTargetOptional: current.optinalKey }}
			 validation={{ current: invalidCounter, updater: setInvalidCounter }}
			 contentType={current.contentType}
			 styles={index > 0 && { marginTop: 14 }}
			/>
		    ))
		}
		<View style={popupInput.actionContainer}>
		    <TouchableOpacity
		     style={[popupInput.button, invalidCounter.length > 0 && popupInput.invalidButton]} disabled={invalidCounter.length > 0}
		     onPress={()=> onFinish({
			 ...props,
			 infoTarget: {
			     ...props.infoTarget,
			     infoTargetOptional: currentIndex 
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
			     infoTargetOptional: currentIndex 
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
