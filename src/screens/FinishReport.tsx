import { Text, View, StyleSheet, TextInput, Pressable } from "react-native";
import { useAuth } from "../ApplicationState";
import { generateReport } from "../constants/constants";
import { useEffect, useState } from "react";
import * as Clipboard from "expo-clipboard";

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

const styles = StyleSheet.create({
	mainContainer: {
		paddingHorizontal: 30,
	},
	input: {
		marginTop: 10,
		padding: 25,
		width: '100%',
		fontSize: 18,
		borderColor: 'gray',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 50,
	},
	button: {
		backgroundColor: "#101224",
		marginTop: 30,
		marginHorizontal: "auto",
		paddingVertical: 20,
		borderRadius: 5,
		width: "100%",
		paddingHorizontal: 20,
	},
	buttonText: {
		color: "white",
		marginHorizontal: "auto",
		fontSize: 18,
		fontWeight: "bold"
	}
});

