import { Text, View } from "react-native";
import styles from "./styles";
import Button from "../MainButton/MainButton";
import { useEffect, useState } from "react";

/*
const props = {
    description: "Somethings to fill the text in which Im going to put other more important things hehe.",
    steps: [ 
	"Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
	"Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
	"Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
	"Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
    ],
    warnings: [
	{ keywords: "This is a keyword", description: "type something here to fill a little bit of the space needed to look good" }
    ]
}
*/
type InstructionProps = {
    visible: boolean,
    description: string,
    steps: Array<string>,
    warnings: Array<{ keywords: string, description: string }>
}

const InstructionBox = (props: InstructionProps ) => {
    const [ visible, setVisible ] = useState(true);

    useEffect(()=> {
	setVisible(props.visible)
    }, [props.visible])

    return (
	    <View style={[styles.blurBackground, { display: visible ? "none" : "flex" }]}>
		<View style={styles.instructionContainer}>
		    <Text style={[styles.header, { fontWeight: "bold" }]}>Protocolo</Text>
		    <Text style={styles.paragraph}>{ props.description }</Text>
		    <View>
			{ props.steps.map((step, index) => {
			    return (
				<View key={index}>
				    <Text style={styles.stepHeader}>{ "paso" + ( index + 1 ) }</Text>
				    <Text style={styles.paragraph}>{ step }</Text>
				</View>
			    );
			})}
			<View style={styles.warningBackground}>
			    <Text style={{ color: "white", fontWeight: "bold", fontSize: 18 }}>¡Precauciones!</Text>
			    { props.warnings.map((warning, index) => {
				return (
				    <View key={index}>
					<Text style={styles.warningKeyword}>{ warning.keywords }</Text>
					<Text style={styles.warningDescription}>{ warning.description }</Text>
				    </View>
				);
			    })}
			</View>
		    </View>
		    <Button  onButtonPressed={()=> setVisible(prev => !prev)} text="Confirmado" disable={false}/>
		</View>
	    </View>
    );
}

export default InstructionBox;
