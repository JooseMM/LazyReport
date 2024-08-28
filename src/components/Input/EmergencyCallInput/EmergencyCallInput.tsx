import { 
View,
Text,
StyleSheet,
Pressable
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useAuth } from "../../../ApplicationState";
import { colors, localTimeOptions } from "../../../constants/constantData";
import { Image } from "expo-image";
import { plusIcon } from "./helper";
import { useEffect, useState } from "react";

const EmergencyCallInput = (props: { id: string }) => {
    const navigator = useNavigation<any>();
    const { report } = useAuth();
    const currentReport = report?.find(value => value.id == props.id);
    const callArray = currentReport?.emergencyCall;
    const arrayLength = callArray?.length || 0;

    return (
	<View style={styles.container}>
	    <Text style={styles.label}>Llamada de Emergencias:</Text>
		    <View style={styles.infoContainer}>
		    {	arrayLength > 0 ? (
			    callArray.map((value, index) => {
				return  <InfoBox 
					 key={index}
					 index={index} 
					 navigator={navigator}
					 annex={value.annex}
					 time={value.time}
					 id={props.id}
					    /> 
			    }))
			: <Text style={styles.outputText}>-- Sin Llamadas --</Text>
		    }
		    </View>
		    <Pressable
		     style={styles.buttonContainer}
		     onPress={()=> navigator.navigate("AddEmergencyCall", { reportID: props.id })}
		     >
			<Image source={plusIcon} style={styles.buttonImage}/>
		    </Pressable>
	</View>
    );
}

const InfoBox = (props: { index: number, annex: string, time: Date, navigator: any, id: string}) => {
    return (
	<Pressable 
	style={[styles.infoBox, { marginTop: props.index > 0 ? 10 : 0 }]}
	onPress={()=> { 
	    props
	    .navigator
	    .navigate("AddEmergencyCall", { reportID: props.id, callIndex: props.index })
	}}
	>
	    <Text style={[styles.infoText, { marginRight: 20 }]}>{ props.time.toLocaleTimeString("es-MX", localTimeOptions) + "hrs" }</Text>
	    <Text style={styles.infoText}>{ props.annex }</Text>
	</Pressable> 
    );
}

const styles = StyleSheet.create({
    container: {
	marginTop: 15,
	marginBottom: 5,
    },
    label: {
	fontWeight: "semibold",
	fontSize: 18,
    },
    outputText: {
	color: colors.paragraphText,
	fontSize: 16,
	marginHorizontal: "auto",
	textAlign: "center",
	marginVertical: 4,
    },
    buttonContainer : { 
	backgroundColor: "#101224",
	paddingVertical: 14,
	borderRadius: 5,
    },
    buttonImage: {
	width: 25,
	height: 25,
	marginHorizontal: "auto"
    },
    disable: {
	opacity: 0.6,
	backgroundColor: 'gray' 
    },
    infoBox: {
	flexDirection: "row",
	alignItems: "center",
	paddingVertical: 12,
	paddingHorizontal: 20,
	backgroundColor: "#CFD0D3",
	borderRadius: 5,
    },
    infoContainer: {
	paddingTop: 8,
	paddingBottom: 14
    },
    infoText: {
	color: "#404150",
	fontSize: 16
    }
});

export default EmergencyCallInput;
