import { createContext, type ReactNode } from "react";
import { useState } from "react";
import { type MaintenanceRecordProps } from "../components/TableMaintenance";
interface UpdateProps{
    maintenanceUpdate: MaintenanceRecordProps | null;
    changeUpdateModal: (register: MaintenanceRecordProps) => void;
}
interface ChildrenProps{
    children: ReactNode
}

export const UpdateContext = createContext({} as UpdateProps)

const UpdateProvider = ({children}: ChildrenProps) => {
const [maintenanceUpdate, setMaintenanceUpdate] = useState<MaintenanceRecordProps | null>(null)

const changeUpdateModal = (register: MaintenanceRecordProps) => {
    setMaintenanceUpdate(register)
}
    return(
        <UpdateContext.Provider value={{changeUpdateModal, maintenanceUpdate}}>
            {children}
        </UpdateContext.Provider>
    )
}
export { UpdateProvider };