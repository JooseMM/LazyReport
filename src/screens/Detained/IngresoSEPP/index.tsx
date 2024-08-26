import {  useState } from "react";
import { ScrollView, View } from "react-native";
import styles from "./styles";
import Button from "../../../components/MainButton/MainButton";
import StoreInfoInput from "../../../components/Input/StoreInfoInput";
import DetainedInfoInput from "../../../components/Input/DetainedInfoInput";
import UpscaleInfoInput from "../../../components/Input/UpscaleInfoInput";
import EmergencyCallInput from "../../../components/Input/EmergencyCallInput";

export default function IngresoSEPPScreen({ navigation }) {
    const generateReport = () => {
	// check not undefined values in critic fields
	navigation.navigate("Report");
    };

    return (
	<ScrollView style={{ position: "relative" }}>
	    <View style={styles.inputContainer}>
		<StoreInfoInput />
		<DetainedInfoInput />
		<EmergencyCallInput />
		<UpscaleInfoInput />

		<View style={{ marginTop: 25 }}>
		    <Button onButtonPressed={generateReport} disable={true} text="Generar Reporte" />
		</View>
	    </View>
	</ScrollView>
    )
}

