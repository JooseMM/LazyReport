import { useState } from "react";
import { 
View,
Text,
TextInput,
Pressable
} from "react-native";
import { 
closeIcon,
localTimeOptions,
showTimePicker,
trashIcon,
validateAnnex
} from "./helper";
import { useAuth } from "../../../ApplicationState";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../constants/constantData";
import styles from "./styles";

const EmergencyPopup = ({route}) => {
    const [ callTime, setCallTime ] = useState<Date>();
    const [ callOperator, setCallOperator ] = useState("");
    const [ valid, setValid ] = useState(false);
    const [ dirty, setDirty ] = useState(false);

    const navigator = useNavigation();
    const params = route.params;
    const { report, setReport } = useAuth();

    const isValid = () => {
	const res = validateAnnex(callOperator);
	setDirty(true);
	setValid(res);
    }
    const submit = () => {
	if(validateAnnex(callOperator) && callTime)
	    setReport(prev => ({...prev, emergencyCall: [...prev.emergencyCall, { time: callTime, annex: callOperator} ]}))
    }
    const deleteCalls = (id: string) => null;

    return (
	<View style={styles.blurBackground}>
	    <View style={styles.container}>
		<Pressable style={styles.closeContainer} onPress={()=> navigator.goBack()}>
		    <Image source={closeIcon} style={styles.close}/>
		</Pressable>
		<Text style={styles.label} >Hora:</Text>
		<Pressable 
		style={styles.inputContainer}
		onPress={() => showTimePicker(callTime, setCallTime)}
		>
		    <Text style={{ color: callTime ? colors.blue : colors.paragraphText }}>
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
		    <Pressable style={styles.deleteButton}>
			<Image source={trashIcon} style={styles.buttonImage}/>
		    </Pressable>
		</View>
	    </View>
	</View>
    );
}

export default EmergencyPopup;
