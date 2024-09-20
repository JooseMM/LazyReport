import {
UpdaterProps,
AppReportState,
ControlRoomReport,
InputObject,
GetInitialStateParams,
ConnectionState,
InitialStateConnectionHealthProps,
UpdateStateConnectionHealthProps
} from "../../../constants/customTypes";
import { connectionHealthOptions } from "../../../constants/constantData";
import { Dispatch, SetStateAction } from "react";


type Utils = {
    utils: {
	targetProperty: string
	methods: {
	    getInitialState: (props: InitialStateConnectionHealthProps) => string
	    updateState: (props:UpdateStateConnectionHealthProps) => void
	}
    }
}
export const CONTROL_ROOM_CONNECTION_HEALTH: InputObject & Utils = {
    label: "Enlaces Operativos",
    options: connectionHealthOptions,
    validationKeyword: "opción valida",
    regExpValidator: [],
    utils: {
	targetProperty: "connectionHealth",
	methods: {
		getInitialState: (props:InitialStateConnectionHealthProps):string => {
		    return props.state.current.connectionHealth ?? "";
		},
		updateState: (props:UpdateStateConnectionHealthProps) => {
		    props.state.updater((prev: ControlRoomReport) => ({
			...prev,
			connectionHealth: props.newValue as ConnectionState
		    }))
		}
	}
    }
};

