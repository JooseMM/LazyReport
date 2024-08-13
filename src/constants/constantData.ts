import { InputObject } from "./customTypes";
import { lettersOnlyFormat, storeCodeFormat } from "./regexPatterns";

export const REPORT_OPTIONS = [
	{ name: "Detenido en SEPP", path: "IngresoSEPP"},
	{ name: "Status de Detenidos", path: "StatusSEPP"},
	{ name: "Perdida de Enlace", path: "/"},
	{ name: "Corte de Suministro", path: "/"},
];

export const FORMATS_DATA = [
	{ label: "Hiper Lider", value: "HL" },
	{ label: "Lider Express", value: "LE" },
	{ label: "Super Bodega Acuenta", value: "SBA" },
	{ label: "Central Mayorista", value: "CM" },
];

export const INPUT_BASE : Array<InputObject> = [
 	
	{
		id: "storeFormat",
		label: "Formato",
		placeholder: "Ejem: Express",
		validationKeyword: " ",
		regExpValidator: null,
		options: FORMATS_DATA,
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

export const colors = {
	blue: "#101224",
	//paragraphText: "#585966",
	paragraphText: "#3f4049",
	statusContainerBackground: "#E8E8EA"
};
