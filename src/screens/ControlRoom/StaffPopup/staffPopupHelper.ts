import { Dispatch, SetStateAction } from "react";

export const TRASH_SOURCE = require("../../../../assets/trash.svg");

export const createEmptyElement = (props: {
    state: Props.State;
    infoTarget: "bossStaff" | "securityStaff" | "cctvStaff" | string;
}):number => {
    props.state.updater((prev: ControlRoom.StoreInfo)=> ({
	...prev,
	[props.infoTarget]: [
	    ...prev?.[props.infoTarget],
	    { name: undefined, position: undefined } 
	]
    }))
    return props.state.current?.[props.infoTarget]?.length;
}

export const onCloseOrDelete = (props: Props.CurrentPopupProps) => {
    props.state.updater((prev: ControlRoom.StoreInfo)=> ({
	...prev,
	[props.infoTarget.infoTarget]: prev?.[props.infoTarget.infoTarget].filter((_, index)=> index !== props.infoTarget.infoTargetIndex)
    }));
    props.propsUpdater((prev: Props.CurrentPopupProps) => ({
	...prev,
	isOpen: false,
	infoTarget: {
	    infoTarget: undefined,
	    infoTargetIndex: undefined,
	    infoTargetKey: undefined,
	},
    }));
}
export const onFinish = (props: Props.CurrentPopupProps & { validData: boolean }) => {
    if(!props.validData) {
	return;
    }
    props.propsUpdater((prev: Props.CurrentPopupProps)=> ({
	...prev,
	isOpen: false,
	infoTarget: {
	    infoTarget: undefined,
	    infoTargetIndex: undefined,
	    infoTargetKey: undefined,
	},
    }))
}
