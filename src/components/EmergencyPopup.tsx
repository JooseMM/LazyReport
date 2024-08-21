import { useState } from "react";
import { EMERGENCY_CALL_INFO } from "../constants/constantData";
import { 
View,
StyleSheet,
Text,
TextInput,
Pressable
} from "react-native";
import { useAuth } from "../ApplicationState";
import { Image } from "expo-image";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { useNavigation } from "@react-navigation/native";

type CallArray = { entryTime: string, annex: string, validEntryTime: boolean, validAnnex: boolean };
const EmergencyPopup = () => {
    const [ call, setCall ] = useState<CallArray>({ entryTime: "", annex: "", validEntryTime: false, validAnnex: false });
    return (
	<View style={styles.blurBackground}>
	    <View style={styles.container}>
		<Text>Hora:</Text>
		<TextInput value={call.entryTime.toString()} onPress={()=> undefined}/>
		<Text>Operador o Anexo:</Text>
		<TextInput value={call.annex} onChangeText={(buffer)=> setCall((prev)=> ({ ...prev, annex: buffer})) }/>
	    </View>
	</View>
    );
}

const styles = StyleSheet.create({
	blurBackground: {
	    backgroundColor: "rgba(51,51,51, 0.85)",
	    position: "absolute",
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    zIndex: 20,
	},
	container: {
	    backgroundColor: "white",
	    width: "80%",
	    marginHorizontal: "auto",
	    marginTop: "10%",
	    borderRadius: 5,
	    padding: 25,
	},
})
export default EmergencyPopup;
