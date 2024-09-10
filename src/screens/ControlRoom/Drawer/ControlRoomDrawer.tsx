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
import { ControlRoomDrawerRoutes } from "../../../constants/constantData";

const ControlRoomDrawer = (props: DrawerContentComponentProps) => {
    const currentIndex = props.state.index;

    return (
	<DrawerContentScrollView>
	    <View>
		<Text>{ /* operator name here */}</Text>
		<Text>{ /* backup name here  */}</Text>
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
			     styles={index > 0 && { marginTop: 4 }}
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
	<TouchableOpacity onPress={props.onPress} style={[props.styles]}>
	    <View style={{ flexDirection: "row" }}>
		<Text>{ code }</Text>
		<Text>{ name }</Text>
	    </View>
	</TouchableOpacity>
    );
}
export default ControlRoomDrawer;

