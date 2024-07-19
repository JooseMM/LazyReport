import { Dispatch, SetStateAction, createContext, useContext, useState, ReactNode, ReactElement } from "react";
import { DetainedReportData } from "../constants/constants";

type AuthContextType = {
	report: DetainedReportData | null;
	setReport: Dispatch<SetStateAction<{ [key: string]: any} | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

function useAuth(): AuthContextType {
	const context = useContext(AuthContext);

	if(!context)
		throw new Error("useAuth must be used within an AuthProvider");
	
	return context;
}

const AuthProvider = (props: { children: ReactNode }): ReactElement =>  {
	const [ report, setReport ] = useState< DetainedReportData | null>(null);

	return (
		<AuthContext.Provider {...props} value={{ report, setReport }}>
			{ props.children }
		</AuthContext.Provider>
	);

};

export { AuthProvider, useAuth };


