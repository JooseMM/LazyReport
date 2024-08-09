import { InputTypes, DetainedReportData } from "./customTypes";
import { lettersOnlyFormat, numberOnlyFormat, timeFormat24hrs, storeCodeFormat, wordsOrNumberFormat, lettersOrEmptyFormat} from "./regexPatterns";

export const reportOptions = [
	{ name: "Detenido en SEPP", path: "IngresoSEPP"},
	{ name: "Status de Detenidos", path: "StatusSEPP"},
	{ name: "Perdida de Enlace", path: "/"},
	{ name: "Corte de Suministro", path: "/"},
];
export const INIT_REPORT_STATE: DetainedReportData = {
		time: "",
		reportType: "",
		storeNumber: "",
		storeName: "",
		storeFormat: "",
		informantName:"",
		isUnderage: false,
		quantity: "1",
		emergencyCallTime: "",
		emergencyOperator: "",
		firstUpscale: "",
		secondUpscale: "",
		thirdUpscale: "",
};

export const INPUT_BASE : Array<InputTypes> = [
 	
	{
		id: "storeFormat",
		label: "Formato",
		placeholder: "Ejem: Express",
		validationKeyword: " ",
		regExpValidator: null,
	},
	{
		id: "storeName",
		label: "Nombre de Local",
		placeholder: "Ejem: Lyons",
		validationKeyword: "nombre de local",
		regExpValidator: lettersOnlyFormat,
	},
	{
		id: "storeNumber",
		label: "Numero de Local",
		placeholder: "Ejem: 04",
		validationKeyword: "numero de local",
		regExpValidator: storeCodeFormat,
	},
];

export const DETAINED_INPUT: Array<InputTypes> = [
	{ 
		id: "time",
		label: "Hora de Ingreso",
		placeholder: "Ejem: 03:08 (formato: HH:mm)",
		validationKeyword: "hora",
		regExpValidator: timeFormat24hrs,
	},
	{
		id: "isUnderage",
		label: "Menor de Edad",
		placeholder: "Ejem: No",
		validationKeyword: "",
		regExpValidator: null,
	},
	{
		id: "quantity",
		label: "Cantidad de Retenidos",
		placeholder: "Ejem: 1",
		validationKeyword: "cantidad",
		regExpValidator: numberOnlyFormat,
	}, 
	{
		id: "informantName",
		label: "Informante",
		placeholder: "Ejem: Cristian Sepulveda GGSS",
		validationKeyword: "nombre y cargo",
		regExpValidator: lettersOnlyFormat,
	},
	{
		id: "emergencyCallTime",
		label: "Hora de Llamada a Carabineros",
		placeholder: "Ejem: 03:15 (formato: HH:mm)",
		validationKeyword: "hora",
		regExpValidator: timeFormat24hrs,
	},
	{
		id: "emergencyOperator",
		label: "Operador o Anexo",
		placeholder: "Ejem: 13653 o Carabinero Juan Alberto",
		validationKeyword: "nombre o anexo",
		regExpValidator: wordsOrNumberFormat,
	},
	{
		id: "firstUpscale",
		label: "Escalamiento Principal",
		placeholder: "Ejem: Juan Vega GTEO",
		validationKeyword: "nombre y cargo",
		regExpValidator: lettersOrEmptyFormat,
	}, 
	{
		id: "secondUpscale",
		label: "Escalamiento Secundario",
		placeholder: "Ejem: Ingrid Arancibia Zonal AP",
		validationKeyword: "nombre y cargo",
		regExpValidator: lettersOrEmptyFormat,
	},
	{
		id: "thirdUpscale",
		label: "Escalamiento Terciario",
		placeholder: "Ejem: Ronald Gonzalez Jefe de Formato",
		validationKeyword: "nombre y cargo",
		regExpValidator: lettersOrEmptyFormat,
	}
];

export const INPUT_ARRAY = [...INPUT_BASE, ...DETAINED_INPUT];

export const colors = {
	blue: "#101224"
};
export const selectFormats = [
	{ name: "Hiper Lider", short: "HL" },
	{ name: "Lider Express", short: "LE" },
	{ name: "Super Bodega Acuenta", short: "SBA" },
	{ name: "Central Mayorista", short: "CM" },
];
export const selectPlaceholder = {
	label: 'Selecciona un Formato...',
	value: '',
	color: 'black'
}
