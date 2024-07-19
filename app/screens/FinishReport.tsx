import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useAuth } from "../ApplicationState";
import { generateReport } from "../../constants/constants";
import { useEffect, useState } from "react";
import * as Clipboard from "expo-clipboard";

export default function FinishReportScreen() {
	const { report } = useAuth();
	const [ finalReport, setFinalReport ] = useState(undefined);
	useEffect(()=> { setFinalReport(generateReport(report)) }, []);

	return (
		<View>
			<Text>Report</Text>
			<TextInput  multiline={true} numberOfLines={10} value={finalReport} onChangeText={(buffer) => setFinalReport(buffer)}/>
			<Pressable onPress={ async () => await Clipboard.setStringAsync(finalReport) }>
				<Text>Copiar</Text>
			</Pressable>
		</View>
	);
}
