import { useState } from "react";
import { ReportStateUpdaters } from "../../constants/customTypes";
import { styles } from "./styles";
import { TextInput, View, Text} from "react-native";
import { colors } from "../../constants/constantData";


const TextBaseInput = (props: ReportStateUpdaters) => {
	const [ input, setInput ] = useState<string>("");
	const [ validInput, setValidInput ] = useState<boolean>(false);
	const [ edited, setEdited ] = useState<boolean>(false);
	const { 
	    label,
	    placeholder,
	    validationKeyword,
	} = props.inputObject;
	const regExpValidator = props.inputObject.regExpValidator[0];

	const validateInput = () => {
		const isValid = regExpValidator.test(input);

		if(isValid) {
		    props.updateState({
			storeCode: props.storeCode,
			setReport: props.setReport,
			index: props.index,
			staffGroup: props.staffGroup,
			newValue: input
		    });
		}
		setValidInput(isValid);
		setEdited(true);
	};

	return (
		<View style={props.styles}>
			<Text style={styles.label} >{ label }</Text>
			<TextInput placeholder={placeholder} 
			placeholderTextColor="gray"
			cursorColor="gray"
			style={ edited && !validInput? [styles.border, { borderColor: colors.red }] : styles.border} 
			onChangeText={(buffer) => setInput(buffer)} value={input} 
			onEndEditing={validateInput}
			onFocus={()=> setEdited(false)}
			/>
			{ edited && !validInput ? <Text style={{color: "red", position: "absolute", top: "100%" }}>Formato de { validationKeyword } invalido</Text> : null}
		</View>
	);
}

export default TextBaseInput;
