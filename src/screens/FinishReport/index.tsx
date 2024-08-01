import { Text, View, TextInput, Pressable } from "react-native";
import { useAuth } from "../../ApplicationState";
import { generateReport } from "../../constants/helperMethods";
import { useEffect, useState } from "react";
import * as Clipboard from "expo-clipboard";
import { styles } from "./styles";

export default function FinishReportScreen() {
	const { report } = useAuth();
	const [ finalReport, setFinalReport ] = useState(undefined);
	useEffect(()=> { setFinalReport(generateReport(report)) }, []);

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.title}>Reporte:</Text>
			<TextInput style={styles.input}  multiline={true} numberOfLines={10} value={finalReport} onChangeText={(buffer) => setFinalReport(buffer)}/>
			<Pressable style={styles.button} onPress={ async () => await Clipboard.setStringAsync(finalReport) }>
				<Text style={styles.buttonText}>Copiar</Text>
			</Pressable>
		</View>
	);
}

