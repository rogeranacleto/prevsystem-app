import { HiPlus } from "react-icons/hi";
import { TbLocationSearch } from "react-icons/tb";
import { RxPencil1 } from "react-icons/rx";
import { FaRegTrashAlt } from "react-icons/fa";
import { AnimatePresence } from "motion/react";
import { ModalMaintenance } from "../ModalMaintenance";
import { useState, useEffect } from "react";
import { onSnapshot, collection, doc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";
import { db } from "../../services/firebaseConnection";
import { auth } from "../../services/firebaseConnection";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { ModalUpdateMaintenance } from "../ModalUpdateMaintenance";
import { UpdateContext } from "../../contexts/UpdateContext";
import { updateDoc } from "firebase/firestore";
import { CardContext } from "../../contexts/CardContext";
import toast from "react-hot-toast";
export interface MaintenanceRecordProps{
    id: string;
    equipment: string;
    maintenance: string;
    date: string
    observations: string;
    status: string;
    serviceValue: string;
    expectedDate: string;
    client: string;
}
export function formatDate(date: string){
    const [year, month, day] = date.split("-");
    return `${day}/${month}/${year}`
}
export function formatValue(value: number){
    const valueFormated = value.toLocaleString("pt-BR", {style: "currency", currency: "BRL"})
    return valueFormated
}

export function TableMaintenance(){
const {totalMaintenance} = useContext(CardContext);
const { userName, getUserName } = useContext(AuthContext);
const {changeUpdateModal} = useContext(UpdateContext);
const [openModal, setOpenModal] = useState(false);
const [openModalUpdate, setOpenModalUpdate] = useState(false);
const [maintenanceRecord, setMaintenanceRecord] = useState<MaintenanceRecordProps[]>([])
const [search, setSearch] = useState("");


useEffect(() => {
    totalMaintenance(maintenanceRecord.length)
},[maintenanceRecord])

function changeModal(){
    setOpenModal(true)
}

async function changeOperation(id: string) {
  try {
    const docRef = doc(db, "maintenanceRecord", id);

    await updateDoc(docRef, {
      status: "Finalizado",
    });

    toast.success(
      <div>
        <h2 className="text-white font-bold text-sm">Manutenção finalizada</h2>
        <p className="text-gray-100/60 text-sm">O status foi atualizado com sucesso.</p>
      </div>
    );
  } catch (error) {
    toast.error(
      <div>
        <h2 className="text-white font-bold text-sm">Erro</h2>
        <p className="text-gray-100/60 text-sm">Não foi possível atualizar o status.</p>
      </div>
    );
  }
}

useEffect(() => {
    async function loadReacords(){
            onSnapshot(collection(db, "maintenanceRecord"),(snapshot) => {
            let listRecords: MaintenanceRecordProps[] = [];
            snapshot.forEach((doc) => {
                listRecords.push({
                    id: doc.id,
                    equipment: doc.data().equipment,
                    maintenance: doc.data().maintenance,
                    date: doc.data().date,
                    observations: doc.data().observations,
                    serviceValue: doc.data().serviceValue,
                    expectedDate: doc.data().expectedDate,
                    client: doc.data().client,
                    status: doc.data().status
                })
            })
            setMaintenanceRecord(listRecords)
        })
    }
    loadReacords()
},[])

useEffect(() => {
    async function checkLogin(){
        onAuthStateChanged(auth, (user) => {
            if(user?.displayName){
                getUserName(user?.displayName)
            }
        })
    }
    checkLogin()
},[])

const filteredMaintenanceRecord = maintenanceRecord.filter((item) => {
    const fullText = Object.values(item).join(" ").toLowerCase();
    const normalizedSearch = search.toLowerCase();
    return fullText.includes(normalizedSearch);
});

async function deleteMaintenanceRecord(id: string){
    const docRef = doc(db, "maintenanceRecord", id)
    await deleteDoc(docRef)
    .then(() => {
        toast.success(
            <div>
                <h2 className="text-white font-bold text-sm">Registro Deletado</h2>
                <p className="text-gray-100/60 text-sm">O registro foi deletado com sucesso.</p>
            </div>
        )
    })
    .catch(() => {
        toast.error(
            <div>
                <h2 className="text-white font-bold text-sm">Erro</h2>
                <p className="text-gray-100/60 text-sm">Ocorreu um erro inesperado, acione o suporte!</p>
            </div>
        )
    })
}

function openUpdateModal(register: MaintenanceRecordProps){
    changeUpdateModal(register)
    setOpenModalUpdate(true)
}


    return(
        <div className="max-w-screen">
            <AnimatePresence>
                {openModal && (<ModalMaintenance onClose={() => setOpenModal(false)}/>)}
            </AnimatePresence>
            <AnimatePresence>
                {openModalUpdate && (<ModalUpdateMaintenance onCloseModal={() => setOpenModalUpdate(false)}/>)}
            </AnimatePresence>
            <div className="flex gap-3 mt-7 relative">
                <input type="text" placeholder="Pesquise um registro" className="w-full border border-solid border-[#171717] rounded-lg p-2 text-white focus:outline-0 focus:ring-0.5 focus:border-[#ffffff4b]" value={search} onChange={(e) => setSearch(e.target.value)}/>
                <TbLocationSearch className="text-white text-3xl absolute right-4 top-1.5"/>
            </div>
            <div className="flex items-center justify-between mt-8 flex-wrap">
                <div>
                    {filteredMaintenanceRecord.length === 1 ? <h1 className="text-white font-medium text-lg">Olá {userName} <br/> Você tem um total de <span className="font-bold">{maintenanceRecord.length}</span> registro</h1> : <h1 className="text-white font-medium text-lg">Olá {userName} <br/> Você tem um total de <span className="font-bold">{maintenanceRecord.length}</span> registros</h1>}
                </div>
                <div>
                    <button className="text-white flex items-center gap-3 bg-[#3b0eb6e0] pt-2 pb-2 pr-3 pl-3 rounded-lg cursor-pointer hover:bg-[#3b0eb6] duration-300 ease-in-out" onClick={changeModal}><HiPlus className="text-white"/>Adicionar manutenção</button>
                </div>
            </div>
            <div className="overflow-x-auto w-full border border-solid border-[#171717] bg-black mt-3 rounded-lg">
                <div className="p-5">
                    <table className="w-full min-w-max text-left border-separate border-spacing-y-3">
                    <thead>
                        <tr className="text-gray-400 text-sm">
                            <th className="pt-3.5 pb-3.5 pl-7.5 text-left">EQUIPAMENTO</th>
                            <th className="pt-3.5 pb-3.5 pl-7.5 text-left">DATA RECEBIMENTO</th>
                            <th className="pt-3.5 pb-3.5 pl-7.5 text-left">MANUTENÇÃO</th>
                            <th className="pt-3.5 pb-3.5 pl-7.5 text-left">CLIENTE</th>
                            <th className="pt-3.5 pb-3.5 pl-7.5 text-left">VALOR DO SERVIÇO</th>
                            <th className="pt-3.5 pb-3.5 pl-7.5 text-left">DATA PREVISTA</th>
                            <th className="pt-3.5 pb-3.5 pl-7.5 text-left">OPERAÇÃO</th>
                            <th className="pt-3.5 pb-3.5 pr-7.5 text-right">AÇÕES</th>
                        </tr>
                    </thead>
                    <tbody className="text-sm text-white">
                    {filteredMaintenanceRecord.map((item) => (
                        <tr className="bg-black hover:scale-101 duration-300 ease-in-out" key={item.id}>
                            <td className="p-7.5 rounded-l-2xl">{item.equipment}</td>
                            <td className="p-7.5 rounded-l-2xl">{formatDate(item.date)}</td>
                            <td className="p-7.5">{item.maintenance}</td>
                            <td className="p-7.5">{item.client}</td>
                            <td className="p-7.5">{formatValue(Number(item.serviceValue))}</td>
                            <td className="p-7.5">{formatDate(item.expectedDate)}</td>
                            <td className="p-7.5">
                            <button onClick={() => changeOperation(item.id)} className="cursor-pointer" disabled={item.status === "Finalizado"}>
                            {item.status === "Ativo" ? (
                                <span className="bg-[#26a01b] font-bold px-4 py-2 rounded-2xl">
                                Ativo
                                </span>
                            ) : (
                                <span className="bg-[#e00913] font-bold px-4 py-2 rounded-2xl">
                                Finalizado
                                </span>
                            )}
                            </button>
                            </td>
                            <td className="p-7.5 rounded-r-2xl">
                                <div className="flex items-center justify-end gap-6">
                                    <button className="hover:scale-110 transition cursos-pointer" onClick={() => openUpdateModal(item)}>
                                        <RxPencil1 className="text-white cursor-pointer"/>
                                    </button>
                                    <button className="hover:scale-101 cursor-pointer" onClick={() => deleteMaintenanceRecord(item.id)}>
                                        <FaRegTrashAlt className="text-white hover:text-red-600 duration-300 ease-in-out" />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                    {maintenanceRecord.length === 0 && (<tr><td colSpan={6} className="p-5 text-center text-gray-400/50">Nenhum registro na tabela.</td></tr>)}
                    </table>
                </div>
            </div>
        </div>
    )
}
