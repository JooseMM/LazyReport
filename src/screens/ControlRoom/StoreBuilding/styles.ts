import { StyleSheet } from "react-native";
import { colors } from "../../../constants/constantData";

export const storeBuildingStyles = StyleSheet.create({
    container: {
	position: "relative",
    },
    titleContainer: {
	flexDirection: "row",
	backgroundColor: colors.statusContainerBackground,
	paddingVertical: 12,
	borderRadius: 5,
	borderWidth: 1,
	borderStyle: "solid",
	justifyContent: "center",
	borderColor: colors.softGray,
	width: "90%",
	maxWidth: 400,
    },
    title: {
	fontSize: 20,
	fontWeight: "bold",
	color: colors.blue,
    },
    titleName: {
	color: colors.paragraphText
    },
    labels: {
	marginBottom: 5,
	marginLeft: 20,
	fontWeight: "semibold",
	fontSize: 18,
    },
    staffContainer: {
	width: "90%",
	maxWidth: 400,
	marginVertical: 15
    }
});
