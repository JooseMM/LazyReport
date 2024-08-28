import {  useEffect, useState } from "react";
import { ScrollView, View, Text } from "react-native";
import styles from "./styles";
import Button from "../../../components/MainButton/MainButton";
import StoreInfoInput from "../../../components/Input/StoreInfoInput";
import DetainedInfoInput from "../../../components/Input/DetainedInfoInput";
import UpscaleInfoInput from "../../../components/Input/UpscaleInfoInput";
import EmergencyCallInput from "../../../components/Input/EmergencyCallInput/EmergencyCallInput";
import { useAuth } from "../../../ApplicationState";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import { initReport, reportObjectKeys } from "./helpers";

export default function IngresoSEPPScreen({ navigation }) {
    const { setReport, report } = useAuth();
    const [ reportID ]  = useState(uuidv4());

    const viewReport = () => {
	let invalid: boolean;
	
	const current = report.find(obj => obj.id == reportID);
	reportObjectKeys.forEach((element)=> {
	    if(current[element] == undefined || current[element] == null || current[element] == "")
		invalid = true;
	    else
		invalid = false;
	})

	navigation.navigate("Report", { reportID: reportID });
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
		    <Button onButtonPressed={viewReport} disable={false} text="Generar Reporte" />
		</View>
	    </View>
	</ScrollView>
    )
}

