import { View, ScrollView, Text } from "react-native";
import Button from "../../components/MainButton/MainButton";
import styles from  "./styles";
import { colors } from "../../constants/constantData";
import StatusBox from "../../components/StatusBox/StatusBox";

const StatusSEPPScreen = () => {
    return (
	<ScrollView style={styles.mainContainer}>
	    <Text style={styles.title}>
		Status de Detenidos 
	    </Text>
	    <View style={{ marginVertical: 10 }}>
		<StatusBox />
	    </View>

	    <Button text="Generar Reporte" disable={false} onButtonPressed={null}/>
	</ScrollView>
    )
}

export default StatusSEPPScreen;
