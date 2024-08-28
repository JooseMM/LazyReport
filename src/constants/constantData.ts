import { InputObject } from "./customTypes";
import { 
lettersOnlyFormat,
storeCodeFormat,
timeFormat24hrs,
numberOnlyFormat,
wordsOrNumberFormat,
lettersOrEmptyFormat 
} from "./regexPatterns";


export const FORMATS_DATA = [
	{ label: "Hiper Lider", value: "HL" },
	{ label: "Lider Express", value: "LE" },
	{ label: "Super Bodega Acuenta", value: "SBA" },
	{ label: "Central Mayorista", value: "CM" },
];

export const DETAINED_INFO: Array<InputObject> = [
	{ 
		id: "time",
		label: "Hora de Ingreso",
		placeholder: "Ejem: 03:08 (formato: HH:mm)",
		validationKeyword: "hora",
		regExpValidator: [timeFormat24hrs],
	},
	{
		id: "isUnderage",
		label: "Menor de Edad",
		placeholder: "Ejem: No",
		validationKeyword: "",
		options: [ { label: "No", value: false }, { label: "Si", value: true } ]
	},
	{
		id: "quantity",
		label: "Cantidad de Retenidos",
		placeholder: "Ejem: 1",
		validationKeyword: "cantidad",
		regExpValidator: [numberOnlyFormat],
	}, 
	{
		id: "informantName",
		label: "Informante",
		placeholder: "Ejem: Cristian Sepulveda GGSS",
		validationKeyword: "nombre y cargo",
		regExpValidator: [lettersOnlyFormat],
	},
]
export const UPSCALE_INFO: Array<InputObject> = [
	{
		id: "firstUpscale",
		label: "Escalamiento Principal",
		placeholder: "Ejem: Juan Vega GTEO",
		validationKeyword: "nombre y cargo",
		regExpValidator: [lettersOrEmptyFormat],
	}, 
	{
		id: "secondUpscale",
		label: "Escalamiento Secundario",
		placeholder: "Ejem: Ingrid Arancibia Zonal AP",
		validationKeyword: "nombre y cargo",
		regExpValidator: [lettersOrEmptyFormat],
	},
	{
		id: "thirdUpscale",
		label: "Escalamiento Terciario",
		placeholder: "Ejem: Ronald Gonzalez Jefe de Formato",
		validationKeyword: "nombre y cargo",
		regExpValidator: [lettersOrEmptyFormat]
	}

]
export const EMERGENCY_CALL_INFO: InputObject = {
		id: "emergencyCall",
		label: "Operador o Anexo",
		placeholder: "Ejem: 13653 o Carabinero Juan Alberto",
		validationKeyword: "nombre o anexo",
		regExpValidator: [timeFormat24hrs, wordsOrNumberFormat],
};

export const STORE_INFO : Array<InputObject> = [
 	
	{
		id: "storeFormat",
		label: "Formato",
		placeholder: "Ejem: Express",
		validationKeyword: " ",
		options: FORMATS_DATA,
	},
	{
		id: "storeName",
		label: "Nombre de Local",
		placeholder: "Ejem: Lyons",
		validationKeyword: "nombre de local",
		regExpValidator: [lettersOnlyFormat],
	},
	{
		id: "storeNumber",
		label: "Numero de Local",
		placeholder: "Ejem: 04",
		validationKeyword: "numero de local",
		regExpValidator: [storeCodeFormat]
	},
];

export const colors = {
	blue: "#101224",
	//paragraphText: "#585966",
	paragraphText: "#3f4049",
	statusContainerBackground: "#E8E8EA",
	red: "#C54545"
};

export const localTimeOptions: any = { hour12: false, hour: "2-digit", minute: "2-digit" };
