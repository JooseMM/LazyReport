import { useState } from "react";
import { EMERGENCY_CALL_INFO } from "../constants/constantData";
import { 
View,
StyleSheet,
Text,
TextInput,
Pressable
} from "react-native";
import { useAuth } from "../ApplicationState";
import { Image } from "expo-image";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";

const EmergencyPopup = ({ navigation }) => {
    const { report } = useAuth();
    //const editing = props.index ? report.emergencyCall[props.index] : "";
    const [ time, setTime ] = useState(new Date().toLocaleString('es-MX', { hour12: false }));
    //const [ annex, setAnnex ] = useState(editing != "" ? editing.annex : editing);
    const [ validationState, setValidationState ] = useState([{ touch: false, valid: false }, { touch: false, valid: false } ]);

    const validateData = (type: number) => {
	/*
	 * an array holds the regex functions 
	 * wich positions correspond to:
	 * 0 => time, 1 => annex; 
	 */
	const validatorArray= EMERGENCY_CALL_INFO.regExpValidator;

	/*
	if(type > 1 && validatorArray[type].test(annex)) {
	    const newArray = [ { touch: true, valid: true },...validationState]
	    setValidationState(newArray);
	}
	*/
    }

    const onChange = (event, selectedTime) => {
	setTime(selectedTime);
    }

    const showPicker = () => {
	DateTimePickerAndroid.open({
	    value: new Date(time),
	    onChange,
	    mode: "time",
	    is24Hour: true
	})
    }


    return (
	    <View style={styles.container}>
		<Text>Press me</Text>
	    </View>
    );
}

/*
 *
	<View style={styles.darkBackground}>
	    <View style={styles.container}>
		<Text>Hora de Llamada:</Text>
		<View>
		    <TextInput placeholder="Ejem. 03:05" value={time} onEndEditing={null} onChangeText={(buffer) => setTime(buffer)}/>
		    <Pressable onPress={()=> navigation.navigate("MyModal")}>
			<Text>Press me</Text>
		    </Pressable>
		</View>
		{
		    validationState[0].touch && !validationState[0].valid ?
		    <Text>Formato de horas invalido</Text> : null 
		}
		<Text>Operador o Anexo:</Text>
		<TextInput placeholder="Ejem. Carabinero Luis Orellana" value={annex} onEndEditing={null} onChangeText={(buffer) => setTime(buffer)}/>
		{
		    validationState[1].touch && !validationState[1].valid ?
		    <Text>Formato de operador o anexo invalido</Text> : null 
		}
	    </View>
	</View>
 * */
const styles = StyleSheet.create({
    container: {
	backgroundColor: "white",
	width: "90%",
	marginHorizontal: "auto",
	marginTop: "50%"
    }
})
export default EmergencyPopup;
