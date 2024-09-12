import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import { Picker } from "@react-native-picker/picker";
import { ReportStateUpdaters, AppReportState } from  "../../constants/customTypes";
import { styles } from "./styles";
import { useAuth } from "../../ApplicationState";
import { colors } from "../../constants/constantData";

export const PickerBaseInput = (props: ReportStateUpdaters) => {
	const [ selected, setSelected ] = useState<string | boolean>();
	const { id, label, options, validationKeyword } = props.inputObject;
	const { setReport } = useAuth();
	const [ valid, setValid ] = useState(false);
	const [ dirty, setDirty ] = useState(false);
	const { targetFormat } = props;

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

		setReport((prev: AppReportState) => {
		    return ({
			...prev,
			[targetFormat]: {
			    ...prev[targetFormat],
			    reportState: prev[targetFormat].reportState.map(current=> {
				if(current.id === props.reportIdentifier) {
				    return ({...current, [id]: selected});
				}
			    })
			}
		    });
		    /* return prev[targetFormat].reportState.map((report)=> {
			if(report.id == props.reportID) {
			    return ({...report, [id]: selected});
			}
		    })
		    */
		})
	    }
	}, [selected]);

	return (
		<View>
			<Text style={styles.label}>{ label + ":" }</Text>
			<View style={{borderWidth: 1, borderColor: !valid && dirty ? colors.red : colors.paragraphText, borderRadius: 5}}>
				<Picker selectedValue={selected} onValueChange={itemValue => setSelected(itemValue)}>
					{options.map((option, index) => <Picker.Item key={index} color={index > 0 ? colors.blue : colors.paragraphText} label={option.label} value={option.value}/>)}
				</Picker>
			</View>
			{ !valid && dirty && <Text style={{ color: colors.red }}>Por favor, selecciona { validationKeyword }</Text>}
		</View>
	);
};

