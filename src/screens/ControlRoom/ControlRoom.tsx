import {  createDrawerNavigator } from "@react-navigation/drawer";
import { ControlRoomDrawerRoutes, colors, drawerOptions } from "../../constants/constantData";
import { ScrollView } from "react-native-gesture-handler";
import ControlRoomHome from "./Home/ControlRoomHome";
import ReportL6020 from "./L6020/L6020";
import ButtonWithIcon from "../../components/Buttons/ButtonWithIcon";
import { DrawerActions } from "@react-navigation/native";
import ReportL90 from "./L90/ReportL90";
import ControlRoomDrawer from "./Drawer/ControlRoomDrawer";

const ControlRoom = ({navigation}) => {
    const Drawer = createDrawerNavigator();
    return (
	<Drawer.Navigator 
	 drawerContent={ControlRoomDrawer}
	 screenOptions={{
	    ...drawerOptions,
	    drawerContentContainerStyle: {
		justifyContent: "space-between",
	    },
	    drawerStyle: { width: "75%" },
	    headerTitleStyle: { fontSize: 18 },
	    headerBackground: ()=> <ScrollView style={{ backgroundColor: colors.blue }}/>,
	    headerLeft: ()=> (
		<ButtonWithIcon
		 imageSize={25}
		 onPress={()=> navigation.goBack()}
		 imageSource={require("../../../assets/backButton.svg")}
		 />
	    ),
	    headerRight: ()=> (
		<ButtonWithIcon
		 imageSize={30}
		 onPress={()=> navigation.dispatch(DrawerActions.toggleDrawer())}
		 imageSource={require("../../../assets/hamburguer-menu-light.svg")}
		 />
	    )
	}}>
	{ ControlRoomDrawerRoutes.map((val, index)=> {
	    return <Drawer.Screen
		     key={index}
		     name={val.name}
		     component={val.component}
		    />
	})}
	</Drawer.Navigator>
    );
}

export default ControlRoom;
