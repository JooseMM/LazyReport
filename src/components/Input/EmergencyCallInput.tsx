import { 
View,
Text,
StyleSheet,
Pressable
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../ApplicationState";
import { colors } from "../../constants/constantData";
import { Image } from "expo-image";

const newArray = [ 
    { 
	time: new Date().toLocaleTimeString("es-MX",{ hour12: false, hour: "2-digit", minute: "2-digit" }),
	annex: "Carab. Juan Gomez"
    },
    { 
	time: new Date().toLocaleTimeString("es-MX", { hour12: false, hour: "2-digit", minute: "2-digit" }),
	annex: "13564"
    },
]
const EmergencyCallInput = () => {
    const navigator = useNavigation<any>();
    const { report } = useAuth();
    //const dataLenght = report?.emergencyCall != undefined ? report.emergencyCall.length : 0;
    const dataLenght = newArray;
    const addSVG = require("../../../assets/plus.svg");

    return (
	<View style={styles.container}>
	    <Text style={styles.label}>Llamada de Emergencias:</Text>
		    <View style={styles.infoContainer}>
		    {
			dataLenght.map((value, index) => {
			return 	<View style={styles.infoBox} key={index}>
				    <Text style={[styles., { marginTop: index == 0 ? 0 : 8 }]}>{ value.time + "hrs" }</Text>
				    <Text>{ value.annex }</Text>
				</View> 
			})
		    }
		    </View>
		    <Pressable style={styles.buttonContainer} onPress={()=> navigator.navigate("AddEmergencyCall")}>
			<Image source={addSVG} style={styles.buttonImage}/>
		    </Pressable>
	</View>
    );
}

const styles = StyleSheet.create({
    container: {
	marginTop: 15,
	marginBottom: 5,
    },
    label: {
	fontWeight: "semibold",
	fontSize: 18,
    },
    outputText: {
	color: colors.paragraphText,
	fontSize: 16,
	marginHorizontal: "auto",
	textAlign: "center",
	marginTop: 15,
	marginBottom: 15
    },
    buttonContainer : { 
	backgroundColor: "#101224",
	paddingVertical: 14,
	borderRadius: 5,
    },
    buttonImage: {
	width: 25,
	height: 25,
	marginHorizontal: "auto"
    },
    disable: {
	opacity: 0.6,
	backgroundColor: 'gray' 
    },
    infoBox: {
	paddingVertical: 12,
	paddingHorizontal: 20,
	color: "#404150",
	backgroundColor: "#CFD0D3",
	borderRadius: 5,
    },
    infoContainer: {
	paddingTop: 8,
	paddingBottom: 14
    },
});

export default EmergencyCallInput;
