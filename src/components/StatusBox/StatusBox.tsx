import { Text, View } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { Image } from "expo-image";

const StatusBox = () => {
    const [ visible, setVisible ] = useState(true);

    return (
	    <View style={styles.statusContainer}>

		<View style={styles.statusHeaderContainer}>
		    <Text style={styles.statusMainHeader}>
			HL 121
			<Text style={styles.statusSecondHeader}> Puerto Varas</Text>
		    </Text>
		    <Text style={styles.statusDetainedQuatity}>
			2 Detenidos
		    </Text>
		</View>

		<View style={{ marginBottom: 10, display: visible ? "flex" : "none" }}>
		    <Image source={require("./icons/phone.svg")}/>
		</View>

		<Text style={styles.entryTime}>13:40hrs</Text>
	    </View>
    );
}

export default StatusBox;
