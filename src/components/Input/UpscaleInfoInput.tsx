import { View } from "react-native";
import { UPSCALE_INFO } from "../../constants/constantData";
import TextBaseInput from "./TextBaseInput";

const UpscaleInfoInput = (props: { id: string }) => {
    return (
	<View>
	    {
		UPSCALE_INFO.map((obj, index) => {
		    return <TextBaseInput reportID={props.id} key={index} inputObject={obj}/>
		})
	    }
	</View>
    );
} 

export default UpscaleInfoInput;
