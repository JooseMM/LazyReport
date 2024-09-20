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
	inputObject: InputObject
	styles?: ViewStyle
	state: { current: ControlRoomReport | any, updater: Dispatch<SetStateAction<ControlRoomReport>> }
	updateParentValidation?: Dispatch<SetStateAction<Array<string>>>
	targetIndexElement?: number,
};
export type UpdaterProps = {
    identifier: number | string,
    updater: Dispatch<SetStateAction<any>> 
    index: number,
    keyProperty?: ControlRoomStaffGroup | string,
    newValue: string | boolean,
}
export type  GetInitialStateParams = {
    identifier?: number | string,
    state: ControlRoomReport 
    index?: number,
    targetKey: string | ControlRoomStaffGroup,
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

export type UtilMethods = {
    removeElement: (props: StaffUtilityMethods) => void,
    createEmptyElement: (props: StaffUtilityMethods) => void
}
export type StaffUpdatedPopupProps = {
    state: { current: any, updater: Dispatch<SetStateAction<ControlRoomReport>>, popupControl: Dispatch<SetStateAction<UpdateStaff>> }
    utils: { name: string, methods: UtilMethods } 
    index?: number,
};
export type StaffUtilityMethods = {
    state: { current: ControlRoomReport, updater: Dispatch<SetStateAction<ControlRoomReport>> }
    indexState: { current?: number, updater: Dispatch<SetStateAction<number>> }
    targetProperty: string
    newValue?: string
}
export type Utils = {
    name: string,
    methods: UtilMethods 
} 
export interface UpdateStaff {
    isOpen: boolean,
    utils: Utils
    index: number
}
export type StaffBoxProps = {
state: { state: any, popupControl: Dispatch<SetStateAction<UpdateStaff>>} 
utils: { name: string, methods: UtilMethods } 
completed: boolean,
styles: ViewStyle,
};

export type InitialStateConnectionHealthProps = {
    state: { current: ControlRoomReport }
    elementIndex?: number
}
export type UpdateStateConnectionHealthProps = {
    state: { current: ControlRoomReport, updater: Dispatch<SetStateAction<ControlRoomReport>> }
    elementIndex?: number
    newValue: string
}
