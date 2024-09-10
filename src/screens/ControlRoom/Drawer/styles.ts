import { colors } from "../../../constants/constantData";
import { StyleSheet } from "react-native";

const drawerStyles = StyleSheet.create({
    mainContainer: {
	paddingHorizontal: 10,
    },
    routeLinkContainer: {
	marginTop: 12,
	flexDirection: "row",
	backgroundColor: "white",
	paddingVertical: 10,
	paddingHorizontal: 20,
	borderColor: colors.softGray,
	borderWidth: 1,
	borderStyle: "solid",
	borderRadius: 5,
    },
    routeLink: {
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
});

export default drawerStyles;


