import { Dispatch, SetStateAction } from "react";

export const TRASH_SOURCE = require("../../../../assets/trash.svg");

export const createEmptyElement = (props: {
    state: Props.State;
    infoTarget: "bossStaff" | "securityStaff" | "cctvStaff" | string;
}):number => {
    let newArr = props.state.current?.[props.infoTarget];
    newArr = [
	...newArr,
	{ name: undefined, position: undefined }
    ]
    props.state.updater((prev: ControlRoom.StoreInfo)=> ({
	...prev,
	[props.infoTarget]: newArr
    }))
    return newArr.length > 0 ? newArr.length - 1 : 1;
}

export const onCloseOrDelete = (props: Props.CurrentPopupProps) => {
    console.log(props.infoTarget);
    props.state.updater((prev: ControlRoom.StoreInfo)=> ({
	...prev,
	[props.infoTarget.infoTargetKey]: prev?.[props.infoTarget.infoTargetKey]
					    .filter((_, index: number)=> index !== props.infoTarget.infoTargetIndex)
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
export const onFinish = (props: Props.CurrentPopupProps & { validData: string[] }) => {
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
