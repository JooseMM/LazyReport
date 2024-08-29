import { StyleSheet } from "react-native";
import { colors } from "../../constants/constantData";

export const styles = StyleSheet.create({
	label: {
		marginTop: 15,
		marginBottom: 2,
		fontWeight: "semibold",
		fontSize: 18,
	},	
	border: {
		borderStyle: "solid",
		borderWidth: 1,
		borderColor: colors.paragraphText,
		paddingVertical: 12,
		paddingHorizontal: 15,
		borderRadius: 5,
		color: "black"
	}
});

