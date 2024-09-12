import { useState } from "react";
import {
View,
Text,
StyleSheet,
ScrollView
} from "react-native";
import { storeTypeChecker } from "./helper";
import { storeBuildingStyles } from "./styles";

const StoreBuilding = ({ route }) => {
    const { storeCode, storeName } = route.params!;
    const [ storeType ] = useState(storeTypeChecker(storeCode));


    return (
	<ScrollView style={storeBuildingStyles.container}>
	    <View style={storeBuildingStyles.titleContainer}>
		<Text style={storeBuildingStyles.title}>{ "L" + storeCode + " " }</Text>
		<Text style={[storeBuildingStyles.title, storeBuildingStyles.titleName]}>{ storeType + " " }</Text>
		<Text style={[storeBuildingStyles.title, storeBuildingStyles.titleName]}>{ storeName }</Text>
	    </View>
	</ScrollView>
    );
};


export default StoreBuilding;
