import { Text, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";
import { timeFormat24hrs, numberOnlyFormat, wordsOrNumberFormat, lettersOnlyFormat, storeCodeFormat, lettersOrEmptyFormat } from "../constants/regexPatterns";
import { CustomInput } from "../constants/customTypes";


export default function Input(props: CustomInput) {
	const [ edited, setEdited ] = useState(false);

	const validateInput = (isValid: boolean) => { 
		if(isValid) 
			props.setInvalidState(props.invalidState.filter(value => value != props.input));
		else if(!props.invalidState.includes(props.label))
			props.setInvalidState([...props.invalidState, props.label]);
	}

	const validation = () => {
		switch(props.type) {
		case "time":
			validateInput(timeFormat24hrs.test(props.input));
			break;
		case "name":
			validateInput(lettersOnlyFormat.test(props.input))
			break;
		case "annex":
			validateInput(wordsOrNumberFormat.test(props.input))
			break;
		case "storeCode":
			validateInput(storeCodeFormat.test(props.input))
			break;
		case "number":
			validateInput(numberOnlyFormat.test(props.input))
			break;
		case "upscale":
			validateInput(lettersOrEmptyFormat.test(props.input))
			break;
		default:
			throw new Error("Validation error: Invalid Input Type");
		}
	};
			
	return (
		<View>
			<Text style={styles.label}>{ props.label + ":" }</Text>
			<TextInput placeholder={props.placeholder} placeholderTextColor="gray" cursorColor="gray" style={ props.invalidState.includes(props.label) && edited ? [styles.border, { borderColor: 'red' }] : styles.border} 
			onChangeText={(buffer) => props.setInput(buffer)} value={props.input} 
			onEndEditing={() => validateInput(true)}
			onFocus={() => setEdited(true)}
			/>
			{ props.invalidState.includes(props.label) && edited ? <Text style={{ color: 'red' }}>Formato de { props.label.toLowerCase() } Incorrecto</Text> : null } 
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

