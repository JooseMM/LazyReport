import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import { wordsOrNumberFormat } from "../../../constants/regexPatterns";
import { SetStateAction, Dispatch } from "react";

export const closeIcon = require("../../../../assets/close.svg");
export const trashIcon = require("../../../../assets/trash.svg");
export const validateAnnex = (annex: string):boolean => wordsOrNumberFormat.test(annex) ? true : false;

export const showTimePicker = (callTime: Date, setCallTime: Dispatch<SetStateAction<Date>>) => {
    DateTimePickerAndroid.open({
	value: callTime ? callTime : new Date(),
	mode: "time",
	is24Hour: true,
	onChange: (_event, selected) => setCallTime(selected)
    });
};


