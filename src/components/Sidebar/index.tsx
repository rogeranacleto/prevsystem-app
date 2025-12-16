import { useNavigate } from "react-router";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../../services/firebaseConnection";
import { MdOutlineDashboard } from "react-icons/md";
import { BsTools } from "react-icons/bs";
import { NavLink } from "react-router";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { PiSignOutBold } from "react-icons/pi";
import { FaTools } from "react-icons/fa";
import { FaRegCalendarCheck } from "react-icons/fa";
import { RiFolderCloseFill } from "react-icons/ri";

interface SidebarProps{
    isCollapsed: boolean;
    setIsCollapsed: (isCollapsed: boolean) => void;
}

export function Sidebar({isCollapsed, setIsCollapsed}: SidebarProps){
const {logout} = useContext(AuthContext);
const navigate = useNavigate();
const [isHovered, setIsHovered] = useState(true);


async function logoutUser(){
    await signOut(auth);
    logout();
    navigate("/login")
}

function sidebarCollapsed(){
    setIsCollapsed(true)
}

return(
        <div>
            <main
            className={`
                fixed top-0 left-0
                ${!isCollapsed ? "w-64" : "w-20"}
                h-screen bg-[#080808] flex flex-col
                transition-all ease-in-out duration-300
                z-50
            `}
            onMouseEnter={() => {
                if (isCollapsed) setIsHovered(true);
            }}
            onMouseLeave={() => {
                if (isCollapsed) setIsHovered(false);
            }}
            >
                <nav className="text-black pr-5 pl-5 flex flex-col h-screen justify-between relative">
                        <div className="flex items-center ml-2 mt-8">
                            {isHovered ? <button  className="h-8" onClick={() => setIsCollapsed(false)}><div className="hover:text-[#3a0eb6] hover:bg-[#6f5af511] rounded-lg duration-500 ease-in-out cursor-pointer"><FaRegArrowAltCircleRight className="absolute left-8.5 text-2xl top-9 text-gray-400/10"/></div></button> : <BsTools className="h-8 w-8 text-white"/>}

                            {!isCollapsed && <div className="flex items-center justify-center"><BsTools className="h-8 w-8 text-white"/><h1 className="text-2xl font-bold ml-2.5 text-white">PrevSystem</h1></div>}
                            <button className="cursor-pointer" onClick={() => sidebarCollapsed()}>
                                <div className="hover:text-[#ffffff8f] hover:bg-[#6f5af511] rounded-lg duration-500 ease-in-out cursor-pointer">
                                    {!isCollapsed && <FaRegArrowAltCircleLeft className="absolute right-0.5 text-2xl top-9 text-gray-400/10"/>}
                                </div>
                            </button>
                        </div>
                    <div className="flex flex-col gap-5">
                            <NavLink 
                                to="admin/dashboard"
                                className={({ isActive }) =>
                                    `relative  rounded-lg duration-500 ease-in-out 
                                    ${isActive ? "bg-[#ffffff1a] text-white" : "hover:text-white hover:bg-[#ffffff1a]"}`
                                }
                            >
                            {isCollapsed ? 
                                <div className="hover:text-white rounded-lg duration-500 ease-in-out mt-2 pt-3 pb-3 pl-3">
                                    <MdOutlineDashboard className="absolute top-1.5 left-2.5 text-lg text-white"/>
                                    <p className={`font-medium pl-12 ${isCollapsed ? "hidden" : "block"}`}>{`Todos os Produtos`}</p>
                                </div>
                                :
                            <div className="hover:text-white rounded-lg duration-500 ease-in-out pt-2.5 pb-2.5 pl-3">
                                <MdOutlineDashboard className="absolute top-3.5 left-4 text-lg text-white"/>
                                <p className={`text-white font-medium pl-10 pr-3 ${isCollapsed ? "hidden" : "block"}`}>Dashboard</p>
                            </div>
                            }
                        </NavLink>
                            <NavLink 
                                to="admin/maintenance"
                                className={({ isActive }) =>
                                    `relative  rounded-lg duration-500 ease-in-out 
                                    ${isActive ? "bg-[#ffffff1a] text-white" : "hover:text-white hover:bg-[#ffffff1a]"}`
                                }
                            >
                            {isCollapsed ? 
                                <div className="hover:text-white rounded-lg duration-500 ease-in-out mt-2 pt-3 pb-3 pl-3">
                                    <FaTools className="absolute top-2 left-3 text-lg text-white"/>
                                    <p className={`font-medium pl-12 ${isCollapsed ? "hidden" : "block"}`}>{`Todos os Produtos`}</p>
                                </div>
                                :
                            <div className="hover:text-white rounded-lg duration-500 ease-in-out pt-2.5 pb-2.5 pl-3">
                                <FaTools className="absolute top-3.5 left-4 text-lg text-white"/>
                                <p className={`text-white font-medium pl-10 pr-3 ${isCollapsed ? "hidden" : "block"}`}>Manutenções</p>
                            </div>
                            }
                        </NavLink>
                        <NavLink 
                            to="admin/active"
                            className={({ isActive }) =>
                                `relative  rounded-lg duration-500 ease-in-out 
                                ${isActive ? "bg-[#ffffff1a] text-white" : "hover:text-white hover:bg-[#ffffff1a]"}`
                            }
                            >
                            {isCollapsed ? 
                                <div className="hover:text-white rounded-lg duration-500 ease-in-out mt-2 pt-3 pb-3 pl-3">
                                    <FaRegCalendarCheck className="absolute top-1.5 left-3 text-lg text-white"/>
                                    <p className={`font-medium pl-12 ${isCollapsed ? "hidden" : "block"}`}>{`Todos os Produtos`}</p>
                                </div>
                                :
                            <div className="hover:text-whtie rounded-lg duration-500 ease-in-out  pt-2.5 pb-2.5 pl-3">
                                <FaRegCalendarCheck className="absolute top-2.5 left-3 text-lg text-white"/>
                                <p className={`text-white font-medium pl-10 pr-3 ${isCollapsed ? "hidden" : "block"}`}>Ativas</p>
                            </div>
                            }
                        </NavLink>
                        <NavLink 
                            to="admin/finished"
                            className={({ isActive }) =>
                                `relative  rounded-lg duration-500 ease-in-out 
                                ${isActive ? "bg-[#ffffff1a] text-white" : "hover:text-white hover:bg-[#ffffff1a]"}`
                            }
                            >
                            {isCollapsed ? 
                                <div className="hover:text-white rounded-lg duration-500 ease-in-out mt-2 pt-3 pb-3 pl-3">
                                    <RiFolderCloseFill className="absolute top-1.5 left-3 text-lg text-white"/>
                                    <p className={`font-medium pl-12 ${isCollapsed ? "hidden" : "block"}`}>{`Todos os Produtos`}</p>
                                </div>
                                :
                            <div className="hover:text-white rounded-lg duration-500 ease-in-out  pt-2.5 pb-2.5 pl-3">
                                <RiFolderCloseFill className="absolute top-3 left-3 text-lg text-white"/>
                                <p className={`text-white font-medium pl-10 pr-3 ${isCollapsed ? "hidden" : "block"}`}>Finalizadas</p>
                            </div>
                            }
                        </NavLink>
                    </div>
                    <button className="text-white" onClick={() => logoutUser()}>
                        {
                        isCollapsed ? 
                        <div className="flex gap-5 mb-8 hover:text-white rounded-lg duration-500 ease-in-out cursor-pointer pt-2.5 pb-2.5 pl-2 items-center">
                            <p className="font-white text-lg"><PiSignOutBold /></p>
                            {!isCollapsed && <p>Sair</p>}
                        </div>
                                                        : 
                        <div className="flex gap-5 mb-8 hover:bg-[#ffffff1a] rounded-lg duration-500 ease-in-out cursor-pointer pt-2.5 pb-2.5 pl-2 items-center">
                            <p className="font-white text-lg"><PiSignOutBold className="text-white"/></p>
                            {!isCollapsed && <p className="text-white">Sair</p>}
                        </div>
                        }
                    </button>
                </nav>
            </main>
        </div>
    )
}