import { STORE_INFO } from "../../constants/constantData"; 
import { 
    View
} from "react-native";
import TextBaseInput from "./TextBaseInput";
import { PickerBaseInput } from "./PickerBaseInput";

const StoreInfoInput = (props: { id: string }) => {
    return (
	<View>
	{ STORE_INFO.map((obj, index) => {
	    return obj.id == "storeFormat" ? (
		<PickerBaseInput key={index} reportID={props.id} inputObject={obj}/>
	    ) : (
		<TextBaseInput key={index} reportID={props.id} inputObject={obj}/>
	    )
	})}
	</View>
    );
}

export default StoreInfoInput;
