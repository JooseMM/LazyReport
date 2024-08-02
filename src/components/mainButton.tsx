import { Text, Pressable, StyleSheet } from "react-native";
import { buttonProps } from "../constants/customTypes";

export const Button = (props: buttonProps ) => {
	return (
		<Pressable style={[styles.buttonContainer, props.disable ? styles.disable : null ]} onPress={() => props.onButtonPressed()} disabled={props.disable}>
			<Text style={styles.buttonText}>{props.text}</Text>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	buttonContainer : { 
		backgroundColor: "#101224",
		paddingVertical: 20,
		borderRadius: 5,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 18,
		marginHorizontal: "auto",
	},
	disable: {
		opacity: 0.6,
		backgroundColor: 'gray' 
	}
});
