import { SetStateAction, Dispatch } from "react";

export type DetainedReportData = {
	time: string,
	reportType: string,
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

export type InputID = 	 "time" | "storeNumber" | "storeFormat" | "storeName" | "informantName" | "isUnderage" | "emergencyCallTime" | "emergencyOperator" | "firstUpscale" | "secondUpscale" | "thirdUpscale" | "quantity";

export type InputTypes = {
	id: InputID,
	label: string,
	placeholder: string,
	validationKeyword: string,
	regExpValidator: RegExp,
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
	arrayIndex: number,
};
