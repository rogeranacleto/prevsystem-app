import { FaTools } from "react-icons/fa";
import { RiFolderCloseFill } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";
import { useContext } from "react";
import { CardContext } from "../../contexts/CardContext";

export function Cards() {
const { total, active, finished } = useContext(CardContext);

  return (
    <div className="w-full">
      <div className="flex gap-7 flex-wrap">
        <div className="bg-[#080808] flex-1 min-w-70 min-h-45 rounded-lg border border-solid border-[#64636373] flex justify-between p-6">
          <div>
            <h1 className="text-[#dad3d3] text-sm mb-2">
              Total de manutenções
            </h1>
            <p className="text-white font-bold text-3xl mb-3.5">
              {total}
            </p>
            <p className="text-sm text-[#adabab]">
              Dados atualizados em tempo real
            </p>
          </div>
          <div className="border border-solid border-[#525151] h-12 rounded-full p-3 flex items-center">
            <FaTools className="text-[#696868] text-2xl" />
          </div>
        </div>

        <div className="bg-[#080808] flex-1 min-w-70 min-h-45 rounded-lg border border-solid border-[#64636373] flex justify-between p-6">
          <div>
            <h1 className="text-[#dad3d3] text-sm mb-2">
              Manutenções ativas
            </h1>
            <p className="text-white font-bold text-3xl mb-3.5">
              {active}
            </p>
            <p className="text-sm text-[#adabab]">
              Dados atualizados em tempo real
            </p>
          </div>
          <div className="border border-solid border-[#525151] h-12 rounded-full p-3 flex items-center">
            <FaRegCalendarCheck className="text-[#696868] text-2xl" />
          </div>
        </div>

        <div className="bg-[#080808] flex-1 min-w-70 min-h-45 rounded-lg border border-solid border-[#64636373] flex justify-between p-6">
          <div>
            <h1 className="text-[#dad3d3] text-sm mb-2">
              Manutenções finalizadas
            </h1>
            <p className="text-white font-bold text-3xl mb-3.5">
              {finished}
            </p>
            <p className="text-sm text-[#adabab]">
              Dados atualizados em tempo real
            </p>
          </div>
          <div className="border border-solid border-[#525151] h-12 rounded-full p-3 flex items-center">
            <RiFolderCloseFill className="text-[#696868] text-2xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
