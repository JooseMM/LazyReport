import { InputObject } from "./customTypes";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { 
lettersOnlyFormat,
storeCodeFormat,
timeFormat24hrs,
numberOnlyFormat,
wordsOrNumberFormat,
lettersOrEmptyFormat 
} from "./regexPatterns";
import { Dispatch, ReactElement, ReactNode, SetStateAction } from "react";
import { DrawerNavigationOptions } from "@react-navigation/drawer";
import { NativeStackNavigationOptions } from "@react-navigation/native-stack";
import {
ScrollView
} from "react-native";
import ReportL90 from "../screens/ControlRoom/L90/ReportL90";
import ReportL6020 from "../screens/ControlRoom/L6020/L6020";


export const FORMATS_DATA = [
	{ label: "Selecciona un formato", value: null },
	{ label: "Hiper Lider", value: "HL" },
	{ label: "Lider Express", value: "LE" },
	{ label: "Super Bodega Acuenta", value: "SBA" },
	{ label: "Central Mayorista", value: "CM" },
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
		validationKeyword: "una opcion valida",
		options: [...YES_NO]
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
		validationKeyword: "un formato valido",
		options: [...FORMATS_DATA],
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

export const ControlRoomDrawerRoutes: Array<{ 
    code: number,
    name: string,
}> = [
    { code: 90, name: "EDS" },
    { code: 6020, name: "El Penon" },
]
