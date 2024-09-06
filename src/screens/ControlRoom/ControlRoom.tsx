import {  createDrawerNavigator } from "@react-navigation/drawer";
import { colors, drawerOptions } from "../../constants/constantData";
import { ScrollView } from "react-native-gesture-handler";
import ControlRoomHome from "./Home/ControlRoomHome";
import ReportL6020 from "./L6020/L6020";
import ButtonWithIcon from "../../components/Buttons/ButtonWithIcon";
import { DrawerActions } from "@react-navigation/native";
import ReportL90 from "./L90/ReportL90";
import ControlRoomDrawer from "./ControlRoomDrawer";

const ControlRoom = ({navigation}) => {
    const Drawer = createDrawerNavigator();
    return (
	<Drawer.Navigator 
	 drawerContent={ControlRoomDrawer}
	 screenOptions={{
	    ...drawerOptions,
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
	    <Drawer.Screen 
	     name="ControlRoomHome"
	     component={ReportL90}
	     options={{ title: "L90", headerTitle: "EDS" }}
	     />
	    <Drawer.Screen
	     name="L6020"
	     component={ReportL6020}
	     options={{ headerTitle: "CD El Penon" }}
	    />
	</Drawer.Navigator>
    );
}

export default ControlRoom;
