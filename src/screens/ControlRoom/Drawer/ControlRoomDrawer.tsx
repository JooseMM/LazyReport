import {
DrawerContentScrollView,
DrawerContentComponentProps
} from "@react-navigation/drawer";
import {
View,
Text,
TouchableOpacity,
ViewStyle
} from "react-native";
import { ControlRoomDrawerRoutes, colors } from "../../../constants/constantData";
import  drawerStyles  from "./styles";
import { Image } from "expo-image";

const ControlRoomDrawer = (props: DrawerContentComponentProps) => {
    const currentIndex = props.state.index;
    const operatorName = "Jose Moreno";
    const backupName = "Jorge Andrades";

    return (
	<DrawerContentScrollView style={drawerStyles.mainContainer}>
	    <View style={drawerStyles.operatorContainer}>
		<Text style={drawerStyles.operatorName}>{ operatorName }</Text>
		<Text style={drawerStyles.backupOperator}>{ "Apoyo " + backupName }</Text>
	    </View>
	    <View>
		{ ControlRoomDrawerRoutes.map((current, index) => {
		    return <RouteLinkButton
			     key={index}
			     isFinish={index === 1}
			     isFocus={ index === currentIndex}
			     code={index > 0 ? current.code : "L90" }
			     name={current.name}
			     onPress={()=> props.navigation.jumpTo(current.name)}
			     styles={index > 0 && { marginTop: 5 }}
			     />
		})}
	    </View>

	</DrawerContentScrollView>
    );
}

const RouteLinkButton = (props: {
    isFocus: boolean,
    isFinish: boolean,
    styles?: ViewStyle,
    code: string,
    name: string,
    onPress: ()=> void,

}) => {
	const { isFocus, isFinish, code, name } = props;
    return (
	<TouchableOpacity onPress={props.onPress} style={[drawerStyles.routeLinkContainer, props.styles]}>
	    <View style={[drawerStyles.routeLink, isFocus && { backgroundColor: colors.blue }]}>
		<Text style={[drawerStyles.storeCode, isFocus && { color: "white" }]}>{ code }</Text>
		<Text style={drawerStyles.storeName}>{ name }</Text>
	    </View>
	    <Image 
	     source={require("../../../../assets/completedGreenColorIcon.svg")}
	     style={{ width: 20, height: 20 }}
	     />
	</TouchableOpacity>
    );
}
export default ControlRoomDrawer;

