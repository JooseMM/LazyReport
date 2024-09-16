import { useEffect, useState } from "react";
import { ControlRoomStaffGroup, GetInitialStateParams, ReportStateUpdaters } from "../../constants/customTypes";
import { styles } from "./styles";
import { TextInput, View, Text} from "react-native";
import { colors } from "../../constants/constantData";
import { useAuth } from "../../ApplicationState";


const TextBaseInput = (props: ReportStateUpdaters) => {
	const { setReport, report } = useAuth();
	const { 
	    label,
	    placeholder,
	    validationKeyword,
	    getInitialState
	} = props.inputObject;
	const [ input, setInput ] = useState(getInitialState({
	    identifier: props.identifier,
	    index: props.index,
	    targetKey: props.keyProperty,
	    report: report
	}));
	const [ validInput, setValidInput ] = useState<boolean>(input !== null ? true : false);
	const [ edited, setEdited ] = useState<boolean>(input !== null ? true : false);
	const regExpValidator = props.inputObject.regExpValidator[0];

	useEffect(()=> {
	    if(input !== null) 
		props.updateParentValidation(prev => prev.filter(match => match !== label));
	    else
		props.updateParentValidation(prev => [...prev, label]);
	}, [])

	const validateInput = () => {
		if(input === null || input === undefined || input === "") {
		    setValidInput(false);
		    return setEdited(true);
		}
		const isValid = regExpValidator.test(input);
		if(isValid) {
		    props.updateState({
			identifier: props.identifier,
			setReport: setReport,
			index: props.index,
			keyProperty: props.keyProperty,
			newValue: input
		    });
		    props.updateParentValidation(prev => prev.filter(match => match !== label));
		}
		else {
		    props.updateParentValidation(prev => prev.includes(label) ? prev : [...prev, label]);
		}
		setValidInput(isValid);
		setEdited(true);
	};

	return (
		<View style={props.styles}>
			<Text style={styles.label} >{ label }</Text>
			<TextInput 
		    	placeholder={placeholder} 
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
