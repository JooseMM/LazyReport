import { SetStateAction, Dispatch } from "react";

type News = Array<StoreInfo | DetainedInfo | UpscaleInfo>;

export type AppReportState = {
    basicFormatNews: News
    controlRoomState: ControlRoomState
};
export type ControlRoomState = {
    operatorNames: { mainOperator: string, backupOperator: string }
    reportState: Array<ControlRoomReport>
};
export type ControlRoomReport = {
    storeName: string,
    storeCode: number,
    bossStaff: Array<{ name: string, position: string }>
    securityStaff: Array<{ name: string, position: string }>
    cctvStaff: Array<{ name: string, position: string }>
    news: News
};
export type DetainedInfo  = {
	isUnderage: boolean
	quantity: string
	emergencyCall: Array<{ time: Date, annex: string }> | null
};
export type UpscaleInfo  = {
	informantName: string
	firstUpscale: string | null
	secondUpscale: string | null
	thirdUpscale: string | null
};
export type StoreInfo  = {
	time: Date | null
	reportType: ReportType | null
	storeNumber: string
	storeName: string
	storeFormat: string
};
export type ReportType = 
"Detenido en SEPP" |
"Corte de Suministro";
export type InputID = 
"time" |
"storeNumber" |
"storeFormat" |
"storeName" |
"informantName" |
"isUnderage" |
"emergencyCall" |
"firstUpscale" |
"secondUpscale" |
"thirdUpscale" |
"quantity";
export interface InputObject {
	id: InputID
	label: string
	placeholder?: string
	validationKeyword: string
	regExpValidator?: Array<RegExp>
	options?: Array<{ label: string, value: string | boolean }>
}
export type AuthContextType = {
	report: AppReportState | null
	setReport: Dispatch<SetStateAction<AppReportState>>
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
