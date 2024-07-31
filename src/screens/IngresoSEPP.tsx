import { useEffect, useState } from "react";
import { ScrollView, Text, View, TextInput, Pressable } from "react-native";
import { useAuth } from "../ApplicationState";
import { Picker } from "@react-native-picker/picker";
import { timeFormat24hrs, storeCodeFormat, lettersOnlyFormat, lettersOrEmptyFormat, numberOnlyFormat, wordsOrNumberFormat} from "../constants/regexPatterns";
import { addReport } from "../constants/helperMethods";
import { selectItems } from "../constants/constantData";
import { styles } from "../constants/ingresoSEPPStyles";
import { DetainedReportProp } from "../constants/customTypes";

export default function IngresoSEPPScreen({ navigation }) {
	const [ time, setTime ] = useState("");
	const [	storeCode, setStoreCode ] = useState("");
	const [	storeFormat, setStoreFormat] = useState(selectItems[0].value);
	const [	underage, setUnderage] = useState(false);
	const [	quatity, setQuantity] = useState("0");
	const [	storeName, setStoreName ] = useState("");
	const [	informant, setInformant ] = useState("");
	const [	policeCallTime, setPoliceCallTime ] = useState("");
	const [	policeOperator, setPoliceOperator ] = useState("");
	const [	upscale, setUpscale ] = useState("");
	const [	secondUpscale, setSecondUpscale ] = useState("");
	const [	thirdUpscale, setThirdUpscale ] = useState("");

	const [ touched, setTouched ] = useState(false);
	const [ error, setError ] = useState([]);
	const { setReport } = useAuth();

	const onSubmit = () => {
		const newReport: DetainedReportProp = {
			time: time,
			reportType: "Detenido en SEPP",
			storeCode: storeCode,
			storeName: storeName,
			storeFormat: storeFormat,
			informantName: informant,
			underage: underage,
			quatity: quatity,
			policeCallTime: policeCallTime,
			policeOperator: policeOperator,
			upscale: upscale,
			secondUpscale: secondUpscale,
			thirdUpscale: thirdUpscale,
			setReport: setReport,
			navigation: navigation
		};

		addReport(newReport);
	};

	const touch = (focusInput: string) => {
		setError(error.filter(value => value != focusInput));
		setTouched(true);
	};

	const isDataValid = ():boolean => error.length === 0 && touched ? true : false;

	return (
		<ScrollView style={styles.mainContainer}>
			<View style={styles.inputContainer}>
				<Text style={styles.label}>Hora:</Text>
				<TextInput cursorColor="gray" style={error.includes("time") ? [styles.border, { borderColor: 'red' }] : styles.border} 
				onChangeText={(buffer) => setTime(buffer)} value={time} 
				onEndEditing={()=> !timeFormat24hrs.test(time) ? setError([...error, "time"]) : setError(error.filter(value => value != "time"))}
				onFocus={() => touch("time")}
				/>
				{ error.includes("time") ? <Text style={{ color: 'red' }}>Formato de horas invalido</Text> : null } 

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
				<TextInput cursorColor="gray"  style={error.includes("code") ? [styles.border, { borderColor: 'red' }] : styles.border}
				onChangeText={(buffer) => setStoreCode(buffer)} value={storeCode}
				onEndEditing={()=> !storeCodeFormat.test(storeCode) ? setError([...error, "code"]) : setError(error.filter(value => value != "code"))}
				onFocus={() => touch("code")}
				/>
				{ error.includes("code") ? <Text style={{ color: 'red' }}>Codigo invalido</Text> : null } 

				<Text style={styles.label}>Nombre de Local:</Text>
				<TextInput cursorColor="gray"  style={error.includes("storeName") ? [styles.border, { borderColor: 'red' }] : styles.border}
				onChangeText={(buffer) => setStoreName(buffer)} value={storeName}
				onEndEditing={()=> !lettersOnlyFormat.test(storeName) ? setError([...error, "storeName"]) : setError(error.filter(value => value != "storeName"))}
				onFocus={() => touch("storeName")}
				/>
				{ error.includes("storeName") ? <Text style={{ color: 'red' }}>Nombre de local invalido, solo letras y espacios</Text> : null } 

				<Text style={styles.label}>Informante:</Text>
				<TextInput cursorColor="gray" style={error.includes("informant") ? [styles.border, { borderColor: 'red' }] : styles.border}
				onChangeText={(buffer) => setInformant(buffer)} value={informant}
				onEndEditing={()=> !lettersOnlyFormat.test(informant) ? setError([...error, "informant"]) : setError(error.filter(value => value != "informant"))}
				onFocus={() => touch("informant")}
				/>
				{ error.includes("informant") ? <Text style={{ color: 'red' }}>Nombre invalido, solo letras y espacios</Text> : null } 

				<Text style={styles.label}>Retenidos menores de edad:</Text>
				<View style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5}}>
					<Picker 
					selectedValue={underage}
					onValueChange={itemValue => setUnderage(itemValue)}
					>
						 <Picker.Item label="Si" value={true} />
						 <Picker.Item label="No" value={false} />
					</Picker>
				</View>

				<Text style={styles.label}>Cantidad de Detenidos</Text>
				<TextInput cursorColor="gray" style={error.includes("quatity") ? [styles.border, { borderColor: 'red' }] : styles.border}
				onChangeText={(buffer) => setQuantity(buffer)} value={quatity}
				onEndEditing={()=> !numberOnlyFormat.test(quatity) ? setError([...error, "quatity"]) : setError(error.filter(value => value != "quatity"))}
				onFocus={() => touch("quatity")}
				/>
				{ error.includes("quatity") ? <Text style={{ color: 'red' }}>Formato de cantidad invalida</Text> : null } 

				<Text style={styles.label}>Llamada a Carabineros:</Text>
				<TextInput cursorColor="gray" style={error.includes("policeCall") ? [styles.border, { borderColor: 'red' }] : styles.border}
				onChangeText={(buffer) => setPoliceCallTime(buffer)} value={policeCallTime}
				onEndEditing={()=> !timeFormat24hrs.test(policeCallTime) ? setError([...error, "policeCall"]) : setError(error.filter(value => value != "policeCall"))}
				onFocus={() => touch("policeCall")}
				/>
				{ error.includes("policeCall") ? <Text style={{ color: 'red' }}>Formato de horas invalido</Text> : null } 

				<Text style={styles.label}>Anexo / Operador</Text>
				<TextInput cursorColor="gray" style={error.includes("operator") ? [styles.border, { borderColor: 'red' }] : styles.border}
				onChangeText={(buffer) => setPoliceOperator(buffer)} value={policeOperator}
				onEndEditing={()=> !wordsOrNumberFormat.test(policeOperator) ? setError([...error, "operator"]) : setError(error.filter(value => value != "operator"))}
				onFocus={() => touch("operator")}
				/>
				{ error.includes("operator") ? <Text style={{ color: 'red' }}>Nombre o Anexo policial invalido</Text> : null } 

				<Text style={styles.label}>Escalamiento Principal:</Text>
				<TextInput cursorColor="gray" style={error.includes("upscale") ? [styles.border, { borderColor: 'red' }] : styles.border}
				onChangeText={(buffer) => setUpscale(buffer)} value={upscale}
				onEndEditing={()=> !lettersOrEmptyFormat.test(upscale) ? setError([...error, "upscale"]) : setError(error.filter(value => value != "upscale"))}
				onFocus={() => touch("upscale")}
				/>
				{ error.includes("upscale") ? <Text style={{ color: 'red' }}>Nombre de escalamiento invalido</Text> : null } 

				<Text style={styles.label}>Escalamiento Secundario:</Text>
				<TextInput cursorColor="gray" style={error.includes("secondUpscale") ? [styles.border, { borderColor: 'red' }] : styles.border} 
				onChangeText={(buffer) => setSecondUpscale(buffer)} value={secondUpscale}
				onEndEditing={()=> !lettersOrEmptyFormat.test(secondUpscale) ? setError([...error, "secondUpscale"]) : setError(error.filter(value => value != "secondUpscale"))}
				onFocus={() => touch("secondUpscale")}
				/>
				{ error.includes("secondUpscale") ? <Text style={{ color: 'red' }}>Nombre de escalamiento invalido</Text> : null } 

				<Text style={styles.label}>Escalamiento Terciario:</Text>
				<TextInput cursorColor="gray" style={error.includes("thirdUpscale") ? [styles.border, { borderColor: 'red' }] : styles.border} 
				onChangeText={(buffer) => setThirdUpscale(buffer)} value={thirdUpscale}
				onEndEditing={()=> !lettersOrEmptyFormat.test(thirdUpscale) ? setError([...error, "thirdUpscale"]) : setError(error.filter(value => value != "thirdUpscale"))}
				onFocus={() => touch("thirdUpscale")}
				/>
				{ error.includes("thirdUpscale") ? <Text style={{ color: 'red' }}>Nombre de escalamiento invalido</Text> : null } 

				<Pressable style={ !isDataValid() ? [styles.button, { opacity: 0.6, backgroundColor: 'gray' }] : styles.button} onPress={onSubmit} disabled={!isDataValid()} >
					<Text style={styles.buttonText}>Generar Reporte</Text>
				</Pressable>
			</View>
		</ScrollView>
	)
}

