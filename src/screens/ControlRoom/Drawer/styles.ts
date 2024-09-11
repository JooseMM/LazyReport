import { colors } from "../../../constants/constantData";
import { StyleSheet } from "react-native";

const drawerStyles = StyleSheet.create({
    styleProp: {
	justifyContent: "space-between",
	height: "100%" 
    },
    container: {
	paddingHorizontal: 10,
    },
    routeLinkContainer: {
	flexDirection: "row",
	alignItems: "center",
	justifyContent: "space-between",
	paddingVertical: 10,
	paddingHorizontal: 20,
	backgroundColor: "white",
	borderColor: colors.softGray,
	borderWidth: 1,
	borderStyle: "solid",
	borderRadius: 5,
    },
    routeLink: {
	flexDirection: "row",
	alignItems: "center",
    },
    storeCode: {
	color: colors.blue,
	fontWeight: "bold",
	fontSize: 18,
	marginRight: 10
    },
    storeName: {
	fontWeight: "bold",
	fontSize: 18,
	color: colors.paragraphText,
    },
    operatorContainer: {
	flex: 0.06,
	borderBottomColor: colors.softGray,
	borderBottomWidth: 1,
	borderStyle: "solid",
	paddingBottom: 5,
	paddingHorizontal: 10
    },
    operatorName: {
	fontWeight: "bold",
	color: colors.blue,
	fontSize: 22
    },
    backupOperator: {
	fontSize: 16,
	color: colors.paragraphText,
	fontWeight: "regular",
	position: "relative",
	bottom: 5
    },
    buttonContainer: {
	paddingVertical: 10
    },
    button: {
	paddingVertical: 14,
	backgroundColor: colors.blue,
	borderRadius: 5,
    },
    buttonlabel: {
	color: "white",
	fontWeight: "bold",
	fontSize: 20,
	marginHorizontal: "auto"
    },
    timeLeft: {
	marginHorizontal: "auto",
	marginBottom: 5,
	fontWeight: "medium",
	color: colors.paragraphText,
    }
});

export default drawerStyles;


