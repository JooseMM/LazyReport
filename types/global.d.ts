import { Dispatch } from "react";
import { ViewStyle } from "react-native";

export {};

declare global {
    namespace Props {
	interface TargetKeys {
	    infoTarget: string;
	    infoTargetIndex?: number;
	    infoTargetKey?: string;
	}
	interface State {
	    current: unknow;
	    updater: Dispatch<SetStateAction<unknown>>;
	}
	interface CurrentPopupProps {
	    isOpen: boolean;
	    infoTarget: Props.TargetKeys;
	    state: Props.State;
	    propsUpdater: Dispatch<SetStateAction<Props.CurrentPopupProps>>;
	}
    }
    namespace Input {
	type ContentType = "onlyLetters" | "words" | "wordsOrEmpty" | "storeCodes" | "time";

	interface State {
	    current: unknown // for now
	    updater: Dispatch<SetStateAction<unknown>> // for now
	}

	interface ValidationState {
	    current: Array<string> | boolean;
	    updater: Dispatch<SetStateAction<string[] | boolean>>
	}

	interface Text {
	    label: string;
	    placeholder?: string;
	    contentType: ContentType;
	    target: Props.TargetKeys; 
	    validation: ValidationState;
	    state: State;
	    styles?: ViewStyle;
	}
    }
    namespace ControlRoom {
	type StaffArray = Array<{ name: string, position: string }>

	interface StoreInfo {
	    storeName: string;
	    storeCode: number;
	    connectionHealth: ConnectionState;
	    bossStaff: StaffArray;
	    securityStaff: StaffArray;
	    cctvStaff: StaffArray;
	    completed: boolean;
	    news: StateNews;
	}
	interface StaffInfo {
	    label: string;
	    placeholder: string;
	    contentType: Input.ContentType;
	}
    }

}
