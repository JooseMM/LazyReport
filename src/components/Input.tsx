import { Text, View, TextInput, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { timeFormat24hrs, numberOnlyFormat, wordsOrNumberFormat, lettersOnlyFormat, storeCodeFormat, lettersOrEmptyFormat } from "../constants/regexPatterns";
import { CustomInput, ValidationOutput } from "../constants/customTypes";


export default function Input(props: CustomInput) {
	const [ invalid, setInvalid ] = useState(false);
	const [ outputKeyword, setOutputKeyword ] = useState<string>();
	const [ edited, setEdited ] = useState(false);

	const validation = () => {
		switch(props.type) {
		case "time":
			setInvalid(edited && timeFormat24hrs.test(props.input) ? false : true)
			setOutputKeyword("horas");
			console.log("time fire");
			break;
		case "name":
			setInvalid(edited && lettersOnlyFormat.test(props.input) ? false : true)
			setOutputKeyword("nombre");
			break;
		case "annex":
			setInvalid(edited && wordsOrNumberFormat.test(props.input) ? false : true)
			setOutputKeyword("anexo o operador");
			break;
		case "storeCode":
			setInvalid(edited && storeCodeFormat.test(props.input) ? false : true)
			setOutputKeyword("codigo");
			break;
		case "number":
			setInvalid(edited && numberOnlyFormat.test(props.input) ? false : true)
			setOutputKeyword("numero");
			break;
		case "upscale":
			setInvalid(lettersOrEmptyFormat.test(props.input) ? false : true)
			setOutputKeyword("nombre");
			break;
		default:
			console.log("Validation Error: Invalid Input Type");
			throw new Error("Validation error: Invalid Input Type");
		}

		if(invalid && !props.invalidInput.includes(outputKeyword as ValidationOutput)) {
			setValidationError();
			console.log("fire");
		}
		else 
			props.setInvalidInput(props.invalidInput.filter(value => value !== props.type));
	}

	const setValidationError = () => {
		if(props.type != "upscale" && "number")
			props.setInvalidInput([...props.invalidInput, props.type]);
	}

	useEffect(() => {
		setValidationError();
		console.log(props.type);
		console.log(props.invalidInput);
	}, []);
	return (
		<View>
			<Text style={styles.label}>{ props.label + ":" }</Text>
			<TextInput placeholder={props.placeholder} placeholderTextColor="gray" cursorColor="gray" style={ invalid ? [styles.border, { borderColor: 'red' }] : styles.border} 
			onChangeText={(buffer) => props.setInput(buffer)} value={props.input} 
			onEndEditing={validation}
			onFocus={() => setEdited(true)}
			/>
			{ invalid ? <Text style={{ color: 'red' }}>Formato de{ " " + outputKeyword }Incorrecto</Text> : null } 
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

