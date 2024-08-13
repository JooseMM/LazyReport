import { StyleSheet } from "react-native";
import { colors } from "../../constants/constantData";

const styles = StyleSheet.create({
    statusContainer: {
	backgroundColor: colors.statusContainerBackground,
	borderRadius: 5,
	padding: 10,
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
	 marginHorizontal: 10 
    },
    entryTime: {
	color: colors.blue,
	fontSize: 22,
	fontWeight: "bold",
	position: "absolute",
	bottom: 12,
	right: 20,
    }

})

export default styles;
