import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { ReportStateUpdaters, DetainedReportData } from  "../../constants/customTypes";
import { styles } from "./styles";
import { useAuth } from "../../ApplicationState";
import { colors } from "../../constants/constantData";

export const PickerBaseInput = (props: ReportStateUpdaters) => {
	const [ selected, setSelected ] = useState<string>();
	const { id, label, options, validationKeyword } = props.inputObject;
	const { setReport } = useAuth();
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

		setReport((prev: DetainedReportData[]) => {
		    return prev.map((report)=> {
			if(report.id == props.reportID) {
			    return ({...report, [id]: selected});
			}
		    })
		})
	    }
	}, [selected]);

	return (
		<View>
			<Text style={styles.label}>{ label + ":" }</Text>
			<View style={{borderWidth: 1, borderColor: !valid && dirty ? colors.red : '#70717C', borderRadius: 5}}>
				<Picker selectedValue={selected} onValueChange={itemValue => setSelected(itemValue)}>
					{options.map((option, index) => <Picker.Item key={index} label={option.label} value={option.value}/>)}
				</Picker>
			</View>
			{ !valid && dirty && <Text style={{ color: colors.red }}>Por favor, selecciona { validationKeyword }</Text>}
		</View>
	);
};

