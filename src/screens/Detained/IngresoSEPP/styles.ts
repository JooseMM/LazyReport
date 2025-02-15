import { StyleSheet } from "react-native";
import { mainButtonStyle, mainButtonTextStyle } from "../../../constants/baseStyles";

const styles = StyleSheet.create({
	inputContainer: {
		marginHorizontal: "auto",
		paddingHorizontal: 20,
		paddingBottom: 40,
		paddingTop: 20,
		maxWidth: 450,
		width: "100%"
	},
	label: {
		marginTop: 15,
		marginBottom: 2,
		fontWeight: "semibold",
		fontSize: 18,
	},
	buttonText: mainButtonTextStyle,
	button: { 
		...mainButtonStyle,
		marginTop: 25
	},
	title: {
		marginTop:  40,
		marginBottom: 10,
		fontSize: 30,
		fontWeight: "bold",
		marginHorizontal: "auto"
	},

});

export default styles;
