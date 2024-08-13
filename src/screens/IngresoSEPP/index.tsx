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

    const Instructions = {
	description: "Somethings to fill the text in which Im going to put other more important things hehe.",
	steps: [ 
	    "Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
	    "Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
	    "Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
	    "Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
	],
	warnings: [
	    { keywords: "This is a keyword", description: "type something here to fill a little bit of the space needed to look good" }
	]
    }
    return (
	<ScrollView>
	    <InstructionBox visible={showInstructions} content={Instructions}/>
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
		</View>
	    </View>
	</ScrollView>
    )
}

