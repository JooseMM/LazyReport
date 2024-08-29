import {
View,
Text,
StyleSheet
} from "react-native";
import Button from "../../../components/MainButton/MainButton";
import { useNavigation } from "@react-navigation/native";
import { colors } from "../../../constants/constantData";

const AlertBox = ({route}) => {
    const navigator = useNavigation();
    const { title, message } = route.params;

    return (
	<View style={styles.blurBackground}>
	    <View style={styles.container}>
		<Text style={styles.title}>{ title }</Text>
		<Text style={styles.paragraph}>{ message }</Text>
		<Button text="¡Entendido!" onButtonPressed={()=> navigator.goBack()}/>
	    </View>
	</View>
    );
}

const styles = StyleSheet.create({
    title: {
	fontWeight: "bold",
	fontSize: 24,
	color: colors.blue,
	marginHorizontal: "auto"
    },
    paragraph: {
	color: colors.paragraphText,
	fontSize: 18,
	textAlign: "center",
	marginTop: 5,
	marginBottom: 15,
	marginHorizontal: "auto"
    },
    container: {
	backgroundColor: "white",
	padding: 25,
	width: "90%",
	marginHorizontal: "auto",
	marginVertical: "45%",
	borderRadius: 5
    },
    blurBackground: {
	backgroundColor: "rgba(51,51,51, 0.85)",
	position: "absolute",
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	zIndex: 20,
    },

})

export default AlertBox
