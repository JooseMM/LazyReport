import { useState } from "react";
import { 
View,
Text,
TextInput,
Pressable
} from "react-native";
import { 
closeIcon,
showTimePicker,
trashIcon,
validateAnnex
} from "./helper";
import { useAuth } from "../../../ApplicationState";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../constants/constantData";
import styles from "./styles";
import { localTimeOptions } from "../../../constants/constantData";
import { DetainedReportData } from "../../../constants/customTypes";

const EmergencyPopup = ({route}) => {
    const { setReport, report } = useAuth();
    const { reportID, callIndex } = route.params;
    const currentReport = report?.find(obj => obj.id == reportID)?.emergencyCall[callIndex];
    const [ callTime, setCallTime ] = useState<Date>(currentReport?.time || undefined);
    const [ callOperator, setCallOperator ] = useState(currentReport?.annex || undefined);
    const [ valid, setValid ] = useState(false);
    const [ dirty, setDirty ] = useState(false);

    const navigator = useNavigation();

    const isValid = () => {
	const res = validateAnnex(callOperator);
	setDirty(true);
	setValid(res);
    }

    const submit = () => {
	const isValid = validateAnnex(callOperator);

	if(isValid && callTime && callIndex != undefined) {
	    setReport(prev => {
		return prev.map(obj => {
		    if(obj.id == reportID) {
			obj.emergencyCall[callIndex].time = callTime;
			obj.emergencyCall[callIndex].annex = callOperator;
		    }
		    return obj;
		});
	    });
	}
	if(isValid && callTime && callIndex == undefined) {
	    setReport((prev: Array<DetainedReportData>) => {
		return prev.map(value => {
		    if(value.id == reportID) {
			value.emergencyCall.push({ time: callTime, annex: callOperator});
		    }
		    return value;
		})
	    });
	}

	navigator.goBack();
    }
    const deleteCalls = () => {
	setReport(prev => {
	    return prev.map(obj => {
		if(obj.id == reportID && callIndex != undefined) {
		    obj.emergencyCall = obj.emergencyCall.filter((_obj, index)=> index != callIndex)
		}
		return obj;
	    })
	});

	navigator.goBack();
    };

    return (
	<View style={styles.blurBackground}>
	    <View style={styles.container}>
		<Pressable style={styles.closeContainer} onPress={()=> navigator.goBack()}>
		    <Image source={closeIcon} style={styles.close}/>
		</Pressable>
		<Text style={styles.label} >Hora:</Text>
		<Pressable 
		style={[styles.inputContainer, { paddingVertical: 14 }]}
		onPress={() => showTimePicker(callTime, setCallTime)}
		>
		    <Text style={{ color: callTime ? colors.blue : colors.paragraphText, fontSize: 16 }}>
			{
			    callTime ? 
				callTime.toLocaleTimeString("es-MX", localTimeOptions)
				:
				"Ejem: 13:46"
			}
		    </Text>
		</Pressable>
		<Text style={[styles.label, { marginTop: 10 }]}>Operador o Anexo:</Text>
		<TextInput 
		style={[styles.inputContainer, !valid && dirty ? styles.invalidBorder : null ]}
		value={callOperator}
		onChangeText={(buffer) => setCallOperator(buffer)}
		placeholder="Ejem: Carab. Juan Dominguez"
		placeholderTextColor={colors.paragraphText}
		onEndEditing={isValid}
		/>
		{ !valid && dirty ? <Text style={{ color: colors.red }}>Formato de operador o anexo invalido</Text> : null }
		<View style={styles.submitContainer}>
		    <Pressable style={[styles.submitButton, !valid && dirty ? { backgroundColor: "rgba(16, 18, 36, 0.4)" } : null ]} disabled={!valid && dirty} onPress={submit}>
			<Text style={styles.buttonText}>Agregar</Text>
		    </Pressable>
		    <Pressable style={styles.deleteButton} onPress={deleteCalls}>
			<Image source={trashIcon} style={styles.buttonImage}/>
		    </Pressable>
		</View>
	    </View>
	</View>
    );
}

export default EmergencyPopup;
