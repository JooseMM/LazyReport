import {
View,
Text,
TouchableOpacity,
} from "react-native";
import {
InputObject,
StaffUpdatedPopupProps
} from "../../../constants/customTypes";
import popupInput from "./styles";
import TextBaseInput from "../../../components/Input/TextBaseInput";
import { STAFF_UPDATE } from "../../../constants/constantData";
import {
useEffect,
useState
} from "react";
import { Image } from "expo-image";
import { closeBox, trashIcon } from "./helper";

const StaffUpdatePopup = (props: StaffUpdatedPopupProps) => {
    const [ currentIndex, setCurrentIndex ] = useState(props.index)
    const [ validation, setValidation ] = useState<Array<"name" | "position">>([]);

    const submitData = () => {
    };
    useEffect(()=> {
	props.utils.methods.createEmptyElement({
	    state: { current: props.state.current, updater: props.state.updater },
	    indexState: { current: currentIndex, updater: setCurrentIndex },
	    targetProperty: props.utils.name
	})
    },[])
    return(
	<View style={popupInput.background}>
	    <View style={popupInput.container}>
		<TouchableOpacity style={popupInput.closeButton} onPress={() => closeBox({
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
		})}>
		    <Image source={require("../../../../assets/close.svg")} style={{ width: 35, height: 35 }}/>
		</TouchableOpacity>
		{
		    STAFF_UPDATE.map((current: InputObject, index: number)=> (
			<TextBaseInput 
			 updateParentValidation={setValidation}
			 key={index}
			 inputObject={current}
			 targetIndexElement={currentIndex}
			 state={{ current: props.state.current, updater: props.state.updater }}
			 styles={index > 0 && { marginTop: 14 }}
			/>
		    ))
		}
		<View style={popupInput.actionContainer}>
		    <TouchableOpacity
		     style={[popupInput.button, validation.length > 0 && popupInput.invalidButton]} disabled={validation.length > 0}
		     onPress={submitData}
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
