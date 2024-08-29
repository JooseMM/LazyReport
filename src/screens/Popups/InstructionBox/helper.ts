export interface Instructions {
    description: string
    steps: Array<string>
    warnings: Array<{ keywords: string, description: string }>

}
export const SEPPEntry: Instructions = {
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
}
export const notFound: Instructions = {
    description: "not found",
    steps: ["", ""],
    warnings: [ { keywords: "", description: ""}]
}


export const chooseInstructions = (routes:Array<string>) => {
    if(routes.includes("Entry")) 
	return SEPPEntry;
    else 
	notFound;
}
