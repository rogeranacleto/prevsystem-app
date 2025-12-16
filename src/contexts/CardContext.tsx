import { createContext, type ReactNode } from "react";
import { useState } from "react";
interface CardContextProps{
    activeMaintenance: (actives: number) => void;
    finishedMaintenance: (finisheds: number) => void;
    totalMaintenance: (total: number) => void;
    active: number;
    finished: number;
    total: number;
}
interface ChildrenProps{
    children: ReactNode
}

export const CardContext = createContext({} as CardContextProps)

const CardProvider = ({children}: ChildrenProps) => {
const [active, setActive] = useState(0);
const [finished, setFinished] = useState(0);
const [total, setTotal] = useState(0);

const activeMaintenance = (actives: number) => {
    setActive(actives)
}
const finishedMaintenance = (finisheds: number) => {
    setFinished(finisheds)
}

const totalMaintenance = (total: number) => {
    setTotal(total)  
}
return(
        <CardContext.Provider value={{activeMaintenance, finishedMaintenance, totalMaintenance, active, finished, total}}>
            {children}
        </CardContext.Provider>
    )
}
export { CardProvider };