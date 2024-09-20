import { StyleSheet } from "react-native";
import { colors } from "../../../src/constants/constantData"

const staffBox = StyleSheet.create({
    container: {
	backgroundColor: colors.statusContainerBackground,
	paddingVertical: 15,
	paddingHorizontal: 20,
	borderRadius: 5,
	borderWidth: 1,
	borderColor: colors.softGray
    },
    title: {
	color: colors.blue,
	fontWeight: "bold",
	fontSize: 22
    },
    secondTitle: {
	color: colors.paragraphText,
	fontWeight: "regular",
	fontSize: 16,
	position: "relative",
	bottom: 5
    },
    operatorName: {
	color: colors.blue,
	fontWeight: "bold",
	fontSize: 18,
	marginHorizontal: 10
    },
    operatorNameContainer: {
	paddingVertical: 10,
	borderBottomColor: colors.softGray,
	borderBottomWidth: 1
    },
    operatorPosition: {
	color: colors.paragraphText,
	fontWeight: "medium",
	fontSize: 14,
	marginHorizontal: 10,
	position: "relative",
	bottom: 2
    },
    button: {
	backgroundColor: colors.blue,
	borderRadius: 5,
	paddingVertical: 15,
	paddingHorizontal: 20,
	marginTop: 15
    },
    buttonLabel: {
	color: "white",
	fontSize: 18,
	fontWeight: "semibold",
	marginHorizontal: "auto"
    }
});

export default staffBox;
