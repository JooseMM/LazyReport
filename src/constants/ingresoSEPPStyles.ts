import { StyleSheet } from "react-native";

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
	button: {
		backgroundColor: "#101224",
		marginTop: 30,
		marginHorizontal: "auto",
		paddingVertical: 20,
		borderRadius: 5,
		width: "100%",
		paddingHorizontal: 20,
	},
	buttonText: {
		color: "white",
		marginHorizontal: "auto",
		fontSize: 18,
		fontWeight: "bold"
	},
	title: {
		marginTop:  40,
		marginBottom: 10,
		fontSize: 30,
		fontWeight: "bold",
		marginHorizontal: "auto"
	}
});
