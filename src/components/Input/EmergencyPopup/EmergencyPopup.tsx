import { useEffect, useState } from "react";
import { 
View,
Text,
TextInput,
Pressable
} from "react-native";
import { 
closeIcon,
trashIcon,
validateAnnex as annexRegEx
} from "./helper";
import { useAuth } from "../../../ApplicationState";
import { Image } from "expo-image";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../constants/constantData";
import styles from "./styles";
import { localTimeOptions } from "../../../constants/constantData";
import { DetainedReportData } from "../../../constants/customTypes";
import { showTimePicker } from "../../../constants/constantData";

const EmergencyPopup = ({route}) => {
    const { setReport, report } = useAuth();
    const { reportID, callIndex } = route.params;
    const currentReport = report?.find(obj => obj.id == reportID)?.emergencyCall[callIndex];
    const navigator = useNavigation();

    const [ callTime, setCallTime ] = useState<Date>(currentReport?.time || undefined);
    const [ callOperator, setCallOperator ] = useState(currentReport?.annex || undefined);
    const [ validAnnex, setValidAnnex ] = useState(false);
    const [ dirtyAnnex, setDirtyAnnex ] = useState(false);
    const [ validTime, setValidTime ] = useState(false);
    const [ dirtyTime, setDirtyTime ] = useState(false);

    const checkValidAnnex = ()=> {
	const isValid = annexRegEx(callOperator);

	if(typeof callOperator != "object" && callOperator == undefined) {
	    setDirtyAnnex(false);
	    setValidAnnex(isValid);
	}
	else {
	    setDirtyAnnex(true);
	    setValidAnnex(isValid);
	}
    }
    const checkValidTime = () => {
	    if(typeof callTime == "object" && callTime == null) {
		setDirtyTime(true);
		setValidTime(false);
	    }
	    if(typeof callTime != "object" && callTime === undefined) {
		setValidTime(false);
		setDirtyTime(false);
	    }
	    if(typeof callTime == "object" && callTime != undefined && callTime != null) {
		setValidTime(true);
		setDirtyTime(true);
	    }
	};
    
    const isValidData = ():boolean => dirtyAnnex && dirtyTime && (!validAnnex || !validTime) ? false : true;

    useEffect(()=> {

	checkValidTime();
	checkValidAnnex();

    }, [callTime, callOperator]);

    const submit = () => {
	const valid = isValidData();
	console.log(callTime + " " + callOperator);
	if(valid && callIndex != undefined) {
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

	if( valid && callIndex == undefined) {
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
		style={[styles.inputContainer, { paddingVertical: 14 }, dirtyTime && !validTime ? { borderColor: colors.red } : null ]}
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
		{ !validTime && dirtyTime && <Text style={{ color: colors.red }}>Formato de tiempo invalido</Text>}
		<Text style={[styles.label, { marginTop: 10 }]}>Operador o Anexo:</Text>
		<TextInput 
		style={[styles.inputContainer, !validAnnex && dirtyAnnex ? styles.invalidBorder : null ]}
		value={callOperator}
		onChangeText={(buffer) => setCallOperator(buffer)}
		placeholder="Ejem: Carab. Juan Dominguez"
		placeholderTextColor={colors.paragraphText}
		/>
		{ !validAnnex && dirtyAnnex && <Text style={{ color: colors.red }}>Formato de operador o anexo invalido</Text> }
		<View style={styles.submitContainer}>
		    <Pressable 
		     style={[styles.submitButton, !isValidData() ? { backgroundColor: "rgba(16, 18, 36, 0.4)" } : null ]}
		     disabled={!isValidData()} 
		     onPress={submit}
		     >
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
