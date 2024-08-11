import { SetStateAction, Dispatch } from "react";

export type DetainedReportData = {
	time: string,
	reportType: ReportType,
	storeNumber: string,
	storeName: string,
	storeFormat: string,
	informantName: string,
	isUnderage: boolean,
	quantity: string,
	emergencyCallTime: string,
	emergencyOperator: string,
	firstUpscale: string | null,
	secondUpscale: string | null,
	thirdUpscale: string | null,
};

//fill this later!!
export type ReportType = "Detenido en SEPP" | "Corte de Suministro";
export type InputID = 	 "time" | "storeNumber" | "storeFormat" | "storeName" | "informantName" | "isUnderage" | "emergencyCallTime" | "emergencyOperator" | "firstUpscale" | "secondUpscale" | "thirdUpscale" | "quantity";

export type InputObject = {
	id: InputID,
	label: string,
	placeholder: string,
	validationKeyword: string,
	regExpValidator: RegExp,
	options: Array<{ label: string, value: string | boolean }> | null;
}

export type AuthContextType = {
	report: DetainedReportData | null,
	setReport: Dispatch<SetStateAction<{ [key: string]: any} | null>>,
};

export type buttonProps = {
	text: string,
	onButtonPressed: Function,
	disable: boolean | undefined,
};


export interface ReportStateUpdaters {
	updateReportState: Dispatch<SetStateAction<DetainedReportData>>,
	updateInvalidInputState: Dispatch<SetStateAction<Array<InputID>>>,
	inputObject: InputObject,
};
