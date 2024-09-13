import { 
createContext,
useContext,
useState,
ReactNode,
ReactElement
} from "react";
import { 
AuthContextType,
AppReportState,
ControlRoomReport
} from "./constants/customTypes";
import { ControlRoomDrawerRoutes } from "./constants/constantData";


const AuthContext = createContext<AuthContextType | undefined>(undefined);
const ControlRoomInitialState: Array<ControlRoomReport> = ControlRoomDrawerRoutes.map(store => {
    return ({
	storeName: store.name,
	storeCode: store.code,
	connectionHealth: undefined,
	completed: false,
	bossStaff: [{ name: "Jose Moreno", position: "Jefe de Area" }],
	securityStaff: [],
	news: [],
	cctvStaff: []
    })
})

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
		reportState: [...ControlRoomInitialState]
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


