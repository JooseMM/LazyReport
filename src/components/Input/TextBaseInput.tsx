import { useState } from "react";
import { useAuth } from "../../ApplicationState";
import { ReportStateUpdaters, InputID } from "../../constants/customTypes";
import { styles } from "./styles";
import { TextInput, View, Text} from "react-native";
import { colors } from "../../constants/constantData";


const TextBaseInput = (props: ReportStateUpdaters) => {
	const [ input, setInput ] = useState<string>("");
	const [ validInput, setValidInput ] = useState<boolean>(false);
	const [ edited, setEdited ] = useState<boolean>(false);
	const { id, label, placeholder, validationKeyword } = props.inputObject;
	const regExpValidator = props.inputObject.regExpValidator[0];
	const { setReport } = useAuth();

	const validateInput = () => {
		const isValid = regExpValidator.test(input);

		if(isValid)
			setReport(prev => {
			    return prev.map(report => {
				if(report.id == props.reportIdentifier) {
				    return ({...report, [id]: input});
				}
				return report;
			    })
			});
		else
			setReport(prev => {
			    return prev.map(report => {
				if(report.id == props.reportIdentifier) {
				    return ({...report, [id]: ""});
				}
				return report;
			    })
			});

		setValidInput(isValid);
		setEdited(true);
	};

	return (
		<View>
			<Text style={styles.label} >{ label }</Text>
			<TextInput placeholder={placeholder} 
			placeholderTextColor="gray"
			cursorColor="gray"
			style={ edited && !validInput? [styles.border, { borderColor: colors.red }] : styles.border} 
			onChangeText={(buffer) => setInput(buffer)} value={input} 
			onEndEditing={validateInput}
			onFocus={()=> setEdited(false)}
			/>
			{ edited && !validInput ? <Text style={{color: "red"}}>Formato de { validationKeyword } invalido</Text> : null}
		</View>
	);
}

export default TextBaseInput;
