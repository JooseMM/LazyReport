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

export type InputTypes = {
	type: "time" | "name" | "annex" | "storeCode" | "number" | "upscale"
};

export interface CustomInput extends InputTypes  {
	input: string,
	placeholder: string
	label: string,
	invalidState: string[],
	setInput: Dispatch<SetStateAction<string | null>>,
	setInvalidState: Dispatch<SetStateAction<string[]>>,
};
