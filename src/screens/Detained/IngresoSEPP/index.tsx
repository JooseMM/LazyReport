import {  useEffect, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import styles from "./styles";
import Button from "../../../components/MainButton/MainButton";
import StoreInfoInput from "../../../components/Input/StoreInfoInput";
import DetainedInfoInput from "../../../components/Input/DetainedInfoInput";
import UpscaleInfoInput from "../../../components/Input/UpscaleInfoInput";
import EmergencyCallInput from "../../../components/Input/EmergencyCallInput/EmergencyCallInput";
import { useAuth } from "../../../ApplicationState";
import 'react-native-get-random-values';
import { v4 as uuidv4 } from "uuid";
import { initReport, invalidReportMessage, reportValidation } from "./helpers";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import { Image } from "expo-image";

export default function IngresoSEPPScreen({ navigation }) {
    const { setReport, report } = useAuth();
    const [ reportID ]  = useState(uuidv4());


    const goToView = () => {
	const invalid = reportValidation(report.find(obj => obj.id == reportID));

	if(!invalid)
	    navigation.navigate("Report", { reportID: reportID });
	else
	    navigation.navigate("Alert", { 
		title: invalidReportMessage.title,
		message: invalidReportMessage.message
	    });
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
const MenuSwitcher = () => {
    const icon = require("../../../../assets/hamburguer-menu-light.svg");

    return (
	<Pressable onPress={()=> console.log("hello form Test")}>
	    <Image source={icon} style={{ width: 30, height: 30 }}/>
	</Pressable>
    )
}
