import {
View,
Text,
StyleSheet,
Pressable
} from "react-native";
import { useEffect, useState } from "react";
import { localTimeOptions } from "../../constants/constantData";
import { showTimePicker } from "../../constants/constantData";
import { colors } from "../../constants/constantData";
import { ReportStateUpdaters } from "../../constants/customTypes";
import { useAuth } from "../../ApplicationState";
import { DetainedReportData } from "../../constants/customTypes";

const TimeBaseInput = (props: ReportStateUpdaters) => {
    const { reportID } = props;
    const { report, setReport } = useAuth();
    const currentReport = report.find(obj => obj.id == reportID);
    const { id, label, placeholder, validationKeyword } = props.inputObject;
    const [ time, setTime ] = useState<Date>();
    const [ invalid, setInvalid ] = useState<boolean>(true);
    const [ dirty, setDirty ] = useState<boolean>(false);

    useEffect(()=> {
	if(typeof time == "object" && time == null) {
	    setDirty(true);
	    setInvalid(true);
	}
	if(typeof time != "object" && time == undefined) {
	    setDirty(false);
	    setInvalid(true);
	}
	if(typeof time == "object" && time != undefined && time != null) {
	    setDirty(true);
	    setInvalid(false);
	    setReport((prev: DetainedReportData[])=> {
		return prev.map((obj: DetainedReportData, index) => {
		    if(obj.id == reportID) 
			return ({ ...obj, [id]: time});

		    return obj;
		})
	    })
	}
    }, [time]);

    return(
	<View style={{marginTop: 15}}>
	    <Text style={styles.label}>{ label + ":" }</Text>
	    <Pressable 
	    style={[styles.inputContainer, invalid && dirty ? { borderColor: colors.red } : null]}
	    onPress={() => showTimePicker(time, setTime)}
	    >
		<Text style={[styles.output, { color: time ? colors.blue : colors.paragraphText}]}>
		{
		    time ? time
			     .toLocaleTimeString("es-MX", localTimeOptions)
			     : placeholder
		}
		</Text>
	    </Pressable>
	    { invalid && dirty && <Text style={{color: colors.red}}>Formato de { validationKeyword } invalido</Text> }
	</View>
    );
}

const styles = StyleSheet.create({
    inputContainer: {
	borderStyle: "solid",
	borderWidth: 1,
	fontSize: 16,
	borderColor: colors.paragraphText,
	paddingVertical: 14,
	paddingHorizontal: 20,
	borderRadius: 5,
	color: "black"
    },
    output: {
	fontSize: 16
    },
    label: {
	marginBottom: 2,
	fontWeight: "semibold",
	fontSize: 18,
    }

})
export default TimeBaseInput;
