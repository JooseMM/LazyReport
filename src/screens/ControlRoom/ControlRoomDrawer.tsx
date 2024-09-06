import {
DrawerContentScrollView,
DrawerItemList,
DrawerItem,
DrawerContentComponentProps
} from "@react-navigation/drawer";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../../constants/constantData";
import Button from "../../components/Buttons/MainButton/MainButton";

const ControlRoomDrawer = (props: DrawerContentComponentProps) => {
    const currentOperator = "Jose Moreno";
    const backupOperator = "Juan Moreno";
    const nextReport = "30m";
    return (
	<DrawerContentScrollView>
	    <View style={styles.header}>
		<Text style={styles.operatorName}>{ currentOperator }</Text>
		<Text style={styles.backupName}>{ "Apoyo " + backupOperator }</Text>
	    </View>
	    <View style={{ flexDirection: "column", justifyContent: "space-between", flexGrow: 1 }}>
		<DrawerItemList {...props}/>
		<DrawerItem label={({focused, color})=> <Text style={{ color: color }}>{ focused ? "focus": "its not"}</Text>} onPress={()=> console.log("works!")}/>
		<View style={styles.buttonContainer}>
		    <Button text="Generar Reporte" onButtonPressed={()=> console.log("You want to continue")}/>
		</View>
	    </View>
	</DrawerContentScrollView>
    );
}

const styles = StyleSheet.create({
    header: {
	paddingTop: "5%",
	paddingBottom: 5,
	marginBottom: 8,
	borderBottomWidth: 0.5,
	paddingHorizontal: 20,
	borderBottomColor: colors.paragraphText 
    },
    buttonContainer: {
	flexDirection: "column",
	alignSelf: "flex-end",
	paddingHorizontal: 20,
    },
    operatorName: { 
	color: colors.blue,
	fontSize: 22,
	fontWeight: "bold",
    },
    backupName: { 
	position: "relative",
	bottom: 6,
	color: colors.paragraphText,
	fontSize: 14,
	fontWeight: "regular"
    }
})
export default ControlRoomDrawer;

