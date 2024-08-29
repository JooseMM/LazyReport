import {
View,
Text,
Pressable,
TextInput
} from "react-native";
import { useEffect, useState } from "react";
import { Image } from "expo-image";
import { stepCounterStyles } from "./styles";
import { minusIcon, plusIcon } from "./stepCounterHelper";
import { useAuth } from "../../ApplicationState";
import { ReportStateUpdaters, DetainedReportData } from "../../constants/customTypes";
import { colors } from "../../constants/constantData";

const CounterBaseInput = (props: ReportStateUpdaters) => {
    const [ counter, setCounter ] = useState<number>(1);
    const { setReport } = useAuth();
    const { label, id } = props.inputObject;
    const increment = () => setCounter(prev => prev < 10 ? ++prev : prev);
    const decrement = () => setCounter(prev => prev > 1 ? --prev : prev );

    useEffect(()=>{
	setReport((prev: DetainedReportData[])=> {
	    return prev.map((obj: DetainedReportData) => {
		if(obj.id == props.reportID) {
		    return ({...obj, [id]: counter});
		}
		return obj;
	    })
	})
    }, [counter]);

    return (
	<View style={{ marginTop: 15 }}>
	    <Text style={stepCounterStyles.label}>{ label }</Text>
	    <View style={stepCounterStyles.rowContainer}>
		<TextInput 
		 value={counter.toString()}
		 editable={false}
		 style={stepCounterStyles.inputContainer}
		 />
		<View style={stepCounterStyles.actionContainer}>
		    <Pressable 
		     style={stepCounterStyles.incrementButton}
		     onPress={increment}
		     >
			<Image 
			 style={stepCounterStyles.buttonImage}
			 source={plusIcon}
			 />
		    </Pressable>
		    <Pressable 
		     style={stepCounterStyles.decrementButton} 
		     onPress={decrement}
		     >
			<Image 
			 style={stepCounterStyles.buttonImage}
			 source={minusIcon}
			 />
		    </Pressable>
		</View>
	    </View>
	</View>
    );
};

export default CounterBaseInput;
