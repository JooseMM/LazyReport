import { Text, View } from "react-native";
import { useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { ReportStateUpdaters } from  "../../constants/customTypes";
import { styles } from "./styles";
import { useAuth } from "../../ApplicationState";

export const PickerBaseInput = (props: ReportStateUpdaters) => {
	const [ selected, setSelected ] = useState<string | boolean>();
	const { id, label, placeholder, options } = props.inputObject;
	const { setReport } = useAuth();

	const updateState = (selected: string | boolean) => {
		setSelected(selected);
		setReport(prev => ({...prev, [id]: selected }));
	}
	return (
		<View>
			<Text style={styles.label}>{ label + ":" }</Text>
			<View style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5}}>
				<Picker placeholder={placeholder} selectedValue={selected} onValueChange={itemValue => updateState(itemValue)}>
					{options.map((option, index) => <Picker.Item key={index} label={option.label} value={option.value}/>)}
				</Picker>
			</View>
		</View>
	);
};

