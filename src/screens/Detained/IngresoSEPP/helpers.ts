import { Dispatch, SetStateAction } from "react";
import { DetainedReportData } from "../../../constants/customTypes";

export const INSTRUCTIONS= {
    description: "Somethings to fill the text in which Im going to put other more important things hehe.",
    steps: [ 
	"Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
	"Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
	"Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
	"Armando Ramirez GG.SS informa sobre corte de suministro electrico.",
    ],
    warnings: [
	{ keywords: "This is a keyword", description: "type something here to fill a little bit of the space needed to look good" }
    ]
};

export const initReport: DetainedReportData = {
    id: "",
    time: undefined,
    reportType: "Detenido en SEPP",
    storeNumber: "",
    storeName: "",
    storeFormat: undefined,
    informantName: "",
    isUnderage: undefined,
    quantity: "",
    emergencyCall: [],
    firstUpscale: undefined,
    secondUpscale: undefined,
    thirdUpscale: undefined,
}

export const reportObjectKeys = [
	"id",
	"time",
	"reportType",
	"storeNumber",
	"storeFormat",
	"storeName",
	"isUnderage",
	"quantity",
	"informantName",
	"emergencyCall",
];
export const isPropInvalid = (
    current: DetainedReportData,
    element: string
):boolean => {
    return current[element] == undefined 
		|| current[element] == null 
		    || current[element] == "" ? true : false 
};

export const reportValidation = (current: DetainedReportData, setInvalidReport: Dispatch<SetStateAction<boolean>>) => {
    reportObjectKeys.forEach((element)=> {
	if(element == "isUnderage" || element == "storeFormat") {
	    const property = current[element];

	    if(typeof property == "boolean" && element === "isUnderage")
		return setInvalidReport(false)
	    if(typeof property == "string" && element === "storeFormat")
		return setInvalidReport(false)

	    return setInvalidReport(true);
	}

	setInvalidReport(isPropInvalid(current, element));
    });
};

