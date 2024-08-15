import { StyleSheet } from "react-native";
import { colors } from "../../constants/constantData";

const styles = StyleSheet.create({
    statusContainer: {
	backgroundColor: colors.statusContainerBackground,
	borderRadius: 5,
	paddingVertical: 10,
	paddingHorizontal: 20,
    },
    statusMainHeader: {
	color: colors.blue,
	fontSize: 20,
	fontWeight: "bold",
    },
    statusSecondHeader: {
	color: colors.paragraphText,
    },
    statusDetainedQuatity: {
	position: "relative",
	bottom: 4,
	fontSize: 16,
	fontWeight: "semibold",
	color: colors.paragraphText
    },
    statusHeaderContainer: {
	 marginTop: 5,
	 marginBottom: 25,
    },
    entryTime: {
	color: colors.blue,
	fontSize: 22,
	fontWeight: "bold",
	position: "absolute",
	bottom: 12,
	right: 20,
    },
    infoContainer: {
	flexDirection: "row",
	alignItems: "flex-end"
    },
    infoText: {
	marginLeft: 10,
	fontSize: 18,
	position: "relative",
	top: 3,
	color: colors.paragraphText,
	opacity: 0.8,
	fontWeight: "semibold"
    },
    openChevron: {
	position: "absolute",
	bottom: 60,
	right: 30,
	width: 25,
	height: 25,
	rotation: 180,
    },
    closeChevron: {
	position: "absolute",
	top: 25,
	right: 30,
	width: 25,
	height: 25,
    }


})

export default styles;
