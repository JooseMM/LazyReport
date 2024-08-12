import { DetainedReportData } from "../../constants/customTypes";

export const detainedReport = (props: DetainedReportData): string  => {

	const manyDetained 	= 	"Se visualizan retenidos en SEPP por intento de hurto, individuos serian " +
					`${props.isUnderage ? "menores de edad" : "mayores de edad"}`;

	const singleDetained 	= 	"Se visualiza retenido en SEPP por intento de hurto, individuo seria " + 
					`${props.isUnderage ? "menor de edad" : "mayor de edad"}`;
	
	const underageUpscale 	=	" En conocimiento " + props.firstUpscale +
					`${props.secondUpscale != "" || props.secondUpscale !== undefined ? ", " + props.secondUpscale : "."}` +
					`${props.thirdUpscale != "" || props.thirdUpscale !== undefined ? " y " + props.thirdUpscale + "." : "."}`;
		
	const howMany 		=	props.quantity != "1" ? manyDetained : singleDetained;

	const wasUpscale	=	props.isUnderage ? underageUpscale : "";

	const title 		= 	"*" + props.storeNumber + " - " + props.storeFormat + " - " + props.storeName +
					" - " + props.reportType + " - " + props.time + "hrs*\n";

	const body 		=	howMany + ". Confirma " + props.informantName + 
					" por lo que se gestiona Carabineros siendo las " + props.emergencyCallTime +
					"hrs, bajo el operador o anexo " + props.emergencyOperator  + " y se mantiene en visual."
					+ wasUpscale;

	return title + body;
}

