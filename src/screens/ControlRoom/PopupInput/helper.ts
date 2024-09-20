import { 
ControlRoomReport,
    UpdateStaff,
Utils,
} from "../../../constants/customTypes";
import {
Dispatch,
SetStateAction
} from "react";
export const trashIcon = require("../../../../assets/trash.svg");

type CreateEmptyElement = {
    state: { current: ControlRoomReport, updater?: Dispatch<SetStateAction<ControlRoomReport>> }
    indexState: { current?: number, updater: Dispatch<SetStateAction<number>> }
    targetProperty?: string
    newValue?: string
    utils?: Utils
}
export const newElement = (props: CreateEmptyElement) => {
	if(props.indexState.current === null) {
	    props.utils.methods.createEmptyElement({
		state: { current: props.state.current, updater: props.state.updater },
		indexState: { updater: props.indexState.updater },
		targetProperty: props.utils.name
	    })
	}
}
type CloseBox = {
    validationState: { 
	current: Array<"name" | "position">,
	updater: Dispatch<SetStateAction<Array<"name" | "position">>>
    },
    state: { 
	current: ControlRoomReport,
	updater: Dispatch<SetStateAction<ControlRoomReport>> 
    }
    popupControl: { 
	updater: Dispatch<SetStateAction<UpdateStaff>>
    },
    indexState: { current: number, updater: Dispatch<SetStateAction<number>>},
    utils?: Utils
}
export const closeBox = (props: CloseBox) => {
	if(props.validationState.current.length !== 0) {
	    console.log("valid");
	    props.utils.methods.removeElement({
		state: props.state,
		targetProperty: props.utils.name,
		indexState: props.indexState
	    })
	    return // do something
	}
	props.popupControl.updater({ 
	    isOpen: false,
	    utils: undefined,
	    index: undefined
	})
}

