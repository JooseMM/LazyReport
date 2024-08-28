import { Text, View, TextInput } from "react-native";
import { useAuth } from "../../ApplicationState";
import { detainedReport  } from "./helper";
import { useEffect, useState } from "react";
import * as Clipboard from "expo-clipboard";
import styles from "./styles";
import Button from "../../components/MainButton/MainButton";

export default function ReportScreen({route}) {
    const { report } = useAuth();
    const [ finalReport, setFinalReport ] = useState(undefined);
    const { reportID } = route.params;
    const currentReport = report.find(obj => obj.id == reportID);
    const reportType = currentReport?.reportType;

    useEffect(()=> { 
	switch(reportType) {
	    case "Detenido en SEPP":
		setFinalReport(detainedReport(currentReport));
	    break;
	    case "Corte de Suministro":
		//
		break;
	}

    }, []);

    return (
	<View style={styles.mainContainer}>
	    <Text style={styles.title}>Reporte:</Text>
	    <TextInput style={styles.input}  multiline={true} numberOfLines={10} value={finalReport} onChangeText={(buffer) => setFinalReport(buffer)}/>
	    <View style={{ marginTop: 25 }}>
		<Button onButtonPressed={ async () => await Clipboard.setStringAsync(finalReport) } text="Copiar" disable={false} />
	    </View>
	</View>
    );
}

