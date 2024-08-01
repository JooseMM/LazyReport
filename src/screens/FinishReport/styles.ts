import { StyleSheet } from "react-native";
import { mainButtonStyle, mainButtonTextStyle } from "../../constants/baseStyles";

export const styles = StyleSheet.create({
	mainContainer: {
		paddingHorizontal: 30,
	},
	input: {
		marginTop: 10,
		padding: 25,
		width: '100%',
		fontSize: 18,
		borderColor: 'gray',
		borderStyle: 'solid',
		borderWidth: 1,
		borderRadius: 5,
	},
	title: {
		fontSize: 20,
		fontWeight: 'bold',
		marginTop: 50,
	},
	button: { 
		...mainButtonStyle,
		marginTop: 25
	},
	buttonText: mainButtonTextStyle
});

