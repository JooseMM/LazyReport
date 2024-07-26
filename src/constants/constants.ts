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
	{ label: "Hiper Lider", value: "hl" },
	{ label: "Lider Express", value: "le" },
	{ label: "Super Bodega Acuenta", value: "sba" },
	{ label: "Central Mayorista", value: "cm" },
];
export const selectPlaceholder = {
	label: 'Selecciona un Formato...',
	value: '',
	color: 'black'
}
export function generateReport(props: DetainedReportData): string {
	console.log("render");
	return `*${props.storeCode} - ${props.storeFormat.toUpperCase()} - ${props.storeName} - ${props.reportType} - ${props.time}* \nSe visualiza retenido en SEPP por intento de hurto, individuo de sexo femenino/masculino mayor de edad. Confirma ${props.informantName} quien solicita apoyo de Carabineros, se gestiona la llamada siendo las ${props.policeCallTime}hrs bajo el anexo 13565 y se mantiene en visual.
	`;
}

