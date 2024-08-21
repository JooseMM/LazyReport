import { 
View,
Text 
} from "react-native";
import Button from "../MainButton/MainButton";
import { useNavigation } from "@react-navigation/native";


const EmergencyCallInput = () => {
    const navigator = useNavigation<any>();

    return (
	<View>
	    <Text>Llamada de Emergencias:</Text>
		<Button text="Modificar" onButtonPressed={()=> navigator.navigate("AddEmergencyCall")}/>
	</View>
    );
}

export default EmergencyCallInput;
