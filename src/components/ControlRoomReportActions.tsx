import {
View,
StyleSheet,
Text,
TouchableOpacity
} from "react-native";
import { colors } from "../constants/constantData";
import { Image } from "expo-image";

const ControlRoomReportActions = (props: { completed: boolean, storeCode: number })=> {
    return props.completed ? null : <UncompletedActions/> 
};

const UncompletedActions = () => {
    const finishIcon = require("../../assets/basicDoneIcon.svg");
    return (
	    <View style={ownStyles.container}>
		<TouchableOpacity style={[ownStyles.baseButton, { backgroundColor: colors.blue }]}>
		    <Image source={finishIcon} style={ownStyles.imageDimensions}/>
		</TouchableOpacity>
	    </View>
    )
}

const ownStyles = StyleSheet.create({
    container: {
	flexDirection: "row",
	marginVertical: 30
    },
    baseButton: {
	borderRadius: 1000,
	borderColor: colors.softGray,
	borderWidth: 1,
	padding: 35,
	borderStyle: "solid",
    },
    imageDimensions: {
	width: 40,
	height: 40,
    }
})
export default ControlRoomReportActions;
