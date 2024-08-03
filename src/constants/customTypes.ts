import { SetStateAction, Dispatch } from "react";

export type DetainedReportData = {
	time: string,
	reportType: string,
	storeCode: string,
	storeName: string,
	storeFormat: string,
	informantName: string,
	underage: boolean,
	quatity: string,
	policeCallTime: string,
	policeOperator: string,
	upscale: string | null,
	secondUpscale: string | null,
	thirdUpscale: string | null
};

export interface DetainedReportProp extends DetainedReportData {
	setReport: Function,
	navigation: any
};
export type AuthContextType = {
	report: DetainedReportData | null;
	setReport: Dispatch<SetStateAction<{ [key: string]: any} | null>>;
};

export type buttonProps = {
	text: string,
	onButtonPressed: Function,
	disable: boolean | undefined
};

export type CustomInput = {
	input: string,
	validationState: string[],
	setInput: Dispatch<SetStateAction<string | null>>,
	setValidationState: Dispatch<SetStateAction<string[]>>
	type: "time" | "name" | "annex" | "storeCode" | "number" | "upscale"
};
