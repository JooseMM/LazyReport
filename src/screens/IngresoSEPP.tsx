import { useEffect, useState } from "react";
import { ScrollView, Text, View, TextInput, Pressable } from "react-native";
import { useAuth } from "../ApplicationState";
import { Picker } from "@react-native-picker/picker";
import { selectItems, addReport } from "../constants/constants";
import { styles } from "../constants/ingresoSEPPStyles";

export default function IngresoSEPPScreen({ navigation }) {
	const [ date, setDate ] = useState("");
	const [	storeCode, setStoreCode ] = useState("");
	const [	storeFormat, setStoreFormat] = useState(selectItems[0].value);
	const [	storeName, setStoreName ] = useState("");
	const [	informant, setInformant ] = useState("");
	const [	policeCallTime, setPoliceCallTime ] = useState("");
	const [	upscale, setUpscale ] = useState("");
	const [	secondUpscale, setSecondUpscale ] = useState("");
	const [	thirdUpscale, setThirdUpscale ] = useState("");

	const [ error, setError ] = useState("");

	const { setReport } = useAuth();
	const submit = () => addReport(
		setReport,
		date,
		storeFormat,
		storeCode,
		storeName,
		informant,
		policeCallTime,
		upscale,
		secondUpscale,
		thirdUpscale,
		navigation
	);

	useEffect(()=> {

	}, [
		date,
		storeCode,
		storeName,
		informant,
		policeCallTime,
		upscale,
		secondUpscale,
		thirdUpscale
	])
	return (
		<ScrollView style={styles.mainContainer}>
			<View style={styles.inputContainer}>
				<Text style={styles.label}>Hora:</Text>
				<TextInput cursorColor="gray" style={styles.border} onChangeText={(buffer) => setDate(buffer)} value={date}/>
				{ error === "time" ? <Text>Bad hour format</Text> : null } 

				<Text style={styles.label}>Formato:</Text>
				<View style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5}}>
					<Picker 
					selectedValue={storeFormat}
					onValueChange={itemValue => setStoreFormat(itemValue)}
					>
					{ selectItems.map((item, index)=> <Picker.Item key={index} label={item.label} value={item.value} />) }
					</Picker>
				</View>

				<Text style={styles.label}>N. de Local:</Text>
				<TextInput cursorColor="gray"  style={styles.border} onChangeText={(buffer) => setStoreCode(buffer)} value={storeCode}/>

				<Text style={styles.label}>Nombre de Local:</Text>
				<TextInput cursorColor="gray"  style={styles.border} onChangeText={(buffer) => setStoreName(buffer)} value={storeName}/>

				<Text style={styles.label}>Informante:</Text>
				<TextInput cursorColor="gray" style={styles.border} onChangeText={(buffer) => setInformant(buffer)} value={informant}/>

				<Text style={styles.label}>Llamada a Carabineros:</Text>
				<TextInput cursorColor="gray" style={styles.border} onChangeText={(buffer) => setPoliceCallTime(buffer)} value={policeCallTime}/>

				<Text style={styles.label}>Escalamiento Principal:</Text>
				<TextInput cursorColor="gray" style={styles.border} onChangeText={(buffer) => setUpscale(buffer)} value={upscale}/>

				<Text style={styles.label}>Escalamiento Secundario:</Text>
				<TextInput cursorColor="gray" style={styles.border} onChangeText={(buffer) => setSecondUpscale(buffer)} value={secondUpscale}/>

				<Text style={styles.label}>Escalamiento Terciario:</Text>
				<TextInput cursorColor="gray" style={styles.border} onChangeText={(buffer) => setThirdUpscale(buffer)} value={thirdUpscale}/>

				<Pressable style={error ? [styles.button, { opacity: 0.6, backgroundColor: 'gray' }] : styles.button} onPress={submit} disabled={!!error} >
					<Text style={styles.buttonText}>Generar Reporte</Text>
				</Pressable>
			</View>
		</ScrollView>
	)
}

