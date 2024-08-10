import { DetainedReportData, InputID, InputObject } from "../../constants/customTypes";
import { lettersOnlyFormat, numberOnlyFormat, timeFormat24hrs, wordsOrNumberFormat, lettersOrEmptyFormat} from "../../constants/regexPatterns";
import { INPUT_BASE } from "../../constants/constantData";

export const DETAINED_INPUT: Array<InputObject> = [
	...INPUT_BASE,
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

export const INITIAL_INVALID_LIST_STATE : Array<InputID> = [
	"time",
	"storeNumber",
	"storeName",
	"informantName",
	"emergencyCallTime",
	"emergencyOperator",
]
export const INITIAL_REPORT_STATE: DetainedReportData = {
	time: "",
	reportType: "",
	storeNumber: "",
	storeName: "",
	storeFormat: "HL",
	informantName:"",
	isUnderage: false,
	quantity: "1",
	emergencyCallTime: "",
	emergencyOperator: "",
	firstUpscale: "",
	secondUpscale: "",
	thirdUpscale: "",
};
