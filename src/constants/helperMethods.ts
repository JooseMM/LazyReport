import { DetainedReportData, DetainedReportProp } from "./customTypes";

export function generateReport(props: DetainedReportData): string {
	const manyDetained = `Se visualizan retenidos en SEPP por intento de hurto, individuos serian ${props.underage ? "menores de edad" : "mayores de edad"}`;
	const singleDetained = `Se visualiza retenido en SEPP por intento de hurto, individuo seria ${props.underage ? "menor de edad" : "mayor de edad"}`;
	const underageUpscale = ` En conocimiento ${props.upscale}${props.secondUpscale != "" || props.secondUpscale !== undefined ? ", " + props.secondUpscale : "." }${props.thirdUpscale != "" || props.thirdUpscale !== undefined ? " y " + props.thirdUpscale + "." : "." }`;
	return `*${props.storeCode} - ${props.storeFormat} - ${props.storeName} - ${props.reportType} - ${props.time}hrs* \n${props.quatity != "1" ? manyDetained : singleDetained}. Confirma ${props.informantName} por lo que se gestiona Carabineros siendo las ${props.policeCallTime}hrs, bajo operador o anexo ${props.policeOperator} y se mantiene en visual.${props.underage ? underageUpscale : ""}`;
}

export const addReport = (reportData: DetainedReportProp) => {
	const { setReport, navigation} = reportData;

	setReport({ 
		time: reportData.time,
		reportType: "Detenido en SEPP",
		storeCode: reportData.storeCode,
		storeName: reportData.storeName,
		storeFormat: reportData.storeFormat,
		informantName: reportData.informantName,
		underage: reportData.underage,
		quatity: reportData.quatity,
		policeCallTime: reportData.policeCallTime,
		policeOperator: reportData.policeOperator,
		upscale: reportData.upscale,
		secondUpscale: reportData.secondUpscale,
		thirdUpscale: reportData.thirdUpscale,
	});
	navigation.navigate("FinishReport");
};
