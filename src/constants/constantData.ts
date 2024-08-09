import { Key } from "react";
import { InputTypes } from "./customTypes";

export const reportOptions = [
	{ name: "Detenido en SEPP", path: "IngresoSEPP"},
	{ name: "Status de Detenidos", path: "StatusSEPP"},
	{ name: "Perdida de Enlace", path: "/"},
	{ name: "Corte de Suministro", path: "/"},
];
export const inputID = {
	time: "EntryTime",
	format: "localFormat",
	storeCode: "localNumber",
	storeName: "storeName",
	informant: "informantName",
	underage: "isUnderage",
	quatity: "quantity",
	policeCall: "",
	annex: "Operador o Anexo",
	upscale: "Escalamiento Principal",
	upscale2: "Escalamiento Secundario",
	upscale3: "Escalamiento Terciario"
}
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
