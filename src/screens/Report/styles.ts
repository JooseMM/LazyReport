import { StyleSheet } from "react-native";
import { mainButtonStyle, mainButtonTextStyle } from "../../constants/baseStyles";

const styles = StyleSheet.create({
	mainContainer: {
		paddingHorizontal: 30,
	},
	input: {
		marginTop: 10,
		paddingHorizontal: 25,
		paddingVertical: 15,
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

export default styles;
