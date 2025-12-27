import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { db } from "../../services/firebaseConnection";
import { updateDoc } from "firebase/firestore";
import { doc } from "firebase/firestore";
import { useState } from "react";
import { useContext } from "react";
import { UpdateContext } from "../../contexts/UpdateContext";
import { type MaintenanceRecordProps } from "../TableMaintenance";
import toast from "react-hot-toast";

interface ChangeModalUpdate {
  onCloseModal: (changed: boolean) => void;
}

export function ModalUpdateMaintenance({ onCloseModal }: ChangeModalUpdate) {
const {maintenanceUpdate} = useContext(UpdateContext);
const [equipment, setEquipment] = useState(maintenanceUpdate?.equipment || "");
const [maintenance, setMaintenance] = useState( maintenanceUpdate?.maintenance || "");
const [date, setDate] = useState(maintenanceUpdate?.date || "");
const [serviceValue, setServiceValue] = useState(maintenanceUpdate?.serviceValue || "");
const [expectedDate, setExpectedDate] = useState(maintenanceUpdate?.expectedDate || "");
const [observations, setObservations] = useState(maintenanceUpdate?.observations || "");
const [client, setClient] = useState(maintenanceUpdate?.client || "");

function onCloseModalUpdate(){
  onCloseModal(true)
}

async function saveMaintenanceUpdateRecord(id: MaintenanceRecordProps | null){
  if (!id) return;

  onCloseModal(true);

  const refDoc = doc(db, "maintenanceRecord", id?.id);
  await updateDoc(refDoc, {
    equipment: equipment,
    maintenance: maintenance,
    date: date,
    serviceValue: serviceValue,
    expectedDate: expectedDate,
    client: client,
    observations: observations
  })
  .then(() => {
    toast.success(
        <div>
          <h2 className="text-white font-bold text-sm">Registro Atualizado</h2>
          <p className="text-gray-100/60 text-sm">O registro foi atualizado com sucesso.</p>
        </div>
    );
  })
  .catch(() => {
        toast.error(
        <div>
          <h2 className="text-white font-bold text-sm">Erro</h2>
          <p className="text-gray-100/60 text-sm">Ocorreu um erro inesperado, acione o suporte!</p>
        </div>
    );
  })
}


  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/70 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onCloseModalUpdate()}
      />

      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="bg-black w-lg flex flex-col border border-gray-100/20 p-5.5 rounded-lg relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="cursor-pointer absolute right-5 top-4"
            onClick={onCloseModalUpdate}
          >
            <IoClose className="text-gray-100/60 text-2xl hover:text-red-600 duration-300 ease-in-out" />
          </button>

          <h2 className="text-white text-lg font-bold">
            Atualizar Registro de Manutenção
          </h2>
          <p className="text-gray-100/60 mb-5.5">
            Substitua o campo necessário e atualize o registro.
          </p>

          <div className="flex flex-col">
            <div className="flex justify-between gap-4">
              <div className="flex w-full gap-4">
                <div className="w-full">
                  <label className="text-white pb-2">Equipamento</label>
                  <input
                    type="text"
                    className="w-full border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    required
                    value={equipment}
                    onChange={(e) => setEquipment(e.target.value)}
                  />
                  <label className="text-white pb-2">Data recebimento</label>
                  <input
                    type="date"
                    className="w-full border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    required
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                  />
                  <label className="text-white pb-2">Manutenção</label>
                  <input
                    type="text"
                    className="w-full border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    required
                    value={maintenance}
                    onChange={(e) => setMaintenance(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label className="text-white pb-2">Cliente</label>
                  <input
                    type="text"
                    className="w-full border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    required
                    value={client}
                    onChange={(e) => setClient(e.target.value)}
                  />
                  <label className="text-white pb-2">Valor do serviço</label>
                  <input
                    type="number"
                    className="w-full border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    required
                    value={serviceValue}
                    onChange={(e) => setServiceValue(e.target.value)}
                  />
                  <label className="text-white pb-2">Data prevista</label>
                  <input
                    type="date"
                    className="w-full border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                    required
                    value={expectedDate}
                    onChange={(e) => setExpectedDate(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <label className="text-white pb-2">Observações</label>
              <textarea
                rows={5}
                className="border border-gray-100/20 rounded-lg focus:border-green-100/40 outline-none text-white p-3.5"
                value={observations}
                onChange={(e) => setObservations(e.target.value)}
              ></textarea>
            </div>

            <button
              className="text-white bg-[#3a0eb6] mt-4 p-2 rounded-lg cursor-pointer hover:bg-[#3a0eb6] hover:brightness-125 duration-500"
              type="button"
              onClick={() => saveMaintenanceUpdateRecord(maintenanceUpdate)}
            >
              Atualizar Registro
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}
