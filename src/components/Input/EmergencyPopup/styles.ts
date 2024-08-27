import { StyleSheet } from "react-native";
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
	container: {
	    backgroundColor: "white",
	    width: "80%",
	    marginHorizontal: "auto",
	    marginTop: "10%",
	    borderRadius: 5,
	    paddingHorizontal: 25,
	    paddingBottom: 25,
	    paddingTop: 40,
	    zIndex: 60,
	    position: "relative"
	},
	inputContainer: {
	    borderStyle: "solid",
	    borderWidth: 1,
	    fontSize: 16,
	    borderColor: "#70717C",
	    paddingVertical: 12,
	    paddingHorizontal: 20,
	    borderRadius: 5,
	    color: "black"
	},
	label: {
	    marginBottom: 2,
	    fontWeight: "semibold",
	    fontSize: 18,
	},
	submitButton : { 
	    backgroundColor: "#101224",
	    paddingVertical: 14,
	    borderRadius: 5,
	    width: "65%",
	},
	deleteButton: {
	    paddingVertical: 14,
	    borderRadius: 5,
	    width: "30%",
	    backgroundColor: "#C54545"
	},
	buttonImage: {
	    width: 25,
	    height: 30,
	    marginHorizontal: "auto"
	},
	submitContainer: {
	    flexDirection: "row",
	    justifyContent: "space-between",
	    marginTop: 15
	},
	buttonText: {
	    color: "white",
	    fontWeight: "semibold",
	    marginHorizontal: "auto",
	    marginVertical: "auto"
	},
	close: {
	    width: 25,
	    height: 30,
	    marginHorizontal: "auto"
	},
	closeContainer: {
	    position: "absolute",
	    right: 30,
	    top: 20
	},
	invalidBorder: {
	    borderColor: colors.red,
	}

});

export default styles;
