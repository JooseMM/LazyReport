import { useState } from "react";
import RNPickerSelect from 'react-native-picker-select';
import { Chevron } from "react-native-shapes"
import { StyleSheet, ScrollView, Text, View, TextInput, Pressable } from "react-native";

export default function IngresoSEPPScreen() {
	const [ date, setDate ] = useState("");
	const [	storeCode, setStoreCode ] = useState("");
	const [	storeFormat, setStoreFormat ] = useState("");
	const [	storeName, setStoreName ] = useState("");
	const [	informant, setInformant ] = useState("");
	const [	policeCallTime, setPoliceCallTime ] = useState("");
	const [	upscale, setUpscale ] = useState("");
	const [	secondUpscale, setSecondUpscale ] = useState("");
	const [	thirdUpscale, setThirdUpscale ] = useState("");

	const placeholder = {
		label: 'Selecciona un Formato...',
		value: '',
		color: 'black'
	}
	const items = [
		{ label: "Hiper Lider", value: "hl" },
		{ label: "Lider Express", value: "le" },
		{ label: "Super Bodega Acuenta", value: "sba" },
		{ label: "Central Mayorista", value: "cm" },
	];


	return (
		<ScrollView style={styles.mainContainer}>
			<Text style={styles.title}>Ingreso a SEPP</Text>
			<View style={styles.inputContainer}>
				<Text style={styles.label}>Hora:</Text>
				<TextInput style={styles.border} onChangeText={(buffer) => setDate(buffer)} value={date}/>
				<Text style={styles.label}>Formato:</Text>
				<RNPickerSelect  style={pickerSelectStyles}
					items={items} placeholder={placeholder} 
					useNativeAndroidPickerStyle={false}
					onValueChange={(buffer) => setStoreFormat(buffer)}
					Icon={() =>  <Chevron size={1.5} color="#292929" />}
					/>
				<Text style={styles.label}>N. de Local:</Text>
				<TextInput  style={styles.border} onChangeText={(buffer) => setStoreCode(buffer)} value={storeCode}/>
				<Text style={styles.label}>Nombre de Local:</Text>
				<TextInput  style={styles.border} onChangeText={(buffer) => setStoreName(buffer)} value={storeName}/>
				<Text style={styles.label}>Informante:</Text>
				<TextInput style={styles.border} onChangeText={(buffer) => setInformant(buffer)} value={informant}/>
				<Text style={styles.label}>Llamada a Carabineros:</Text>
				<TextInput style={styles.border} onChangeText={(buffer) => setPoliceCallTime(buffer)} value={policeCallTime}/>
				<Text style={styles.label}>Escalamiento Principal:</Text>
				<TextInput style={styles.border} onChangeText={(buffer) => setUpscale(buffer)} value={upscale}/>
				<Text style={styles.label}>Escalamiento Secundario:</Text>
				<TextInput style={styles.border} onChangeText={(buffer) => setSecondUpscale(buffer)} value={secondUpscale}/>
				<Text style={styles.label}>Escalamiento Terciario:</Text>
				<TextInput style={styles.border} onChangeText={(buffer) => setThirdUpscale(buffer)} value={thirdUpscale}/>
				<Pressable style={styles.button}>
					<Text style={styles.buttonText}>Generar Reporte</Text>
				</Pressable>
			</View>
		</ScrollView>
	)

}

const styles = StyleSheet.create({
	border: {
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#70717C",
		paddingVertical: 10,
		paddingHorizontal: 10,
		borderRadius: 5
	},
	mainContainer: {
	},
	inputContainer: {
		marginHorizontal: "auto",
		paddingHorizontal: 20,
		paddingBottom: 40,
		maxWidth: 450,
		width: "100%"
	},
	label: {
		marginTop: 15,
		marginBottom: 2,
		fontWeight: "semibold",
		fontSize: 18,
	},
	button: {
		backgroundColor: "#101224",
		marginTop: 30,
		marginHorizontal: "auto",
		paddingVertical: 20,
		borderRadius: 5,
		width: "100%",
		paddingHorizontal: 20,
	},
	buttonText: {
		color: "white",
		marginHorizontal: "auto",
		fontSize: 18,
		fontWeight: "bold"
	},
	title: {
		marginTop:  40,
		marginBottom: 10,
		fontSize: 30,
		fontWeight: "bold",
		marginHorizontal: "auto"
	},
	inputAndroid: {
		fontSize: 16,
		paddingHorizontal: 10,
		paddingVertical: 8,
		borderWidth: 0.5,
		borderColor: 'gray',
		borderRadius: 8,
		color: 'black',
		paddingRight: 30, // to ensure the text is never behind the icon
	}
});
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
  },
  inputAndroid: {
    fontSize: 16,
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  inputWeb: {
	  paddingVertical: 10,
	  paddingHorizontal: 10,
	  fontSize: 16,
	  borderRadius: 5,
	  paddingRight: 30,
	  borderColor: 'gray',
	  backgroundColor: 'white',
  },
  iconContainer: {
	  right: 30,
	  top: "45%",
	  color: "white"
  }
});
