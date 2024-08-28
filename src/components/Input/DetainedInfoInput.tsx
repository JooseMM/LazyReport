import { View } from "react-native";
import { DETAINED_INFO } from "../../constants/constantData"; 
import TextBaseInput from "./TextBaseInput";
import { PickerBaseInput } from "./PickerBaseInput";
import TimeBaseInput from "./TimeBaseInput";

const DetainedInfoInput = (props: { id: string }) => {
    return (
	<View>
	{ DETAINED_INFO.map((obj, index) => 
	    obj.id == "isUnderage" ? <PickerBaseInput 
					key={index} 
					reportID={props.id} 
					inputObject={obj}
					/>
	    : obj.id == "time" ? <TimeBaseInput 
				    key={index} 
				    reportID={props.id} 
				    inputObject={obj} 
				    />
	    : <TextBaseInput 
		key={index} 
		reportID={props.id} 
		inputObject={obj}
		/>
	)}
	
	</View>
    );
}

export default DetainedInfoInput;
