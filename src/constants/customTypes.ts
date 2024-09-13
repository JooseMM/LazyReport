import { SetStateAction, Dispatch } from "react";

type News = Array<StoreInfo | DetainedInfo | UpscaleInfo>;

export type AppReportState = {
    basicFormatState: ReportState
    controlRoomState: ReportState
};
export type ReportState = {
    operatorNames: { mainOperator: string, backupOperator?: string }
    reportState: Array<ControlRoomReport | StoreInfo & any>
};
export type ControlRoomReport = {
    storeName: string
    storeCode: number
    connectionHealth: ConnectionState,
    bossStaff: Array<{ name: string, position: string } | null>
    securityStaff: Array<{ name: string, position: string } | null>
    cctvStaff: Array<{ name: string, position: string } | null>
    completed: boolean,
    news: News
};
export type ControlRoomStaffGroup = 
"bossStaff" 	|
"securityStaff" |
"cctvStaff" 	;

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
"Corte de Suministro" |
"Estado de Enlaces"
export type InputID = 
/*	Detained:	*/
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
"quantity" |
/*	Others:		*/
"connectionHealth"
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
	storeCode?: number
	targetFormat: keyof AppReportState
	reportIdentifier?: string
	inputObject: InputObject
};
export type connectionStateOptions = {
    label: string,
    value: ConnectionState
}
export type ConnectionState = 	
"bothUp"	|
"bothDown"	|
"cctvDown" 	| 
"bisDown" 	;
