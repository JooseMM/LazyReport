import { STORE_INFO } from "../../constants/constantData"; 
import { 
    View
} from "react-native";
import TextBaseInput from "./TextBaseInput";
import { PickerBaseInput } from "./PickerBaseInput";

const StoreInfoInput = () => {
    return (
	<View>
	{ STORE_INFO.map((obj, index) => {
	    return obj.id != "storeFormat" ? (
		<TextBaseInput key={index} inputObject={obj}/>
	    ) : (
		<PickerBaseInput key={index} inputObject={obj}/>
	    )
	})}
	</View>
    );
}

export default StoreInfoInput;
