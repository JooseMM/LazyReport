import { StyleSheet } from "react-native";
import { colors } from "../../constants/constantData";

export const styles = StyleSheet.create({
	label: {
		marginTop: 15,
		marginBottom: 2,
		fontWeight: "semibold",
		fontSize: 18,
	},	
	border: {
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: colors.paragraphText,
		paddingVertical: 12,
		paddingHorizontal: 15,
		borderRadius: 5,
		color: "black"
	}
});

export const buttonStyles = StyleSheet.create({
	buttonContainer : { 
		backgroundColor: "#101224",
		paddingVertical: 16,
		borderRadius: 5,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 20,
		marginHorizontal: "auto",
	},
	disable: {
		opacity: 0.6,
		backgroundColor: 'gray' 
	}
});

export const stepCounterStyles = StyleSheet.create({
    inputContainer: {
	borderStyle: "solid",
	borderWidth: 1,
	fontSize: 16,
	borderColor: colors.paragraphText,
	paddingVertical: 10,
	paddingHorizontal: 20,
	borderRadius: 5,
	color: "black",
	width: "25%",
    },
    output: {
	fontSize: 16
    },
    label: {
	marginBottom: 4,
	fontWeight: "semibold",
	fontSize: 18,
    },
    buttonImage: {
	width: 15,
	height: 17,
	marginHorizontal: "auto"
    },
    incrementButton: { 
	...buttonStyles.buttonContainer,
	width: "48%"
    },
    decrementButton: { 
	...buttonStyles.buttonContainer,

	backgroundColor: "white",
	borderColor: colors.paragraphText,
	borderStyle: "solid",
	borderWidth: 1,
	width: "48%"
    },
    rowContainer: {
	flexDirection: "row",
	justifyContent: "space-between"
    },
    actionContainer: {
	flexDirection: "row",
	width: "72%",
	justifyContent: "space-between"
    }
});

