import { db } from "../../services/firebaseConnection";
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";
import { motion } from "motion/react";
import { IoClose } from "react-icons/io5";
import toast from "react-hot-toast";
interface ChangeModal {
  onClose: (changed: boolean) => void;
}

export function ModalMaintenance({ onClose }: ChangeModal) {
  const [equipment, setEquipment] = useState("");
  const [maintenance, setMaintenance] = useState("");
  const [date, setDate] = useState("");
  const [observations, setObservations] = useState("");
  const [serviceValue, setServiceValue] = useState("");
  const [expectedDate, setExpectedDate] = useState("");
  const [client, setClient] = useState("");

  function onCloseModal() {
    onClose(true);
  }

  async function saveMaintenanceRecord(e: React.FormEvent) {
    e.preventDefault();

    try {
      await addDoc(collection(db, "maintenanceRecord"), {
        equipment,
        maintenance,
        date,
        observations,
        serviceValue,
        expectedDate,
        client,
        status: "Ativo"
      });
      
      toast.success(
        <div>
          <h2 className="text-white font-bold text-sm">Registro Criado</h2>
          <p className="text-gray-100/60 text-sm">
            O registro de manutenção foi criado com sucesso.
          </p>
        </div>
      );

      onClose(true);
    } catch (error) {
      toast.error(
        <div>
          <h2 className="text-white font-bold text-sm">Erro Inesperado</h2>
          <p className="text-gray-100/60 text-sm">
            Houve um erro inesperado, ligue para o suporte.
          </p>
        </div>
      );
    }
  }

  return (
    <>
      <motion.div
        className="fixed inset-0 bg-black/70 z-40"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => onCloseModal()}
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
            onClick={onCloseModal}
          >
            <IoClose className="text-gray-100/60 text-2xl hover:text-red-600 duration-300 ease-in-out" />
          </button>

          <h2 className="text-white text-lg font-bold">Criar Nova Manutenção</h2>
          <p className="text-gray-100/60 mb-5.5">
            Preencha os campos para criar uma nova manutenção.
          </p>

          <form className="flex flex-col" onSubmit={saveMaintenanceRecord}>
            <div className="flex justify-between gap-4">
              <div className="flex flex-col w-full">
                <label className="text-white pb-2">Equipamento</label>
                <input
                  type="text"
                  className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                  required
                  value={equipment}
                  onChange={(e) => setEquipment(e.target.value)}
                />
                <label className="text-white pb-2">Data recebimento</label>
                <input
                  type="date"
                  className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                  required
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
                <label className="text-white pb-2">Manutenção</label>
                <input
                  type="text"
                  className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                  required
                  value={maintenance}
                  onChange={(e) => setMaintenance(e.target.value)}
                />
                <label className="text-white pb-2">Cliente</label>
                <input
                  type="text"
                  className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                  required
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                />
                <label className="text-white pb-2">Valor do serviço</label>
                <input
                  type="number"
                  className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                  required
                  value={serviceValue}
                  onChange={(e) => setServiceValue(e.target.value)}
                />
                <label className="text-white pb-2">Data prevista</label>
                <input
                  type="date"
                  className="border border-gray-100/20 p-2 rounded-lg text-white mb-6.5 focus:border-green-100/40 outline-none"
                  required
                  value={expectedDate}
                  onChange={(e) => setExpectedDate(e.target.value)}
                />
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

            <button className="text-white bg-[#3a0eb6] mt-4 p-2 rounded-lg cursor-pointer hover:bg-[#3a0eb6] hover:brightness-125 duration-500" type="submit">
              Criar registro
            </button>
          </form>
        </div>
      </motion.div>
    </>
  );
}
