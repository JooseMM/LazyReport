export const storeTypeChecker = (storeName: number) => (
	storeName === 90 ? "" :
	storeName === 515 || storeName == 524 ? "Edif" :
	"CD"
);
