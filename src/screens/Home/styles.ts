import { StyleSheet } from "react-native";
import { mainButtonTextStyle, mainButtonStyle } from "../../constants/baseStyles";

export const styles = StyleSheet.create({
	mainContainer: {
		marginTop: 60,
		paddingHorizontal: 20,
	},
	heroImage: {
		marginTop: 40,
		marginHorizontal: "auto"
	},
	optionsContainer: {
		marginTop: 40,
		marginHorizontal: "auto",
		width: "100%",
		maxWidth: 400,
	},
	buttonContainer: mainButtonStyle,
	text: mainButtonTextStyle,
});
