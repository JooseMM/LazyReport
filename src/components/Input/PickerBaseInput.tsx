import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { InitialStateConnectionHealthProps, ReportStateUpdaters, UpdateStateConnectionHealthProps, UtilMethods } from  "../../constants/customTypes";
import { baseStyles } from "./styles";
import { colors } from "../../constants/constantData";

type Utils = {
    utils : {
	targetProperty: string
	methods: {
	    getInitialState: (props: InitialStateConnectionHealthProps) => string
	    updateState: (props: UpdateStateConnectionHealthProps) => void
	}
    }
}
export const PickerBaseInput = (props: ReportStateUpdaters & Utils) => {
	const { 
	    label,
	    options,
	    validationKeyword,
	} = props.inputObject;
	const [ selected, setSelected ] = useState<string>(
	    props.utils.methods.getInitialState({
		state: { current:  props.state.current },
	    })
	);
	const [ valid, setValid ] = useState(false);
	const [ dirty, setDirty ] = useState(false);

	useEffect(()=> {
	    if(typeof selected == "object" && selected === null) {
		setValid(false);
		setDirty(true);
	    }
	    if(typeof selected == "object" && selected === undefined) {
		setValid(false);
		setDirty(false);
	    }
	    if(typeof selected != "object" && selected != null || selected != undefined) {
		setDirty(true);
		setValid(true);
	    }
	}, [selected]);

	const updateState = (newValue: string) => {
	    props.utils.methods.updateState({
		state: { current: props.state.current, updater: props.state.updater },
		newValue: selected
	    });
	    setSelected(newValue);
	}

	return (
		<View style={props.styles}>
			<Text style={baseStyles.label}>{ label + ":" }</Text>
			<View style={{borderWidth: 1, borderColor: !valid && dirty ? colors.red : colors.paragraphText, borderRadius: 5}}>
				<Picker selectedValue={selected} onValueChange={itemValue => updateState(itemValue)}>
					{options.map((option, index) => <Picker.Item key={index} color={index > 0 ? colors.blue : colors.paragraphText} label={option.label} value={option.value}/>)}
				</Picker>
			</View>
			{ !valid && dirty && <Text style={{ color: colors.red }}>Por favor, selecciona { validationKeyword }</Text>}
		</View>
	);
};
