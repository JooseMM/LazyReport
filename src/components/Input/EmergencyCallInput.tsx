import { useState } from "react";
import { 
View,
Text 
} from "react-native";
import Button from "../MainButton/MainButton";
import EmergencyPopup from "../EmergencyPopup";
interface props {
    navigator: any
}
const EmergencyCallInput = (props: props) => {
    const [ showPopup, setShowPopup ] = useState(false);

    return (
	<View>
	    <Text>Llamada de Emergencias:</Text>
	    <Button text="Modificar" onButtonPressed={()=> props.navigator.navigate("Popup")}/>
	</View>
    );
}

export default EmergencyCallInput;
