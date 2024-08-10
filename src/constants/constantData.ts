import { InputTypes, DetainedReportData } from "./customTypes";
import { lettersOnlyFormat, numberOnlyFormat, timeFormat24hrs, storeCodeFormat, wordsOrNumberFormat, lettersOrEmptyFormat} from "./regexPatterns";

export const reportOptions = [
	{ name: "Detenido en SEPP", path: "IngresoSEPP"},
	{ name: "Status de Detenidos", path: "StatusSEPP"},
	{ name: "Perdida de Enlace", path: "/"},
	{ name: "Corte de Suministro", path: "/"},
];

export const FORMATS_ARRAY = [
	{ label: "Hiper Lider", value: "HL" },
	{ label: "Lider Express", value: "LE" },
	{ label: "Super Bodega Acuenta", value: "SBA" },
	{ label: "Central Mayorista", value: "CM" },
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
		options: FORMATS_ARRAY,
	},
	{
		id: "storeName",
		label: "Nombre de Local",
		placeholder: "Ejem: Lyons",
		validationKeyword: "nombre de local",
		regExpValidator: lettersOnlyFormat,
		options: null
	},
	{
		id: "storeNumber",
		label: "Numero de Local",
		placeholder: "Ejem: 04",
		validationKeyword: "numero de local",
		regExpValidator: storeCodeFormat,
		options: null,
	},
];

export const DETAINED_INPUT: Array<InputTypes> = [
	{ 
		id: "time",
		label: "Hora de Ingreso",
		placeholder: "Ejem: 03:08 (formato: HH:mm)",
		validationKeyword: "hora",
		regExpValidator: timeFormat24hrs,
		options: null,
	},
	{
		id: "isUnderage",
		label: "Menor de Edad",
		placeholder: "Ejem: No",
		validationKeyword: "",
		regExpValidator: null,
		options: [ { label: "No", value: false }, { label: "Si", value: true } ]
	},
	{
		id: "quantity",
		label: "Cantidad de Retenidos",
		placeholder: "Ejem: 1",
		validationKeyword: "cantidad",
		regExpValidator: numberOnlyFormat,
		options: null,
	}, 
	{
		id: "informantName",
		label: "Informante",
		placeholder: "Ejem: Cristian Sepulveda GGSS",
		validationKeyword: "nombre y cargo",
		regExpValidator: lettersOnlyFormat,
		options: null,
	},
	{
		id: "emergencyCallTime",
		label: "Hora de Llamada a Carabineros",
		placeholder: "Ejem: 03:15 (formato: HH:mm)",
		validationKeyword: "hora",
		regExpValidator: timeFormat24hrs,
		options: null,
	},
	{
		id: "emergencyOperator",
		label: "Operador o Anexo",
		placeholder: "Ejem: 13653 o Carabinero Juan Alberto",
		validationKeyword: "nombre o anexo",
		regExpValidator: wordsOrNumberFormat,
		options: null,
	},
	{
		id: "firstUpscale",
		label: "Escalamiento Principal",
		placeholder: "Ejem: Juan Vega GTEO",
		validationKeyword: "nombre y cargo",
		regExpValidator: lettersOrEmptyFormat,
		options: null,
	}, 
	{
		id: "secondUpscale",
		label: "Escalamiento Secundario",
		placeholder: "Ejem: Ingrid Arancibia Zonal AP",
		validationKeyword: "nombre y cargo",
		regExpValidator: lettersOrEmptyFormat,
		options: null,
	},
	{
		id: "thirdUpscale",
		label: "Escalamiento Terciario",
		placeholder: "Ejem: Ronald Gonzalez Jefe de Formato",
		validationKeyword: "nombre y cargo",
		regExpValidator: lettersOrEmptyFormat,
		options: null,
	}
];

export const INPUT_ARRAY = [...INPUT_BASE, ...DETAINED_INPUT];

export const colors = {
	blue: "#101224"
};
