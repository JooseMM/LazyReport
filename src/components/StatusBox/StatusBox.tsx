import { Text, View } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { Image } from "expo-image";

const StatusBox = () => {
    const [ visible, setVisible ] = useState(true);
    const index = 2;
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

		<View style={{ display: visible ? "flex" : "none" }}>
		    <View style={ index > 0 ? { marginTop: 0} : null }>
			<View style={styles.infoContainer}>
			    <Image style={{ width: 20, height: 20 }} contentFit="fill" source={require("./icons/phone.svg")} />
			    <Text style={styles.infoText}>13:55hrs</Text>
			</View>
			<View style={[styles.infoContainer, { marginTop: 10 }]}>
			    <Image style={{ width: 20, height: 24 }} contentFit="fill" source={require("./icons/user.svg")} />
			    <Text style={styles.infoText}>13564</Text>
			</View>
		    </View>
		</View>
		
		<Image style={ visible ? styles.openChevron : styles.closeChevron } contentFit="fill" source={require("./icons/chevron.svg")} />
		<Text style={styles.entryTime}>13:40hrs</Text>
	    </View>
    );
}

export default StatusBox;
