import { StyleSheet } from "react-native";
import { colors } from "../../../constants/constantData";

const styles = StyleSheet.create({
    mainContainer: {
	paddingHorizontal: 20,
	paddingVertical: 30,
	width: "100%"
    },
    title: {
	color: colors.blue,
	fontSize: 20,
	fontWeight: "bold",
    },
})

export default styles;
