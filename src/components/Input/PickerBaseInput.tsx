import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { ReportStateUpdaters } from  "../../constants/customTypes";
import { styles } from "./styles";
import { useAuth } from "../../ApplicationState";
import { colors } from "../../constants/constantData";

export const PickerBaseInput = (props: ReportStateUpdaters) => {
	const { setReport, report } = useAuth();
	const { keyProperty } = props;
	const { 
	    label,
	    options,
	    validationKeyword,
	    updaterFunction,
	    getInitialState,
	} = props.inputObject;
	const [ selected, setSelected ] = useState<string | boolean>(getInitialState({
	    identifier: props.identifier,
	    report: report,
	    targetKey: props.keyProperty,
	}));
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

	const updateState = (newValue: string | boolean ) => {
	    updaterFunction({
		identifier: props.identifier,
		index: props.index,
		newValue: selected,
		setReport: setReport
	    });
	    setSelected(newValue);
	}

	return (
		<View style={props.styles}>
			<Text style={styles.label}>{ label + ":" }</Text>
			<View style={{borderWidth: 1, borderColor: !valid && dirty ? colors.red : colors.paragraphText, borderRadius: 5}}>
				<Picker selectedValue={selected} onValueChange={itemValue => updateState(itemValue)}>
					{options.map((option, index) => <Picker.Item key={index} color={index > 0 ? colors.blue : colors.paragraphText} label={option.label} value={option.value}/>)}
				</Picker>
			</View>
			{ !valid && dirty && <Text style={{ color: colors.red }}>Por favor, selecciona { validationKeyword }</Text>}
		</View>
	);
};
