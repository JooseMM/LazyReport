import { Text, TouchableOpacity } from "react-native";
import { buttonProps } from "../../../constants/customTypes";
import styles from "./styles";

const Button = (props: buttonProps) => {
	return (
		<TouchableOpacity style={[styles.buttonContainer, props.disable ? styles.disable : null ]} onPress={() => props.onButtonPressed()} disabled={props.disable}>
			<Text style={styles.buttonText}>{props.text}</Text>
		</TouchableOpacity>
	);
}

export default Button;
