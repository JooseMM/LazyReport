export const timeFormat24hrs = new RegExp('^([01]\\d|2[0-3]):[0-5]\\d$');
export const storeCodeFormat = new RegExp('^(?:[0-6]?\\d{1,3}|7000)$');
export const lettersOnlyFormat = new RegExp('^[a-zA-Z_ ]+( [a-zA-Z_ ]+)*$');
export const lettersOrEmptyFormat = new RegExp('^[a-zA-Z0-9_ ]*$');
export const numberOnlyFormat = new RegExp('\\b[1-9]\\b');
export const wordsOrNumberFormat = new RegExp('^[\\w\\s]+$');
