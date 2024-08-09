import { Text, View, TextInput, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { timeFormat24hrs, numberOnlyFormat, wordsOrNumberFormat, lettersOnlyFormat, storeCodeFormat, lettersOrEmptyFormat } from "../constants/regexPatterns";
import { CustomInput, DetainedReportData } from "../constants/customTypes";


export default function Input(props: CustomInput) {
	const [ input, setInput ] = useState<string>("");
	const [ validInput, setValidInput ] = useState<boolean>(false);
	const [ inputName, setInputName ] = useState<string>();
	const [ edited, setEdited ] = useState<boolean>(false);

	// use useMemo later
	useEffect(()=> {
		switch(props.type) {
		case "entryTime":
			setInputName("hora");
			break;
		case "localNumber":
			setInputName("codigo de local");
			break;
		case "localFormat":
			setInputName("formato");
			break;
		case "localName":
			setInputName("nombre de local");
			break;
		case "isUnderage":
			setInputName("Es menor de edad?");
			break;
		case "emergencyCallTime":
			setInputName("Hora de llamada a emergencias (A, B, C)");
			break;
		case "firstUpscale":
			setInputName("escalamiento principal");
			break;
		case "secondUpscale":
			setInputName("escalamiento secundario");
			break;
		case "thirdUpscale":
			setInputName("escalamiento terciario");
		default:
			throw new Error("Validation error: Invalid Input Type");
	}
	}, [])


	const validation = () :boolean => {
		switch(props.type) {
		case "entryTime":
			if(timeFormat24hrs.test(input)) {
				props.setReport((prev: DetainedReportData) => {
					const temp = prev;
					temp.time = input;

					return temp;
				});
				setValidInput(true)
				console.log("fire");
			}
			break;
		case "localNumber":
			return edited && numberOnlyFormat.test(input);
		case "localName":
			return edited && lettersOnlyFormat.test(input);
		case "informantName":
			return edited && lettersOnlyFormat.test(input);
		case "emergencyCallTime":
			return edited && timeFormat24hrs.test(input);
		case "callOperator":
			return edited && wordsOrNumberFormat.test(input);
		case "firstUpscale":
			return edited && lettersOrEmptyFormat.test(input);
		case "secondUpscale":
			return edited && lettersOrEmptyFormat.test(input);
		case "thirdUpscale":
			return edited && lettersOrEmptyFormat.test(input);
		default: 
			return false;
		}
	};
	const updateParentValidationState = (isInputValid: boolean):void => {

	}
			
	return (
		<View>
			<Text style={styles.label}>{ inputName + ":" }</Text>
			<TextInput placeholder={props.placeholder} placeholderTextColor="gray" cursorColor="gray" style={ edited && !validInput? [styles.border, { borderColor: 'red' }] : styles.border} 
			onChangeText={(buffer) => setInput(buffer)} value={input} 
			onEndEditing={() => console.log("edited")}
			onFocus={() => setValidInput(true)}
			/>
			{ edited && !validInput ? <Text style={{ color: 'red' }}>Formato de { inputName } Incorrecto</Text> : null } 
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

