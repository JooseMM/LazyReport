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
    storeFormat: "",
    informantName: "",
    isUnderage: false,
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

