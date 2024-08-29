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

	const genericReportProperty = (element: string):boolean => ( 
	    current[element] == undefined || current[element] == null || current[element] == "" ? true : false 
	 );
	
	reportObjectKeys.forEach((element)=> {
	    if(element == "isUnderage") {
		const value = current[element];

		if(typeof value == "object" && value == null)
		    invalid = true;
		if(typeof value == "object" && value == undefined)
		    invalid = true;
		if(typeof value != "object" && value != null)
		    invalid = false;

		console.log(element + " picker value is: " + value);
	    }
	    else {
		invalid = genericReportProperty(element);
		console.log(element + ": " + invalid);
	    }
	});

	if(!invalid) 
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

