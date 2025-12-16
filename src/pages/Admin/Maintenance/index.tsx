import { TableMaintenance } from "../../../components/TableMaintenance"
export function Maintenance(){
    return(
        <div className="bg-black max-w-screen min-h-screen rounded-2xl p-7">
            <h1 className="text-white font-medium text-lg">Seção de Manutenções</h1>
            <TableMaintenance/>
        </div>
    )
}