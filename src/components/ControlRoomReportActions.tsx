import {
View,
StyleSheet,
Text,
TouchableOpacity
} from "react-native";
import { colors } from "../constants/constantData";
import { Image } from "expo-image";
import { useAuth } from "../ApplicationState";
import { ControlRoomReport } from "../constants/customTypes";

const ControlRoomReportActions = (props: { completed: boolean, storeCode: number })=> {
    return props.completed ? <FinishActions storeCode={props.storeCode}/>: <UnfinishActions storeCode={props.storeCode}/>;
};
const FinishActions = (props: { storeCode: number }) => {
    return (
	<View style={ownStyles.container}>
	    <RepeatAction storeCode={props.storeCode} />
	</View>
    )
};
const RepeatAction = (props: { storeCode: number }) => {
    const repeatIcon = require("../../assets/repeatIcon.svg");
    const { setReport } = useAuth();

    const resetValues = () => {
	setReport(prev => {
	    return ({
		...prev,
		controlRoomState: {
		    ...prev.controlRoomState,
		    reportState: prev.controlRoomState.reportState.map((store: ControlRoomReport) => {
			if(store.storeCode === props.storeCode) 
			    return ({
				...store,
				connectionHealth: undefined,
				completed: false,
				bossStaff: [],
				securityStaff: [],
				news: [],
				cctvStaff: []
			    });
			else 
			    return store;
		    })
		}
	    })
	})
    };
    return (
	    <TouchableOpacity 
	     style={[ownStyles.baseButton, { borderWidth: 2, marginLeft: 25 }]}
	     onPress={resetValues}
	    >
		<Image source={repeatIcon} style={[ownStyles.imageDimensions, { width: 45, height: 45 } ]}/>
	    </TouchableOpacity>
    );
}
const UnfinishActions = (props: { storeCode: number }) => {
    const finishIcon = require("../../assets/checkIcon.svg");
    const { setReport } = useAuth();

    const setFinish = () => {
	setReport(prev => {
	    return ({
		...prev,
		controlRoomState: {
		    ...prev.controlRoomState,
		    reportState: prev.controlRoomState.reportState.map((store: ControlRoomReport) => {
			if(store.storeCode === props.storeCode) 
			    return ({ ...store, completed: true });
			else 
			    return store;
		    })
		}
	    })
	})
    }
    return (
	    <View style={ownStyles.container}>
		<TouchableOpacity
		 style={[ownStyles.baseButton, { backgroundColor: colors.blue }]}
		 onPress={setFinish}
		>
		    <Image source={finishIcon} style={[ownStyles.imageDimensions, { marginTop: 5 } ]}/>
		</TouchableOpacity>
		<RepeatAction storeCode={props.storeCode}/>
	    </View>
    )
}

const ownStyles = StyleSheet.create({
    container: {
	flexDirection: "row",
	marginVertical: 30,
	alignItems: "center",
	marginHorizontal: "auto"
    },
    baseButton: {
	borderRadius: 1000,
	borderColor: colors.softGray,
	borderWidth: 1,
	width: 100,
	height: 100,
	justifyContent: "center",
	alignItems: "center",
	borderStyle: "solid",
    },
    imageDimensions: {
	width: 60,
	height: 60,
    }
})
export default ControlRoomReportActions;
