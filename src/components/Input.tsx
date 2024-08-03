import { Text, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { timeFormat24hrs, numberOnlyFormat, wordsOrNumberFormat, lettersOnlyFormat, storeCodeFormat, lettersOrEmptyFormat } from "../constants/regexPatterns";
import { CustomInput } from "../constants/customTypes";

export default function Input(props: CustomInput) {
	const [ invalid, setInvalid ] = useState(false);
	const [ edited, setEdited ] = useState(false);
	const [ validationOutput, setValidationOutput ] = useState("");

	const validation = () => {
		switch(props.type) {
		case "time":
			if(edited && !timeFormat24hrs.test(props.input)) {
				setInvalid(true)
				setValidationOutput("Formato de horas invalido");
			}
			else {
				props.setValidationState(props.validationState.filter(value => value != props.type))
			}
			break;
		case "name":
			if(edited && !lettersOnlyFormat.test(props.input)) {
				setInvalid(true)
				setValidationOutput("Formato de nombre invalido");
			}
			else {
				props.setValidationState(props.validationState.filter(value => value != props.type))
			}
			break;
		case "annex":
			if(edited && !wordsOrNumberFormat.test(props.input)) {
				setInvalid(true)
				setValidationOutput("Formato de anexo o operador invalido");
			}
			else {
				props.setValidationState(props.validationState.filter(value => value != props.type))
			}
			break;
		case "storeCode":
			if(edited && !storeCodeFormat.test(props.input)) {
				setInvalid(true)
				setValidationOutput("Formato de codigo invalido");
			}
			else
				props.setValidationState(props.validationState.filter(value => value != props.type))
			break;
		case "number":
			if(edited && !numberOnlyFormat.test(props.input)) {
				setInvalid(true)
				setValidationOutput("Formato de numero invalido");
			}
			else {
				props.setValidationState(props.validationState.filter(value => value != props.type))
			}
			break;
		case "upscale":
			if(edited && !lettersOrEmptyFormat.test(props.input)) {
				setInvalid(true)
				setValidationOutput("Formato de nombre invalido");
			}
			else {
				props.setValidationState(props.validationState.filter(value => value != props.type))
			}
			break;
		default:
			console.log("Validation Error: Invalid Input Type");
			throw new Error("Validation error: Invalid Input Type");
		}
		
	}
	return (
		<View>
			<Text style={styles.label}>Hora:</Text>
			<TextInput cursorColor="gray" style={ invalid ? [styles.border, { borderColor: 'red' }] : styles.border} 
			onChangeText={(buffer) => props.setInput(buffer)} value={props.input} 
			onEndEditing={()=> validation()}
			onFocus={() => setEdited(true)}
			/>
			{ invalid ? <Text style={{ color: 'red' }}>{ validationOutput }</Text> : null } 
		</View>
	);
}

const styles = StyleSheet.create({
	label: {
		marginTop: 15,
		marginBottom: 2,
		fontWeight: "semibold",
		fontSize: 18,
	},	
	border: {
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#70717C",
		paddingVertical: 12,
		paddingHorizontal: 15,
		borderRadius: 5,
		color: "black"
	}
});

