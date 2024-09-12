import { createContext, useContext, useState, ReactNode, ReactElement } from "react";
import { AuthContextType } from "./constants/customTypes";
import { AppReportState } from "./constants/customTypes";


const AuthContext = createContext<AuthContextType | undefined>(undefined);

function useAuth(): AuthContextType {
	const context = useContext(AuthContext);

	if(!context)
		throw new Error("useAuth must be used within an AuthProvider");
	
	return context;
}

const AuthProvider = (props: { children: ReactNode }): ReactElement =>  {
	const [ report, setReport ] = useState<AppReportState>({
	    controlRoomState: {
		operatorNames: { mainOperator: undefined },
		reportState: []
	    },
	    basicFormatState: {
		operatorNames: { mainOperator: undefined, backupOperator: undefined },
		reportState: []
	    }
	});

	return (
		<AuthContext.Provider {...props} value={{ report, setReport }}>
			{ props.children }
		</AuthContext.Provider>
	);

};

export { AuthProvider, useAuth };


