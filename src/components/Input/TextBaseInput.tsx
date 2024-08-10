import { useState } from "react";
import { ReportStateUpdaters, InputID } from "../../constants/customTypes";
import { styles } from "./styles";
import { TextInput, View, Text} from "react-native";


export default function TextBaseInput(props: ReportStateUpdaters) {
	const [ input, setInput ] = useState<string>("");
	const [ validInput, setValidInput ] = useState<boolean>(false);
	const [ edited, setEdited ] = useState<boolean>(false);
	const { id, label, placeholder, validationKeyword, regExpValidator } = props.inputObject;

	const validateInput = () => {
		const isValid = regExpValidator.test(input);

		if(isValid) {
			props.updateInvalidInputState((prev: Array<InputID>)=> prev.filter(match=> match != id));
			props.updateReportState(prev => ({ ...prev, [id]: input}));
		}
		else {
			props.updateInvalidInputState((prev:Array<InputID>) => prev.includes(id) ? [...prev] : [...prev, id] );
		}

		setValidInput(isValid);
		setEdited(true);
	};

	return (
		<View>
			<Text style={styles.label} >{ label }</Text>
			<TextInput placeholder={placeholder} 
			placeholderTextColor="gray"
			cursorColor="gray"
			style={ edited && !validInput? [styles.border, { borderColor: 'red' }] : styles.border} 
			onChangeText={(buffer) => setInput(buffer)} value={input} 
			onEndEditing={validateInput}
			onFocus={()=> setEdited(false)}
			/>
			{ edited && !validInput ? <Text style={{color: "red"}}>Formato de { validationKeyword } invalido</Text> : null}
		</View>
	);
}

