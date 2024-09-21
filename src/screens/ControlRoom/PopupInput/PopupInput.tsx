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
import { closeBox, trashIcon } from "./helper";

const StaffUpdatePopup = (props: ControlRoom.CurrentPopupInfo) => {
    const [ optionalIndex, setOptionalIndex ] = useState(props.optionalIndex)
    const [ validation, setValidation ] = useState<Array<"name" | "position">>([]);
    useEffect(()=> {
    },[])
    return(
	<View style={popupInput.background}>
	    <View style={popupInput.container}>
		<TouchableOpacity style={popupInput.closeButton} onPress={}>
		    <Image source={require("../../../../assets/close.svg")} style={{ width: 35, height: 35 }}/>
		</TouchableOpacity>
		{
		    STAFF_UPDATE.map((current:ControlRoom.StaffInfo, index: number)=> (
			<TextBaseInput 
			 label={current.label}
			 placeholder={current.placeholder}
			 state={props.state}
			 key={index}
			 target={props.infoTarget}
			 validation={{ current: validation, updater: setValidation }}
			 contentType={current.type}
			 styles={index > 0 && { marginTop: 14 }}
			/>
		    ))
		}
		<View style={popupInput.actionContainer}>
		    <TouchableOpacity
		     style={[popupInput.button, validation.length > 0 && popupInput.invalidButton]} disabled={validation.length > 0}
		     onPress={}
		    >
			<Text style={popupInput.buttonlabel}>Actualizar</Text>
		    </TouchableOpacity>
		    <TouchableOpacity
		     style={popupInput.deleteButtonContainer}
		     onPress={() => closeBox({
		    validationState: { 
			current: validation,
			updater: setValidation,
		    },
		    state: {
			current: props.state.current,
			updater: props.state.updater
		    },
		    popupControl: {
			updater: props.state.popupControl
		    },
		    indexState: { current: currentIndex, updater: setCurrentIndex }
		})}
		    >
			<Image source={trashIcon} style={popupInput.trashImage}/>
		    </TouchableOpacity>
		</View>
	    </View>
	</View>
    );
}

export default StaffUpdatePopup;
