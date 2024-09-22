import { ControlRoomReport, ControlRoomStaffGroup, StaffUtilityMethods, UtilMethods } from "../../constants/customTypes";

export const translateStaffGroupName = (name: ControlRoomStaffGroup) => {
    switch(name) {
	case "bossStaff":
	    return "Jefaturas";
	case "cctvStaff":
	    return "Operador CCTV";
	case "securityStaff":
	    return "Personal de Seguridad";
    };
};
export const STAFF_GROUPS = [
    "bossStaff",
    "securityStaff",
    "cctvStaff",
];
const spanishNumbers = [
    "Sin",
    "Un",
    "Dos",
    "Tres",
    "Cuatro",
    "Cinco",
    "Seis",
    "Siete",
    "Ocho",
    "Nueve",
    "Diez"
];
export const translatedSmallQuantities = (quantity: number) => {
    if(quantity === undefined || quantity === null)
	return "Sin";
    return spanishNumbers[quantity];
}
export const getStaffCount = (props: {
    staffLength: number,
}):string => {
    const properNoun = props?.staffLength === 1 ? "Colaborador" : "Colaboradores";
    return translatedSmallQuantities(props?.staffLength) + " " + properNoun;
}
