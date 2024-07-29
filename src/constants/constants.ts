export const reportOptions = [
	{ name: "Detenido en SEPP", path: "IngresoSEPP"},
	{ name: "Status de Detenidos", path: "StatusSEPP"},
	{ name: "Perdida de Enlace", path: "/"},
	{ name: "Corte de Suministro", path: "/"},
];
export type DetainedReportData = {
	time: string,
	reportType: string,
	storeCode: string,
	storeName: string,
	storeFormat: string,
	informantName: string,
	underage: boolean,
	quatity: string,
	policeCallTime: string,
	policeOperator: string,
	upscale: string | null,
	secondUpscale: string | null,
	thirdUpscale: string | null
};
export const colors = {
	blue: "#101224"
};
export const selectItems = [
	{ label: "Hiper Lider", value: "Hiper Lider" },
	{ label: "Lider Express", value: "Lider Express" },
	{ label: "Super Bodega Acuenta", value: "Super Bodega Acuenta" },
	{ label: "Central Mayorista", value: "Central Mayorista" },
];
export const selectPlaceholder = {
	label: 'Selecciona un Formato...',
	value: '',
	color: 'black'
}
export function generateReport(props: DetainedReportData): string {
	const manyDetained = `Se visualizan retenidos en SEPP por intento de hurto, individuos serian ${props.underage ? "menores de edad" : "mayores de edad"}`;
	const singleDetained = `Se visualiza retenido en SEPP por intento de hurto, individuo seria ${props.underage ? "menor de edad" : "mayor de edad"}`;
	const underageUpscale = ` En conocimiento ${props.upscale}${props.secondUpscale != "" || props.secondUpscale !== undefined ? ", " + props.secondUpscale : "." }${props.thirdUpscale != "" || props.thirdUpscale !== undefined ? " y " + props.thirdUpscale + "." : "." }`;
	return `*${props.storeCode} - ${props.storeFormat} - ${props.storeName} - ${props.reportType} - ${props.time}hrs* \n${props.quatity != "1" ? manyDetained : singleDetained}. Confirma ${props.informantName} quien solicita apoyo de Carabineros, cuya llamada se realiza siendo las ${props.policeCallTime}hrs, bajo operador o anexo ${props.policeOperator} y se mantiene en visual.${props.underage ? underageUpscale : ""}`;
}
export const addReport = (setReport: Function, time: string, storeCode: string, storeName: string, storeFormat: string, informant: string, underage: boolean, quatity: string, policeCallTime: string, policeOperator: string,  upscale: string | null, secondUpscale: string | null, thirdUpscale: string | null, navigation: any) => {
	setReport({ 
		time: time,
		reportType: "Detenido en SEPP",
		storeCode: storeCode,
		storeName: storeName,
		storeFormat: storeFormat,
		informantName: informant,
		underage: underage,
		quatity: quatity,
		policeCallTime: policeCallTime,
		policeOperator: policeOperator,
		upscale: upscale,
		secondUpscale: secondUpscale,
		thirdUpscale: thirdUpscale,
	});
	navigation.navigate("FinishReport");
};
export const timeFormat24hrs = new RegExp('^([01]\\d|2[0-3]):[0-5]\\d$');
export const storeCodeFormat = new RegExp('^(?:[0-6]?\\d{1,3}|7000)$');
export const lettersOnlyFormat = new RegExp('^[a-zA-Z_ ]+( [a-zA-Z_ ]+)*$');
export const lettersOrEmptyFormat = new RegExp('^[a-zA-Z0-9_ ]*$');
export const numberOnlyFormat = new RegExp('\\b[1-9]\\b');
export const wordsOrNumberFormat = new RegExp('^[\\w\\s]+$');
