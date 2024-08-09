import {  useState } from "react";
import { ScrollView, View } from "react-native";
import { useAuth } from "../../ApplicationState";
import { INPUT_ARRAY, INIT_REPORT_STATE } from "../../constants/constantData";
import { styles } from "./styles";
import Button from "../../components/MainButton";
import { InputID, DetainedReportData  } from "../../constants/customTypes";
import Input from "../../components/Input/Input";

export default function IngresoSEPPScreen({ navigation }) {

	const [ invalidInputState, setInvalidInputState ] = useState<Array<InputID>>([
		"time",
		"storeNumber",
		"storeName",
		"informantName",
		"quantity",
		"emergencyCallTime",
		"emergencyOperator",
	]);
	const [ reportState, setReportState ] = useState<DetainedReportData>({...INIT_REPORT_STATE, reportType: "Detenido en SEPP" });
	const { setReport } = useAuth();

	return (
		<ScrollView>
			<View style={styles.inputContainer}>
				{ INPUT_ARRAY.map((_value, index)=> {
					return (
						<Input key={index} arrayIndex={index} updateReportState={setReportState} updateInvalidInputState={setInvalidInputState} />
					);
				})}
				{/*
			       	<Input placeholder="hora" setReport={setReportState} type={inputID.time} setInvalidInputs={setInvalidInputState} />
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
					<Button onButtonPressed={()=> console.log(invalidInputState)} disable={false} text="Generar Reporte" />
				</View>
			</View>
		</ScrollView>
	)
}

