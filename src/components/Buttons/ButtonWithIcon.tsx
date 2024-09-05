import {
    ImageRequireSource,
TouchableOpacity,
} from "react-native";
import { colors } from "../../constants/constantData";
import { Image } from "expo-image";

const ButtonWithIcon = (props: { onPress?: ()=> void, imageSize: number, imageSource: ImageRequireSource } ) => {

    return (
	<TouchableOpacity 
	 style={{ 
	    backgroundColor: colors.blue,
	    paddingHorizontal: 20
	 }} 
	 onPress={props.onPress}
	>
	    <Image 
	     source={props.imageSource}
	     style={{
		 width: props.imageSize,
		 height: props.imageSize 
	     }}/>
	</TouchableOpacity>
    )
};
export default ButtonWithIcon;
