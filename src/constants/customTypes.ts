import { SetStateAction, Dispatch } from "react";

export type AppReportState = {
    ReportState: Array<DetainedReportData | null>
    ControlRoomState: ControlRoomState
};

export type ControlRoomState = {
    operatorNames: { mainOperator: string, backupOperator: string }
    reportState: Array<ControlRoomReportState>
};

export type ControlRoomReportState = {
    L90: null,
    L6020: null,
    L515: null,
}
export type ControlRoomReport = {
    storeName: string,
    storeCode: number,
    bossStaff: Array<{ name: string, position: string }>
    securityStaff: Array<{ name: string, position: string }>
    cctvStaff: Array<{ name: string, position: string }>
    news: ControlRoomNews
};

export type ControlRoomNews = {


	time: Date | null
	reportType: ReportType | null
	storeNumber: string
	storeName: string
	storeFormat: string
	informantName: string
	isUnderage: boolean
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
	options?: Array<{ label: string, value: string | boolean }>
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
