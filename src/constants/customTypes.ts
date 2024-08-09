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
	type: "entryTime" | "localNumber" | "localFormat" | "localName" |
		"informantName" | "isUnderage" | "emergencyCallTime" | "callOperator" |
		"firstUpscale" | "secondUpscale" | "thirdUpscale" | "Quantity";
};

export interface CustomInput extends InputTypes  {
	placeholder: string,
	setReport: Dispatch<SetStateAction<DetainedReportData>>;
	setInvalidInputs: Dispatch<SetStateAction<Array<string>>>;

};
