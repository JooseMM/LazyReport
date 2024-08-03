import { Text, View, TextInput, Pressable } from "react-native";
import { useAuth } from "../../ApplicationState";
import { generateReport } from "../../constants/helperMethods";
import { useEffect, useState } from "react";
import * as Clipboard from "expo-clipboard";
import { styles } from "./styles";
import Button from "../../components/MainButton";

export default function FinishReportScreen() {
	const { report } = useAuth();
	const [ finalReport, setFinalReport ] = useState(undefined);
	useEffect(()=> { setFinalReport(generateReport(report)) }, []);

	return (
		<View style={styles.mainContainer}>
			<Text style={styles.title}>Reporte:</Text>
			<TextInput style={styles.input}  multiline={true} numberOfLines={10} value={finalReport} onChangeText={(buffer) => setFinalReport(buffer)}/>
			<Button onButtonPressed={ async () => await Clipboard.setStringAsync(finalReport) } text="Copiar" disable={false} />
		</View>
	);
}

