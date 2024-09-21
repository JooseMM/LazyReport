import { StyleSheet } from "react-native";
import { colors } from "../../../constants/constantData";

const popupInput = StyleSheet.create({
    background: {
	position: 'absolute',
	zIndex: 100,
	top: 0,
	bottom: 0,
	right: 0,
	left: 0,
	backgroundColor: "rgba(51,51,51, 0.85)",
	alignItems: "center"
    },
    invalidButton: {
	opacity: 0.6,
	backgroundColor: 'gray' 
    },
    container: {
	position: "relative",
	backgroundColor: "white",
	marginTop: "10%",
	width: "90%",
	maxWidth: 400,
	padding: 20,
	borderRadius: 5
    },
    actionContainer: {
	flexDirection: "row",
	marginTop: 25,
	justifyContent: "space-between",
	alignItems: "center",
	width: "100%",
	height: 70
    },
    button: {
	backgroundColor: colors.blue,
	borderRadius: 5,
	flex: 0.75,
	height: "100%",
	justifyContent: "center"
    },
    deleteButtonContainer: {
	backgroundColor: colors.red,
	paddingHorizontal: 20,
	height: "100%",
	borderRadius: 5,
	flex: 0.2,
	justifyContent: "center"
    },
    trashImage: {
	width: 30,
	height: 30,
	marginHorizontal: "auto",
    },
    buttonlabel: {
	color: "white",
	marginHorizontal: "auto",
	fontSize: 18,
	fontWeight: "bold"
    },
    closeButton: {
	position: "relative",
	alignSelf: "flex-end",
	zIndex: 100
    }
});

export default popupInput;
