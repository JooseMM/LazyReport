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
    const timeLeft = 40

    return (
	<DrawerContentScrollView
	 contentContainerStyle={drawerStyles.styleProp}
	 style={drawerStyles.container}
	>
	    <View style={drawerStyles.operatorContainer}>
		<Text style={drawerStyles.operatorName}>{ operatorName }</Text>
		<Text style={drawerStyles.backupOperator}>{ "Apoyo " + backupName }</Text>
	    </View>
	    <View style={{ flex: 0.94, justifyContent: "space-between" }}>
		<View style={{ paddingVertical: 10 }}>
		    { ControlRoomDrawerRoutes.map((current, index) => {
			return <RouteLinkButton
				 key={index}
				 isFinish={index === 1}
				 isFocus={ index === currentIndex}
				 code={index > 0 ? current.code : 90 }
				 name={current.name}
				 onPress={()=> props.navigation.jumpTo(current.name)}
				 styles={index > 0 && { marginTop: 5 }}
				 />
		    })}
		</View>
		<View style={drawerStyles.buttonContainer}>
		    <Text style={drawerStyles.timeLeft}>Proximo reporte en: { timeLeft }</Text>
		    <TouchableOpacity  
		     style={drawerStyles.button}
		     onPress={()=> console.log("pressed")}
		     >
			<Text style={drawerStyles.buttonlabel}>Generar Reporte</Text>
		    </TouchableOpacity>
		</View>
	    </View>
	</DrawerContentScrollView>
    );
}

const RouteLinkButton = (props: {
    isFocus: boolean,
    isFinish: boolean,
    styles?: ViewStyle,
    code: number,
    name: string,
    onPress: ()=> void,

}) => {
	const { isFocus, isFinish, code, name } = props;
    return (
	<TouchableOpacity onPress={props.onPress} style={[drawerStyles.routeLinkContainer, props.styles, isFocus && { backgroundColor: colors.blue }]}>
	    <View style={drawerStyles.routeLink}>
		<Text style={[drawerStyles.storeCode, isFocus && { color: "white" }]}>{ code.toString() }</Text>
		<Text style={drawerStyles.storeName}>{ name }</Text>
	    </View>
	    {
		isFinish && <Image 
			     source={require("../../../../assets/completedGreenColorIcon.svg")}
			     style={{ width: 20, height: 20 }}
			    />
	    }
	</TouchableOpacity>
    );
}
export default ControlRoomDrawer;

