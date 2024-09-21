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
export const ControlRoomStaffMethods = {
    removeElement: (props: StaffUtilityMethods) => {
	props.state.updater((prev: ControlRoomReport) => ({
		...prev,
		[props.targetProperty]: prev?.[props.targetProperty].filter((_, index: number) => index == props.indexState.current)
	    })
	);
	props.indexState.updater(undefined);
    },
    createEmptyElement: (props: StaffUtilityMethods) => {
	props.state.updater((prev: ControlRoomReport) => ({
		...prev,
		[props.targetProperty]: [
		    ...prev?.[props.targetProperty],
		    { name: undefined, position: undefined }
		]
	    })
	);
	props.indexState.updater(
	    props.state.current?.[props.targetProperty]?.length - 1
	);
    },
}
export const STAFF_GROUPS: Array<{ 
staffName: ControlRoomStaffGroup,
methods: UtilMethods 
}> = [
     { staffName: "bossStaff", methods: ControlRoomStaffMethods },
     { staffName: "securityStaff", methods: ControlRoomStaffMethods },
     { staffName: "cctvStaff", methods: ControlRoomStaffMethods },
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
