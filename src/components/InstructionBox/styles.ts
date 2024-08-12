import { StyleSheet } from "react-native"

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
	    marginTop: "10%",
	    borderRadius: 5,
	    paddingVertical: 15,
	    paddingHorizontal: 20,
	},
	header: {
		marginBottom: 5,
		fontWeight: "bold",
		fontSize: 18,
	},
	stepHeader: {
		marginTop: 10,
		marginBottom: 5,
		fontWeight: "semibold",
		fontSize: 16,
	},
	paragraph: {
	    color: "#585966"
	},
	warningBackground: {
	    backgroundColor: "#C55959",
	},
	warningKeyword: {
	    color: "white",
	    fontWeight: "bold"
	},
	warningDescription: {
	    color: "#F6E6E6"
	}
})

export default styles;
