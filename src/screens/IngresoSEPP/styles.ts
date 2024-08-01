import { StyleSheet } from "react-native";
import { mainButtonStyle, mainButtonTextStyle } from "../../constants/baseStyles";

export const styles = StyleSheet.create({
	border: {
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: "#70717C",
		paddingVertical: 12,
		paddingHorizontal: 15,
		borderRadius: 5,
		color: "black"
	},
	mainContainer: {
	},
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
	}
});
