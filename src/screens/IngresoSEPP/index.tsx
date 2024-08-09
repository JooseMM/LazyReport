import {  useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { useAuth } from "../../ApplicationState";
import { inputID, selectItems } from "../../constants/constantData";
import { styles } from "./styles";
import Button from "../../components/MainButton";
import { DetainedReportData, InputTypes } from "../../constants/customTypes";
import Input from "../../components/Input";

export default function IngresoSEPPScreen({ navigation }) {

	const [ invalidInputState, setInvalidInputState ] = useState<Array<string>>([
		inputID.time,
		inputID.storeCode,
		inputID.storeName,
		inputID.underage,
		inputID.policeCall,
		inputID.annex,
	]);
	const [ reportState, setReportState ] = useState<DetainedReportData>({
		time: "",
		reportType: "Detenido en SEPP",
		storeCode: "",
		storeName: "",
		storeFormat: "",
		informantName:"",
		underage: false,
		quatity: "0",
		policeCallTime: "",
		policeOperator: "",
		upscale: "",
		secondUpscale: "",
		thirdUpscale: "",

	});
	const { setReport } = useAuth();

	return (
		<ScrollView>
			<View style={styles.inputContainer}>
			       	<Input placeholder="hora" setReport={setReportState} type="entryTime" setInvalidInputs={setInvalidInputState} />
				{/*
				<Text style={styles.label}>Formato:</Text>
				<View style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5}}>
					<Picker 
					selectedValue={storeFormat}
					onValueChange={itemValue => setStoreFormat(itemValue)}
					>
					{ selectItems.map((item, index)=> <Picker.Item key={index} label={item.label} value={item.value} />) }
					</Picker>
				</View>

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
				*/}

				<View style={{ marginTop: 25 }}>
					<Button onButtonPressed={()=> console.log("current report: " + reportState.time)} disable={false} text="Generar Reporte" />
				</View>
			</View>
		</ScrollView>
	)
}

