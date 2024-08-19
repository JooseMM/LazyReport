import { useState } from "react";
import { EMERGENCY_CALL_INFO } from "../../constants/constantData"; 
import { styles } from "./styles";
import { TextInput, View, Text } from "react-native";
import { useAuth } from "../../ApplicationState";
import { DetainedReportData } from "../../constants/customTypes";


const EmergencyCallInput = () => {
    const [ time, setTime ] = useState<string>("");
    const [ annex, setAnnex ] = useState<string>("");
    const [ validTime, setValidTime ] = useState<boolean>(false);
    const [ validAnnex, setValidAnnex ] = useState<boolean>(false);
    const [ editedTime, setEditedTime ] = useState<boolean>(false);
    const [ editedAnnex, setEditedAnnex ] = useState<boolean>(false);
    const { label, placeholder, validationKeyword } = EMERGENCY_CALL_INFO
    const annexValidator = EMERGENCY_CALL_INFO.regExpValidator[0]
    const timeValidator = EMERGENCY_CALL_INFO.regExpValidator[1]
    const { setReport } = useAuth();


    const validate = () => {
	    setValidTime(timeValidator.test(time))
	    setValidAnnex(annexValidator.test(annex))

	    if(validAnnex && validTime)
		setReport((prev: DetainedReportData)=> ({...prev, emergencyCall: [{ time: time, annex: annex }]}))
	    else
		setReport((prev: DetainedReportData)=> ({...prev, emergencyCall: []}))
    };
    return (
	<View>
	    <View>
		<Text style={styles.label}>Hora de Llamada a Emergencias:</Text>
		<TextInput 
		placeholder="Ejem: 13:40"
		cursorColor="gray"
		style={ editedTime && !validTime? [styles.border, { borderColor: 'red' }] : styles.border} 
		onChangeText={(buffer) => setTime(buffer)} value={time} 
		onEndEditing={validate}
		onFocus={()=> setEditedTime(false)}
		/>
		{ editedTime && !validTime ? <Text style={{color: "red"}}>Formato de tiempo invalido</Text> : null}
 
	    </View>
	    <View style={{ marginTop: 10 }}>
		<Text style={styles.label}>{ label }</Text>
		<TextInput 
		placeholder={placeholder}
		cursorColor="gray"
		style={ editedAnnex && !validAnnex? [styles.border, { borderColor: 'red' }] : styles.border} 
		onChangeText={(buffer) => setAnnex(buffer)} value={annex} 
		onEndEditing={validate}
		onFocus={()=> setEditedAnnex(false)}
		/>
		{ editedAnnex && !validAnnex ? <Text style={{color: "red"}}>Formato de { validationKeyword } invalido</Text> : null}
	    </View>
	</View>
    );
}

export default EmergencyCallInput;
