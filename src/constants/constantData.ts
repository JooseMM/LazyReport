import {
AppReportState,
ControlRoomReport,
InputObject,
connectionStateOptions,
UpdaterProps,
GetInitialStateParams,
StaffGetDataParams,
} from "./customTypes";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { 
lettersOnlyFormat,
storeCodeFormat,
timeFormat24hrs,
numberOnlyFormat,
wordsOrNumberFormat,
lettersOrEmptyFormat 
} from "./regexPatterns";
import { Dispatch, SetStateAction } from "react";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";


export const FORMATS_DATA = [
	{ label: "Selecciona un formato", value: null },
	{ label: "Hiper Lider", value: "HL" },
	{ label: "Lider Express", value: "LE" },
	{ label: "Super Bodega Acuenta", value: "SBA" },
	{ label: "Central Mayorista", value: "CM" },
];

export const connectionHealthOptions: Array<connectionStateOptions> = [
    { label: "Selecciona una opcion", value: null },
    { label: "Enlaces Operativos", value:  "bothUp" },
    { label: "Enlaces caidos", value:  "bothDown" },
    { label: "Enlace CCTV caido", value:  "cctvDown" },
    { label: "Enlace de Alarmas caido", value:  "bisDown" },
];
const YES_NO = [
    {
	label: "¿El detenido es menor de edad?",
	value: null
    },
    {
	label: "No",
	value: false
    },
    {
	label: "Si",
	value: true
    }
]
export const DETAINED_INFO: Array<InputObject> = [
	{ 
		label: "Hora de Ingreso",
		placeholder: "Ejem: 03:08 (formato: HH:mm)",
		validationKeyword: "hora",
		regExpValidator: [timeFormat24hrs],
	},
	{
		label: "Menor de Edad",
		placeholder: "Ejem: No",
		validationKeyword: "una opcion valida",
		options: [...YES_NO]
	},
	{
		label: "Cantidad de Retenidos",
		placeholder: "Ejem: 1",
		validationKeyword: "cantidad",
		regExpValidator: [numberOnlyFormat],
	}, 
	{
		label: "Informante",
		placeholder: "Ejem: Cristian Sepulveda GGSS",
		validationKeyword: "nombre y cargo",
		regExpValidator: [lettersOnlyFormat],
	},
]
export const UPSCALE_INFO: Array<InputObject> = [
	{
		label: "Escalamiento Principal",
		placeholder: "Ejem: Juan Vega GTEO",
		validationKeyword: "nombre y cargo",
		regExpValidator: [lettersOrEmptyFormat],
	}, 
	{
		label: "Escalamiento Secundario",
		placeholder: "Ejem: Ingrid Arancibia Zonal AP",
		validationKeyword: "nombre y cargo",
		regExpValidator: [lettersOrEmptyFormat],
	},
	{
		label: "Escalamiento Terciario",
		placeholder: "Ejem: Ronald Gonzalez Jefe de Formato",
		validationKeyword: "nombre y cargo",
		regExpValidator: [lettersOrEmptyFormat]
	}

]
export const EMERGENCY_CALL_INFO: InputObject = {
		label: "Operador o Anexo",
		placeholder: "Ejem: 13653 o Carabinero Juan Alberto",
		validationKeyword: "nombre o anexo",
		regExpValidator: [timeFormat24hrs, wordsOrNumberFormat],
};

export const STORE_INFO : Array<InputObject> = [
 	
	{
		label: "Formato",
		placeholder: "Ejem: Express",
		validationKeyword: "un formato valido",
		options: [...FORMATS_DATA],
	},
	{
		label: "Nombre de Local",
		placeholder: "Ejem: Lyons",
		validationKeyword: "nombre de local",
		regExpValidator: [lettersOnlyFormat],
	},
	{
		label: "Numero de Local",
		placeholder: "Ejem: 04",
		validationKeyword: "numero de local",
		regExpValidator: [storeCodeFormat]
	},
];

export const colors = {
	blue: "#101224",
	paragraphText: "#70717C",
	statusContainerBackground: "#E8E8EA",
	red: "#C54545",
	softGray: "#CFD0D3"
};

export const localTimeOptions: any = { hour12: false, hour: "2-digit", minute: "2-digit" };

export const showTimePicker = (callTime: Date, setCallTime: Dispatch<SetStateAction<Date>>) => {
    DateTimePickerAndroid.open({
	value: callTime ? callTime : new Date(),
	mode: "time",
	is24Hour: true,
	onChange: (event, selected) => { 
	    setCallTime(event.type != "dismissed" ? selected : null);
	} 
    });
};

export const options: NativeStackNavigationOptions = {
    headerStyle: { 
	backgroundColor: colors.blue 
    },
    headerTitleAlign: "center",
    headerTitleStyle: {
	color: 'white',
	fontWeight: 'bold',
	fontSize: 20 },
	headerTintColor: '#fff' 
};

export const drawerOptions: DrawerNavigationOptions = {
	    headerTitleStyle: { color: "white" },
	    headerTintColor: "white",
	    drawerPosition: "right",
	    headerTitleAlign: "center",
}
/*
 * -- Control Room Utils --
*/
export const ControlRoomDrawerRoutes: Array<{ 
    code: number,
    name: string,
    type?: string,
}> = [
    { code: 90, name: "EDS", type: "Edif." },
    { code: 6020, name: "El Penon", type: "CD" },
];


const get = (props: StaffGetDataParams):string => {
    return props.state?.[props.staffGroup]?.[props.index]?.[props.key] ?? "";
}
export const STAFF_UPDATE: Array<InputObject> = [
    {
	label: "Nombre",
	placeholder: "Ingresa el nombre del colaborador",
	validationKeyword: "nombre valido",
	regExpValidator: [lettersOnlyFormat],
    },
    {
	label: "Cargo",
	placeholder: "Ingresa el cargo del colaborador",
	validationKeyword: "cargo valido",
	regExpValidator: [lettersOnlyFormat],
    }
]
