import {  useState } from "react";
import { ScrollView, View, Text } from "react-native";
import { useAuth } from "../../ApplicationState";
import { DETAINED_INPUT, INITIAL_REPORT_STATE, INITIAL_INVALID_LIST_STATE } from "./helpers";
import styles from "./styles";
import Button from "../../components/MainButton/MainButton";
import { InputID, DetainedReportData  } from "../../constants/customTypes";
import TextBaseInput from "../../components/Input/TextBaseInput";
import { PickerBaseInput } from "../../components/Input/PickerBaseInput";
import InstructionBox from "../../components/InstructionBox/InstructionBox";

export default function IngresoSEPPScreen({ navigation }) {

    const [ invalidInputState, setInvalidInputState ] = useState<Array<InputID>>(INITIAL_INVALID_LIST_STATE);
    const [ reportState, setReportState ] = useState<DetainedReportData>({...INITIAL_REPORT_STATE, reportType: "Detenido en SEPP" });
    const { setReport } = useAuth();
    const [ showInstructions, setShowInstructions ] = useState(false);

    const generateReport = () => {
	setReport(reportState);
	navigation.navigate("Report");
    };
    return (
	<ScrollView>
	    <InstructionBox visible={showInstructions} description="" steps={["",""]} warnings={[{ keywords: "Menores de Edad", description: "do some when you see those dudes being menors"}]}/>
	    <View style={styles.inputContainer}>
		{ DETAINED_INPUT.map((object, index)=> {
		    return object.id !== "storeFormat" && object.id !== "isUnderage" ? 
			<TextBaseInput key={index} 
			inputObject={object}
			updateReportState={setReportState} 
			updateInvalidInputState={setInvalidInputState} 
			/>
			:
			<PickerBaseInput key={index}
			inputObject={object}
			updateReportState={setReportState}
			updateInvalidInputState={setInvalidInputState}
			/>
		})}

		<View style={{ marginTop: 25 }}>
		    <Button onButtonPressed={generateReport} disable={invalidInputState.length > 0 } text="Generar Reporte" />
		    <Button onButtonPressed={()=> { console.log(invalidInputState); console.log(reportState) } } disable={false} text="Check Invalids" />
		</View>
	    </View>
	</ScrollView>
    )
}

