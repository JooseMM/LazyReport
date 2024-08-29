import { StyleSheet } from "react-native"
import { colors } from "../../../constants/constantData";

const styles = StyleSheet.create({
	blurBackground: {
	    backgroundColor: "rgba(51,51,51, 0.85)",
	    position: "absolute",
	    top: 0,
	    left: 0,
	    right: 0,
	    bottom: 0,
	    zIndex: 20,
	},
	instructionContainer: {
	    backgroundColor: "white",
	    width: "80%",
	    marginHorizontal: "auto",
	    marginVertical: "10%",
	    borderRadius: 5,
	    padding: 25,
	},
	header: {
		marginBottom: 5,
		fontWeight: "bold",
		fontSize: 21,
		color: colors.blue,
	},
	stepHeader: {
		color: colors.blue,
		marginBottom: 5,
		fontWeight: "bold",
		fontSize: 18,
	},
	stepContainer: {
	    marginVertical: 5,
	},
	paragraph: {
	    color: "#585966",
	    fontSize: 16
	},
	warningTitle: {
	    color: "white",
	    fontWeight: "bold",
	    fontSize: 18, 
	    marginBottom: 5
	},
	warningContainer: {
	    marginVertical: 20,
	    borderRadius: 5,
	    paddingVertical: 18,
	    paddingHorizontal: 15,
	    backgroundColor: "#C55959",
	},
	warningKeyword: {
	    color: "white",
	    fontWeight: "bold",
	},
	warningDescription: {
	    color: "#F6E6E6",
	    fontSize: 16
	}
})

export default styles;
