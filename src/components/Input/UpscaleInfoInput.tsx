import { View } from "react-native";
import { UPSCALE_INFO } from "../../constants/constantData";
import TextBaseInput from "./TextBaseInput";

const UpscaleInfoInput = (props: { id: string }) => {
    return (
	<View>
	    {
		UPSCALE_INFO.map((obj, index) => {
		    return <TextBaseInput key={index} inputObject={obj} targetFormat="basicFormatState" deepReportTargetProperties={[]}/>
		})
	    }
	</View>
    );
} 

export default UpscaleInfoInput;
