import { SetStateAction, Dispatch } from "react";

export type DetainedReportData = {
	id: string 
	time: Date | null
	reportType: ReportType | null
	storeNumber: string
	storeName: string
	storeFormat: string
	informantName: string
	isUnderage: string
	quantity: string
	emergencyCall: Array<{ time: Date, annex: string }> | null
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
	options?: Array<{ label: string, value: string }>
}

export type AuthContextType = {
	report: Array<DetainedReportData> | null
	setReport: Dispatch<SetStateAction<Array<DetainedReportData>>>
};

export type buttonProps = {
	text: string
	onButtonPressed: Function
	disable?: boolean
};


export interface ReportStateUpdaters {
	reportID: string
	inputObject: InputObject
};
