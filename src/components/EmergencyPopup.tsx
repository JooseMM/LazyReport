import { useState } from "react";
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
import { colors } from "../constants/constantData";

type CallArray = { entryTime: string, annex: string, validEntryTime: boolean, validAnnex: boolean };
const EmergencyPopup = () => {
    const [ callTime, setCallTime ] = useState(new Date ());
    const [ callOperator, setCallOperator ] = useState("");
    const navigator = useNavigation();

    const showTimePicker = () => {
	DateTimePickerAndroid.open({
	    value: callTime,
	    mode: "time",
	    is24Hour: true,
	    onChange: (_event, selected) => setCallTime(selected)
	});
    };
    return (
	<View style={styles.blurBackground}>
	    <View style={styles.container}>
		<Pressable style={styles.closeContainer} onPress={()=> navigator.goBack()}>
		    <Image source={require("../../assets/close.svg")} style={styles.close}/>
		</Pressable>
		<Text style={styles.label} >Hora:</Text>
		<Pressable 
		style={styles.inputContainer}
		>
		    <Text>
			{callTime
			    .toLocaleTimeString("es-MX",{ hour12: false, hour: "2-digit", minute: "2-digit" })}
		    </Text>
		</Pressable>
		<Text style={[styles.label, { marginTop: 10 }]}>Operador o Anexo:</Text>
		<TextInput 
		style={styles.inputContainer}
		value={callOperator}
		onChangeText={(buffer) => setCallOperator(buffer)}
		placeholder="Ejem: Carab. Juan Dominguez; 13564"
		placeholderTextColor={colors.paragraphText}
		/>
		<View style={styles.submitContainer}>
		    <Pressable style={styles.submitButton}>
			<Text style={styles.buttonText}>Agregar</Text>
		    </Pressable>
		    <Pressable style={styles.deleteButton}>
			<Image source={require("../../assets/trash.svg")} style={styles.buttonImage}/>
		    </Pressable>
		</View>
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
	    paddingHorizontal: 25,
	    paddingBottom: 25,
	    paddingTop: 40,
	    zIndex: 60,
	    position: "relative"
	},
	inputContainer: {
	    borderStyle: "solid",
	    borderWidth: 1,
	    fontSize: 16,
	    borderColor: "#70717C",
	    paddingVertical: 12,
	    paddingHorizontal: 20,
	    borderRadius: 5,
	    color: "black"
	},
	label: {
	    marginBottom: 2,
	    fontWeight: "semibold",
	    fontSize: 18,
	},
	submitButton : { 
	    backgroundColor: "#101224",
	    paddingVertical: 14,
	    borderRadius: 5,
	    width: "65%",
	},
	deleteButton: {
	    paddingVertical: 14,
	    borderRadius: 5,
	    width: "30%",
	    backgroundColor: "#C54545"
	},
	buttonImage: {
	    width: 25,
	    height: 30,
	    marginHorizontal: "auto"
	},
	submitContainer: {
	    flexDirection: "row",
	    justifyContent: "space-between",
	    marginTop: 15
	},
	buttonText: {
	    color: "white",
	    fontWeight: "semibold",
	    marginHorizontal: "auto",
	    marginVertical: "auto"
	},
	close: {
	    width: 25,
	    height: 30,
	    marginHorizontal: "auto"
	},
	closeContainer: {
	    position: "absolute",
	    right: 30,
	    top: 20
	}
})
export default EmergencyPopup;
