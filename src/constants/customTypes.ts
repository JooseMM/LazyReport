import { SetStateAction, Dispatch } from "react";
import { ViewStyle } from "react-native";

export type StateNews = Array<News>;
export type News = BaseNewsInfo

export type AppReportState = {
    basicFormatState: ReportState
    controlRoomState: ReportState
};
export type ReportState = {
    operatorNames: { mainOperator: string, backupOperator?: string }
    reportState: Array<ControlRoomReport | BaseNewsInfo & any>
};
export type ControlRoomReport = {
    storeName: string
    storeCode: number
    connectionHealth: ConnectionState,
    bossStaff: Array<{ name: string, position: string } | null>
    securityStaff: Array<{ name: string, position: string } | null>
    cctvStaff: Array<{ name: string, position: string } | null>
    completed: boolean,
    news: StateNews
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
export type BaseNewsInfo  = {
	reportIdentifier: string,
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
"quantity" ;
export interface InputObject {
	label: string
	placeholder?: string
	validationKeyword: string
	regExpValidator?: Array<RegExp>
	getInitialState: (params: GetInitialStateParams) => any
	updaterFunction: (params: UpdaterProps)=> void
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
	inputObject: InputObject
	styles?: ViewStyle
	updateState: (props: UpdaterProps)=> void
	updateParentValidation?: Dispatch<SetStateAction<Array<string>>>
	getInitialState?: (params: GetInitialStateParams) => any,
	index?: number,
	keyProperty?: string,
};
export type UpdaterProps = {
    storeCode: number,
    setReport: Dispatch<SetStateAction<AppReportState>> 
    index: number,
    keyProperty?: ControlRoomStaffGroup,
    newValue: string,
}
export type  GetInitialStateParams = {
    storeCode: number,
    report: AppReportState
    index: number,
    staffGroup: ControlRoomStaffGroup,
}
export type connectionStateOptions = {
    label: string,
    value: ConnectionState
}
export type ConnectionState = 	
"bothUp"	|
"bothDown"	|
"cctvDown" 	| 
"bisDown" 	;

export type StaffUpdatedPopupProps = {
    staffGroup: ControlRoomStaffGroup,
    index?: number,
    storeCode: number,
    toggleVisibility: Dispatch<SetStateAction<Array<ControlRoomStaffGroup>>>
};

export type StaffBoxProps = {
staffGroupName: ControlRoomStaffGroup,
storeCode: number,
completed: boolean,
update: Dispatch<SetStateAction<Array<ControlRoomStaffGroup | number | null>>>
styles: ViewStyle,
};
