import { 
Text,
View,
ScrollView
} from "react-native";
import styles from "./styles";
import Button from "../../../components/Buttons/MainButton/MainButton";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { chooseInstructions, Instructions } from "./helper";

const InstructionBox = () => {
    const navigation = useNavigation();
    const { routeNames } = navigation.getState();
    const [ instructions ] = useState<Instructions>(chooseInstructions(routeNames));

    return (
	    <ScrollView style={styles.blurBackground}>
		<View style={styles.instructionContainer}>
		    <View style={{ marginBottom: 12, marginTop: 5 }}>
			<Text style={[styles.header, { fontWeight: "bold" }]}>Protocolo</Text>
			<Text style={styles.paragraph}>{ instructions.description }</Text>
		    </View>
		    <View>
			{ instructions.steps.map((step, index) => {
			    return (
				<View key={index} style={styles.stepContainer}>
				    <Text style={styles.stepHeader}>{ "Paso " + ( index + 1 ) + ":" }</Text>
				    <Text style={styles.paragraph}>{ step }</Text>
				</View>
			    );
			})}
			<View style={styles.warningContainer}>
			    <Text style={styles.warningTitle}>¡Precauciones!</Text>
			    { instructions.warnings.map((warning, index) => {
				return (
					<Text key={index} style={styles.warningDescription}>
					    <Text style={styles.warningKeyword}>
						{ warning.keywords + " " }
					    </Text>
					    { warning.description }
					</Text>
				);
			    })}
			</View>
		    </View>
		    <Button  onButtonPressed={()=> navigation.goBack()} text="Entendido" disable={false}/>
		</View>
	    </ScrollView>
    );
}

export default InstructionBox;
