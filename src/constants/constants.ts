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
	policeCallTime: string,
	upscale: string | null,
	secondUpscale: string | null,
	thirdUpscale: string | null
};
export const colors = {
	blue: "#101224"
};
export const selectItems = [
	{ label: "Hiper Lider", value: "HL" },
	{ label: "Lider Express", value: "LE" },
	{ label: "Super Bodega Acuenta", value: "SBA" },
	{ label: "Central Mayorista", value: "CM" },
];
export const selectPlaceholder = {
	label: 'Selecciona un Formato...',
	value: '',
	color: 'black'
}
export function generateReport(props: DetainedReportData): string {
	console.log("render");
	return `*${props.storeCode} - ${props.storeFormat} - ${props.storeName} - ${props.reportType} - ${props.time}* \nSe visualiza retenido en SEPP por intento de hurto, individuo de sexo femenino/masculino mayor de edad. Confirma ${props.informantName} quien solicita apoyo de Carabineros, se gestiona la llamada siendo las ${props.policeCallTime}hrs bajo el anexo 13565 y se mantiene en visual.
	`;
}
export const addReport = (setReport: Function, date: string, storeCode: string, storeName: string, storeFormat: string, informant: string, policeCallTime: string, upscale: string | null, secondUpscale: string | null, thirdUpscale: string | null, navigation: any) => {
	setReport({ 
		time: date,
		reportType: "Detenido en SEPP",
		storeCode: storeCode,
		storeName: storeName,
		storeFormat: storeFormat,
		informantName: informant,
		policeCallTime: policeCallTime,
		upscale: upscale,
		secondUpscale: secondUpscale,
		thirdUpscale: thirdUpscale,
	});
	navigation.navigate("FinishReport");
};
