import {  useEffect, useState } from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import Button from "../../../components/MainButton/MainButton";
import StoreInfoInput from "../../../components/Input/StoreInfoInput";
import DetainedInfoInput from "../../../components/Input/DetainedInfoInput";
import UpscaleInfoInput from "../../../components/Input/UpscaleInfoInput";
import EmergencyCallInput from "../../../components/Input/EmergencyCallInput/EmergencyCallInput";
import { useAuth } from "../../../ApplicationState";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import { initReport, reportValidation } from "./helpers";

export default function IngresoSEPPScreen({ navigation }) {
    const { setReport, report } = useAuth();
    const [ reportID ]  = useState(uuidv4());
    const [ invalidReport, setInvalidReport ] = useState(false);

    const goToView = () => {
	const current = report.find(obj => obj.id == reportID);
	reportValidation(current, setInvalidReport);

	if(!invalidReport) 
	    navigation.navigate("Report", { reportID: reportID });
	    
	//else  implement a popup to tell the client that somwthing is wrong
    };

    useEffect(()=> {
	setReport(prev => [...prev, {...initReport, id: reportID }]);
    }, []);

    return (
	<ScrollView style={{ position: "relative" }}>
	    <View style={styles.inputContainer}>
		<StoreInfoInput id={reportID}/>
		<DetainedInfoInput id={reportID}/>
		<EmergencyCallInput id={reportID}/>
		<UpscaleInfoInput id={reportID}/>
		<View style={{ marginTop: 25 }}>
		    <Button onButtonPressed={goToView} disable={false} text="Generar Reporte" />
		</View>
	    </View>
	</ScrollView>
    )
}

