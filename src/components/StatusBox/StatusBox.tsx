import { Text, View, Pressable } from "react-native";
import styles from "./styles";
import { useState } from "react";
import { Image } from "expo-image";
import { phoneIcon, userIcon } from "./helper"

const StatusBox = () => {
    const [ visible, setVisible ] = useState(false);
    const index = 2;


    return (
	    <Pressable style={styles.statusContainer} onPress={() => setVisible(prev => !prev)}>

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
		    <View style={{ marginBottom: 20 } }>
			<View style={styles.infoContainer}>
			    <Image style={{ width: 20, height: 20 }} contentFit="fill" source={phoneIcon} />
			    <Text style={styles.infoText}>13:55hrs</Text>
			</View>
			<View style={[styles.infoContainer, { marginTop: 10 }]}>
			    <Image style={{ width: 20, height: 24 }} contentFit="fill" source={userIcon} />
			    <Text style={styles.infoText}>13564</Text>
			</View>
		    </View>
		</View>
		
		<Image style={ visible ? styles.openChevron : styles.closeChevron } contentFit="fill" source={require("./icons/chevron.svg")} />
		<Text style={styles.entryTime}>13:40hrs</Text>
	    </Pressable>
    );
}

export default StatusBox;
