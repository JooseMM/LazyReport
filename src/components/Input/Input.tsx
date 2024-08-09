import { useState } from "react";
import { ReportStateUpdaters, InputID } from "../../constants/customTypes";
import { INPUT_ARRAY, selectFormats } from "../../constants/constantData";
import { PickerInput } from "./PickerInput";
import { styles } from "./styles";
import { TextInput, View, Text} from "react-native";


export default function Input(props: ReportStateUpdaters) {
	const [ input, setInput ] = useState<string>("");
	const [ validInput, setValidInput ] = useState<boolean>(false);
	const [ edited, setEdited ] = useState<boolean>(false);
	const { id, label, placeholder, validationKeyword, regExpValidator } = INPUT_ARRAY[props.arrayIndex]

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
		id === "storeFormat" || id === "isUnderage" ? 
			<PickerInput label={label} input={input} setInput={setInput} id={id}/>
			:
				(
					<View>
						<Text style={styles.label} >{ label }</Text>
						<TextInput placeholder={placeholder} placeholderTextColor="gray" cursorColor="gray" style={ edited && !validInput? [styles.border, { borderColor: 'red' }] : styles.border} 
						onChangeText={(buffer) => setInput(buffer)} value={input} 
						onEndEditing={validateInput}
						onFocus={()=> setEdited(false)}
						/>
						{ edited && !validInput ? <Text style={{color: "red"}}>Formato de { validationKeyword } invalido</Text> : null}
					</View>
			)
	);
}

