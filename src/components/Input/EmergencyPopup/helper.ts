import { wordsOrNumberFormat } from "../../../constants/regexPatterns";

export const closeIcon = require("../../../../assets/close.svg");
export const trashIcon = require("../../../../assets/trash.svg");
export const validateAnnex = (annex: string):boolean => wordsOrNumberFormat.test(annex) ? true : false;

