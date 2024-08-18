import { SetStateAction, Dispatch } from "react";

export type DetainedReportData = {
	time: string
	reportType: ReportType
	storeNumber: string
	storeName: string
	storeFormat: string
	informantName: string
	isUnderage: boolean
	quantity: string
	emergencyCall: Array<{ time: string, annex: string }> | null
	firstUpscale: string | null
	secondUpscale: string | null
	thirdUpscale: string | null
};

//fill this later!!
export type ReportType = "Detenido en SEPP" | "Corte de Suministro";
export type InputID = 	 "time" | "storeNumber" | "storeFormat" | "storeName" | "informantName" | "isUnderage" | "emergencyCall" |  "firstUpscale" | "secondUpscale" | "thirdUpscale" | "quantity";

export interface InputObject {
	id: InputID
	label: string
	placeholder?: string
	validationKeyword: string
	regExpValidator?: Array<RegExp>
	options?: Array<{ label: string, value: string | boolean }>
}

export type AuthContextType = {
	report: DetainedReportData | null
	setReport: Dispatch<SetStateAction<{ [key: string]: any} | null>>
};

export type buttonProps = {
	text: string
	onButtonPressed: Function
	disable: boolean | undefined
};


export interface ReportStateUpdaters {
	inputObject: InputObject
};
