import {  useState } from "react";
import { ScrollView, View } from "react-native";
import { useAuth } from "../../ApplicationState";
import { INPUT_ARRAY, INIT_REPORT_STATE } from "../../constants/constantData";
import { styles } from "./styles";
import Button from "../../components/MainButton";
import { InputID, DetainedReportData  } from "../../constants/customTypes";
import TextBaseInput from "../../components/Input/Input";
import { PickerBaseInput } from "../../components/Input/PickerInput";

export default function IngresoSEPPScreen({ navigation }) {

	const [ invalidInputState, setInvalidInputState ] = useState<Array<InputID>>([
		"time",
		"storeNumber",
		"storeName",
		"informantName",
		"isUnderage",
		"storeFormat",
		"quantity",
		"emergencyCallTime",
		"emergencyOperator",
	]);
	const [ reportState, setReportState ] = useState<DetainedReportData>({...INIT_REPORT_STATE, reportType: "Detenido en SEPP" });
	const { setReport } = useAuth();

	return (
		<ScrollView>
			<View style={styles.inputContainer}>
				{ INPUT_ARRAY.map((value, index)=> {
					return value.id !== "storeFormat" && value.id !== "isUnderage" ? 
						<TextBaseInput key={index} 
						arrayIndex={index}
						updateReportState={setReportState} 
						updateInvalidInputState={setInvalidInputState} 
						/>
						:
						<PickerBaseInput key={index}
						arrayIndex={index}
						updateReportState={setReportState}
						updateInvalidInputState={setInvalidInputState}
						/>
				})}

				<View style={{ marginTop: 25 }}>
					<Button onButtonPressed={()=> { console.log(invalidInputState); console.log(reportState) }} disable={false} text="Generar Reporte" />
				</View>
			</View>
		</ScrollView>
	)
}

