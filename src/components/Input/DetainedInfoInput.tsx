import { View } from "react-native";
import { DETAINED_INFO } from "../../constants/constantData"; 
import TextBaseInput from "./TextBaseInput";
import { PickerBaseInput } from "./PickerBaseInput";

const DetainedInfoInput = (props: { id: string }) => {
    return (
	<View>
	{ DETAINED_INFO.map((obj, index) => {
	    return obj.id != "isUnderage" ? (
		<TextBaseInput key={index} inputObject={obj}/>
	    ) : (
		<PickerBaseInput key={index} inputObject={obj}/>
	    )
	})}
	
	</View>
    );
}

export default DetainedInfoInput;
