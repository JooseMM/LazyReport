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
    content: {
	description: string,
	steps: Array<string>,
	warnings: Array<{ keywords: string, description: string }>
    }
}

const InstructionBox = (props: InstructionProps ) => {
    const [ visible, setVisible ] = useState(true);

    useEffect(()=> {
	setVisible(props.visible)
    }, [props.visible])

    const { description, steps, warnings } = props.content;
    return (
	    <View style={[styles.blurBackground, { display: visible ? "none" : "flex" }]}>
		<View style={styles.instructionContainer}>
		    <View style={{ marginBottom: 12, marginTop: 5 }}>
			<Text style={[styles.header, { fontWeight: "bold" }]}>Protocolo</Text>
			<Text style={styles.paragraph}>{ description }</Text>
		    </View>
		    <View>
			{ steps.map((step, index) => {
			    return (
				<View key={index} style={styles.stepContainer}>
				    <Text style={styles.stepHeader}>{ "Paso " + ( index + 1 ) + ":" }</Text>
				    <Text style={styles.paragraph}>{ step }</Text>
				</View>
			    );
			})}
			<View style={styles.warningContainer}>
			    <Text style={styles.warningTitle}>¡Precauciones!</Text>
			    { warnings.map((warning, index) => {
				return (
					<Text key={index} style={styles.warningDescription}>
					    <Text style={styles.warningKeyword}>
						{ warning.keywords + " " }
					    </Text>
					    { warning.description }
					</Text>
				);
			    })}
			</View>
		    </View>
		    <Button  onButtonPressed={()=> setVisible(prev => !prev)} text="Entendido" disable={false}/>
		</View>
	    </View>
    );
}

export default InstructionBox;
