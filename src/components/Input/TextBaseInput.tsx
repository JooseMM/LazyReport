import { useEffect, useState } from "react";
import { textInputStyles } from "./styles";
import { 
TextInput,
View,
Text
} from "react-native";
import { colors } from "../../constants/constantData";
import { shouldUpdateState, validation, validationUserOutput } from "./textBaseInputHelper";


const TextBaseInput = (props: Input.Text) => {
	const { 
	    label,
	    placeholder,
	    state,
	    target,
	    contentType,
	} = props;
	const [ input, setInput ] = useState<string>(); // get initial data
	const [ selfValidation, setSelfValidation ] = useState<boolean>(input !== null ? true : false);
	const [ edited, setEdited ] = useState<boolean>(input !== null ? true : false);

	const onEndEditing = () => {
	    const result = validation({
		parentValidationUpdater: props.validation.updater,
		ownValidationState: setSelfValidation,
		input: input,
		label: label,
		contentType: contentType,
	    })

	    shouldUpdateState({
		parentState: state,
		validationResult: result,
		target: target,
		newValue: input
	    });
	};

	return (
		<View style={props.styles}>
			<Text style={textInputStyles.label} >{ label }</Text>
			<TextInput 
		    	placeholder={placeholder} 
		    	placeholderTextColor="gray"
		    	cursorColor="gray"
		    	style={ edited && !setSelfValidation? [textInputStyles.border, { borderColor: colors.red }] : textInputStyles.border} 
		    	onChangeText={(buffer) => setInput(buffer)} value={input} 
		    	onEndEditing={onEndEditing}
		    	onFocus={()=> setEdited(false)}
			/>
			{ edited && !setSelfValidation ? <Text style={{color: "red", position: "absolute", top: "100%" }}>{ validationUserOutput(contentType) }</Text> : null}
		</View>
	);
}

export default TextBaseInput;
