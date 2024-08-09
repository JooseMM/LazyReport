import { Text, View, TextInput, StyleSheet, } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { InputID } from "../../constants/customTypes";
import { SetStateAction, Dispatch } from "react";
import { selectFormats } from "../../constants/constantData";
import { styles } from "./styles";

export const PickerInput = (props: { input: string, label: string, setInput: Dispatch<SetStateAction<string>>, id:InputID }) => {
	return (
		<View>
			<Text style={styles.label}>{ props.label + ":" }</Text>
			<View style={{borderWidth: 1, borderColor: 'gray', borderRadius: 5}}>
				{ props.id === "storeFormat" ?
					 <Picker selectedValue={props.input} onValueChange={itemValue => props.setInput(itemValue)}>
						{selectFormats.map((value, index) => <Picker.Item key={index} label={value.name} value={value.name}/>)}
					</Picker>
				: 
					<Picker selectedValue={props.input} onValueChange={itemValue => props.setInput(itemValue)}>
						<Picker.Item label="No" value={false}/>
						<Picker.Item label="Si" value={true}/>
					</Picker>
				}
			</View>
		</View>
	);
};

