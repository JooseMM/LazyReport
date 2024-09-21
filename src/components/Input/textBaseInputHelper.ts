import { Dispatch, SetStateAction } from "react";
import ControlRoom from "../../screens/ControlRoom/ControlRoom";

export const timeFormat24hrs = new RegExp('^([01]\\d|2[0-3]):[0-5]\\d$');
export const storeCodeFormat = new RegExp('^(?:[0-6]?\\d{1,3}|7000)$');
export const lettersOnlyFormat = new RegExp('^[a-zA-Z_ ]+( [a-zA-Z_ ]+)*$');
export const wordsOrEmptyFormat = new RegExp('^[a-zA-Z0-9_ ]*$');
export const numberOnlyFormat = new RegExp('\\b[1-9]\\b'); 
export const wordsOrNumberFormat = new RegExp('^[\\w\\s]+$');

export const getValidatorPattern = (contenType: Input.ContentType):RegExp => {
    switch(contenType) {
	case "onlyLetters": 
	    return lettersOnlyFormat;
	case "wordsOrEmpty":
	    return wordsOrEmptyFormat;
	case "words":
	    return wordsOrNumberFormat;
	case "storeCodes":
	    return storeCodeFormat;
	case "time":
	    return timeFormat24hrs;
	default:
	    return null;
    }
};
export const validationUserOutput = (contentType: Input.ContentType):string => {
    switch(contentType) {
	case "onlyLetters": 
	    return "Formato de texto incorrecto";
	case "wordsOrEmpty":
	    return "Formato de texto o digitos incorrecto";
	case "words":
	    return "Formato de texto o digitos incorrecto";
	case "storeCodes":
	    return "Formato de codigo de local incorrecto";
	case "time":
	    return "Formato de tiempo incorrecto";
	default:
	    return "Formato de datos incorrecto";
    }
};
export const validation = (props: {
    parentValidationUpdater: Dispatch<SetStateAction<string[]>>
    ownValidationState: Dispatch<SetStateAction<boolean>>
    input: string;
    contentType: Input.ContentType;
    label: string;
}):boolean => {
    const checker = getValidatorPattern(props.contentType);
    const result = checker.test(props.input);

    if(result) 
	props.parentValidationUpdater((prev:string[])=> prev.filter(match => match !== props.label));
    else
	props.parentValidationUpdater((prev:string[]) => prev.includes(props.label) ? prev : [...prev, props.label]);

    props.ownValidationState(result);
    return result;
}

type Props = {
    parentState: Input.State;
    validationResult: boolean;
    target: Props.TargetKeys;
    newValue: string | number;
}
export const shouldUpdateState = (props: Props):void => {
    if(!props.validationResult)
	return;

    updateState({
	updater: props.parentState.updater,
	target: props.target,
	newValue: props.newValue
    });
}
const updateState = (props: {
    updater: Dispatch<SetStateAction<ControlRoom.StoreInfo | any>>;
    target: Props.TargetKeys;
    newValue: any;
}):void => {
    const secondLevelDeep = props.target.infoTargetIndex != null;
    const thirdLevelDeep = props.target.infoTargetKey != null;

    if(secondLevelDeep && thirdLevelDeep) {
	props.updater((prev: ControlRoom.StoreInfo | object)=> ({
	    ...prev,
	    [props.target.infoTarget]: prev[props.target.infoTarget].map((obj: object, index:number)=> {
		if(index === props.target.infoTargetIndex) {
		    obj[props.target.infoTargetKey] = props.newValue;
		}
		return obj;
	    })
	}))
    }
    if(secondLevelDeep && !thirdLevelDeep) {
	props.updater((prev: ControlRoom.StoreInfo | object)=> ({
	    ...prev,
	    [props.target.infoTarget]: [
		...prev[props.target.infoTarget],
		prev[props.target.infoTarget][props.target.infoTargetIndex] = props.newValue
	    ]
	}))
    }
    if(!secondLevelDeep && !thirdLevelDeep) {
	props.updater((prev: ControlRoom.StoreInfo | object)=> ({
	    ...prev,
	    [props.target.infoTarget]: props.newValue
	}))
    }
}

export const previousState = (props: {
    state: ControlRoom.StaffInfo | unknown;
    target: Props.TargetKeys;
}):string => {
    const secondLevelDeep = props.target.infoTargetIndex != null;
    const thirdLevelDeep = props.target.infoTargetKey != null;
    const state = props.state;

    if(secondLevelDeep && thirdLevelDeep) {
	return state?.[props.target.infoTarget]?.[props.target.infoTargetIndex]?.[props.target.infoTargetKey];
    }
    if(secondLevelDeep && !thirdLevelDeep) {
	return state?.[props.target.infoTarget]?.[props.target.infoTargetIndex];
    }
    if(!secondLevelDeep && !thirdLevelDeep) {
	return state?.[props.target.infoTarget];
    }
    return undefined;
}
