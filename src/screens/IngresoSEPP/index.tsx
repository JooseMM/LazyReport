import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useAuth } from "../../ApplicationState";
import { Picker } from "@react-native-picker/picker";
import { addReport } from "../../constants/helperMethods";
import { inputID, selectItems } from "../../constants/constantData";
import { styles } from "./styles";
import { DetainedReportProp } from "../../constants/customTypes";
import Button from "../../components/MainButton";
import Input from "../../components/Input";

export default function IngresoSEPPScreen({ navigation }) {
	const [ time, setTime ] = useState("");
	const [	storeCode, setStoreCode ] = useState("");
	const [	storeFormat, setStoreFormat] = useState(selectItems[0].value);
	const [	underage, setUnderage] = useState(false);
	const [	quatity, setQuantity] = useState("1");
	const [	storeName, setStoreName ] = useState("");
	const [	informant, setInformant ] = useState("");
	const [	policeCallTime, setPoliceCallTime ] = useState("");
	const [	policeOperator, setPoliceOperator ] = useState("");
	const [	upscale, setUpscale ] = useState("");
	const [	secondUpscale, setSecondUpscale ] = useState("");
	const [	thirdUpscale, setThirdUpscale ] = useState("");

	const [ invalidInputState, setInvalidInputState ] = useState<Array<string>>([
		inputID.time,
		inputID.storeCode,
		inputID.storeName,
		inputID.underage,
		inputID.policeCall,
		inputID.annex,
	]);
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

	return (
		<ScrollView>
			<View style={styles.inputContainer}>
				<Input label={inputID.time} input={time} setInput={setTime} type="time" placeholder="Ejemplo: 03:08" invalidState={invalidInputState} setInvalidState={setInvalidInputState} />

				<Text style={styles.label}>Formato:</Text>
				<View style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5}}>
					<Picker 
					selectedValue={storeFormat}
					onValueChange={itemValue => setStoreFormat(itemValue)}
					>
					{ selectItems.map((item, index)=> <Picker.Item key={index} label={item.label} value={item.value} />) }
					</Picker>
				</View>
				<Input label={inputID.storeCode} input={storeCode} setInput={setStoreCode} type="storeCode" placeholder="4" invalidState={invalidInputState} setInvalidState={setInvalidInputState} />
				<Input label="Nombre de Local" input={storeName} setInput={setStoreName} type="name" placeholder="Lyons" invalidState={invalidInputState} setInvalidState={setInvalidInputState} />

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

				<Input label={inputID.quatity} input={quatity} setInput={setQuantity} type="number" placeholder="1" invalidState={invalidInputState} setInvalidState={setInvalidInputState} />
				<Input label={inputID.informant} input={informant} setInput={setInformant} type="name" placeholder="Rodrigo Ramirez GGSS" invalidState={invalidInputState} setInvalidState={setInvalidInputState} />
				<Input label={inputID.policeCall} input={policeCallTime} setInput={setPoliceCallTime} type="time" placeholder="03:40" invalidState={invalidInputState} setInvalidState={setInvalidInputState} />
				<Input label={inputID.annex} input={policeOperator} setInput={setPoliceOperator} type="annex" placeholder="13564 / Cadete Rodrigo Rojas" invalidState={invalidInputState} setInvalidState={setInvalidInputState} />
				<Input label={inputID.upscale} input={upscale} setInput={setUpscale} type="upscale" placeholder="Juan Garcia GTEO" invalidState={invalidInputState} setInvalidState={setInvalidInputState} />
				<Input label={inputID.upscale2} input={secondUpscale} setInput={setSecondUpscale} type="upscale" placeholder="Luis Riquelme Zonal AP" invalidState={invalidInputState} setInvalidState={setInvalidInputState} />
				<Input label={inputID.upscale3} input={thirdUpscale} setInput={setThirdUpscale} type="upscale" placeholder="Ana Mendez Jefe de Formato" invalidState={invalidInputState} setInvalidState={setInvalidInputState} />

				{ invalidInputState.map(value => <Text>{value}</Text>)}
				<View style={{ marginTop: 25 }}>
					<Button onButtonPressed={()=> null } disable={false} text="Generar Reporte" />
				</View>
			</View>
		</ScrollView>
	)
}

