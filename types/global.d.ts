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
    }
    namespace Input {
	type ContentType = "onlyLetters" | "words" | "wordsOrEmpty" | "storeCodes" | "time";

	interface State {
	    current: unknown // for now
	    updater: Dispatch<SetStateAction<unknown>> // for now
	}

	interface ValidationState {
	    current: Array<string>;
	    updater: Dispatch<SetStateAction<string[]>>
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
	interface CurrentPopupInfo {
	    isOpen: boolean;
	    infoTarget: Props.targetKeys;
	}
	interface StaffInfo {
	    label: string;
	    placeholder: string;
	    regExpValidator: Array<RegExp>;
	}
    }

}
