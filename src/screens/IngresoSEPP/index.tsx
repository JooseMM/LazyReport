import { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useAuth } from "../../ApplicationState";
import { Picker } from "@react-native-picker/picker";
import { addReport } from "../../constants/helperMethods";
import { selectItems } from "../../constants/constantData";
import { styles } from "./styles";
import { DetainedReportProp, InputTypes, ValidationOutput } from "../../constants/customTypes";
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

	const [ invalidReport, setInvalidReport ] = useState(Array<ValidationOutput>);
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
		console.log("fire");
	};

	return (
		<ScrollView>
			<View style={styles.inputContainer}>
				<Input label="Hora" input={time} setInput={setTime} type="time" placeholder="Ejemplo: 03:08" invalidInput={invalidReport} setInvalidInput={setInvalidReport} />

				<Text style={styles.label}>Formato:</Text>
				<View style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5}}>
					<Picker 
					selectedValue={storeFormat}
					onValueChange={itemValue => setStoreFormat(itemValue)}
					>
					{ selectItems.map((item, index)=> <Picker.Item key={index} label={item.label} value={item.value} />) }
					</Picker>
				</View>
				<Input label="Codigo de Local" input={storeCode} setInput={setStoreCode} type="storeCode" placeholder="4" invalidInput={invalidReport} setInvalidInput={setInvalidReport} />
				<Input label="Nombre de Local" input={storeName} setInput={setStoreName} type="name" placeholder="Lyons" invalidInput={invalidReport} setInvalidInput={setInvalidReport} />

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

				<Input label="Cantidad" input={quatity} setInput={setQuantity} type="number" placeholder="1" invalidInput={invalidReport} setInvalidInput={setInvalidReport}  />
				<Input label="Informante" input={informant} setInput={setInformant} type="name" placeholder="Rodrigo Ramirez GGSS" invalidInput={invalidReport} setInvalidInput={setInvalidReport} />
				<Input label="Llamada a Carabineros" input={policeCallTime} setInput={setPoliceCallTime} type="time" placeholder="03:40" invalidInput={invalidReport} setInvalidInput={setInvalidReport} />
				<Input label="Anexo o Operador" input={policeOperator} setInput={setPoliceOperator} type="annex" placeholder="13564 / Cadete Rodrigo Rojas" invalidInput={invalidReport}  setInvalidInput={setInvalidReport} />
				<Input label="Escalamiento Principal" input={upscale} setInput={setUpscale} type="upscale" placeholder="Juan Garcia GTEO" invalidInput={invalidReport} setInvalidInput={setInvalidReport} />
				<Input label="Escalamiento Secundario" input={secondUpscale} setInput={setSecondUpscale} type="upscale" placeholder="Luis Riquelme Zonal AP" invalidInput={invalidReport} setInvalidInput={setInvalidReport} />
				<Input label="Escalamiento Terciario" input={thirdUpscale} setInput={setThirdUpscale} type="upscale" placeholder="Ana Mendez Jefe de Formato" invalidInput={invalidReport} setInvalidInput={setInvalidReport} />

				<View style={{ marginTop: 25 }}>
					<Button onButtonPressed={()=> console.log(invalidReport)} disable={false} text="Generar Reporte" />
				</View>
			</View>
		</ScrollView>
	)
}

