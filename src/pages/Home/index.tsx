import { Link } from "react-router"
import { HeaderHome } from "../../components/HeaderHome"
import bgPrevsystem from "../../assets/background-prevsystem.png"
import activePrevsystem from "../../assets/active-prevsystem.png"
import finishedPrevsystem from "../../assets/finished-prevsystem.png"
import { MdOutlineDashboard } from "react-icons/md";
import { FooterHome } from "../../components/FooterHome";
import { useEffect } from "react";
import { FaTools } from "react-icons/fa";
import { RiFolderCloseFill } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa";
import "aos/dist/aos.css";
import AOS from "aos";

export function Home(){
    useEffect(() => {
    AOS.init({
        duration: 800,
        once: true,
        offset: 50
    })
},[])
    return(
        <div className="max-w-screen w-full min-h-screen bg-black">
            <header className="flex items-center justify-center"  data-aos="fade-up" data-aos-duration="2000">
                <HeaderHome/>
            </header>
            <section className="max-w-screen flex flex-col items-center justify-center mb-50">
                <div className="max-w-4xl flex flex-col items-center justify-center mt-15" data-aos="fade-up" data-aos-duration="2200">
                    <p className="text-sm text-[#3a0eb6] mb-7">ORGANIZE SEUS SERVIÇOES DE MANUTENÇÃO</p>
                    <h2 className="text-white font-bold text-5xl mb-7 text-center">Organize, acompanhe e <br/> finalize manutenções sem complicações</h2>
                    <p className="text-gray-500 text-center mb-10">Gerencie manutenções técnicas em um só lugar. Acompanhe prazos, <br/> valores, status, clientes e controle seus serviço de forma prática e organizada.</p>
                    <Link to={"signup"}>
                        <button className="text-sm bg-[#3a0eb6] pt-4 pb-4 pl-6 pr-6 font-medium text-black cursor-pointer rounded-sm hover:scale-105 border hover:border-[#3a0eb6] hover:border-solid hover:text-[#3a0eb6] hover:bg-black duration-300 ease-in-out">Começar Grátis</button>
                    </Link>
                </div>
                <div data-aos="fade-up" data-aos-duration="2400" id="app">
                    <img src={bgPrevsystem} alt="Background PrevSystem" className="mt-25 max-w-4xl w-full block rounded-2xl"/>
                </div>
            </section>
            <section className="max-w-screen flex items-center justify-center gap-15 mb-50 flex-wrap" id="about">
                <div className="max-w-lg mt-15">
                    <h2 className="text-white text-4xl font-bold" data-aos="fade-right" data-aos-duration="2000">Um click <br/> de distância</h2>
                    <p className="text-gray-500 mt-5" data-aos="fade-right" data-aos-duration="2100">Cadastre e acompanhe suas manutenções em poucos cliques. Tenha todas as informações importantes sempre à mão.</p>
                    <ul className="mt-6 flex flex-col gap-3" >
                        <li className="text-white font-bold" data-aos="fade-right" data-aos-duration="2300"><span className="text-[#3a0eb6]">✔</span> Cadastro ágil</li>
                        <li className="text-white font-bold" data-aos="fade-right" data-aos-duration="2500"><span className="text-[#3a0eb6]">✔</span> Detalhes completos da manutenção</li>
                        <li className="text-white font-bold" data-aos="fade-right" data-aos-duration="2700"><span className="text-[#3a0eb6]">✔</span> Informações seguras</li>
                        <li className="text-white font-bold" data-aos="fade-right" data-aos-duration="3000"><span className="text-[#3a0eb6]">✔</span> Serviços organizados</li>
                    </ul>
                </div>
                <div className="mt-15" data-aos="fade-left" data-aos-duration="2400">
                    <img src={activePrevsystem} alt="Active Background" className="max-w-lg w-full rounded-2xl"/>
                </div>
            </section>
            <section className="max-w-screen flex items-center justify-center gap-15 mb-50 flex-wrap">
                <div className="mt-15" data-aos="fade-right" data-aos-duration="2400">
                    <img src={finishedPrevsystem} alt="Finished Bakcground" className="max-w-lg w-full rounded-2xl"/>
                </div>
                <div className="max-w-lg mt-15">
                    <h2 className="text-white text-4xl font-bold" data-aos="fade-left" data-aos-duration="2000">Controle<br/>simples e eficiente</h2>
                    <p className="text-gray-500 mt-5" data-aos="fade-left" data-aos-duration="2100">Visualize rapidamente quais manutenções estão ativas ou finalizadas e evite perder prazos importantes.</p>
                    <ul className="mt-6 flex flex-col gap-3" >
                        <li className="text-white font-bold" data-aos="fade-left" data-aos-duration="2300"><span className="text-[#3a0eb6]">✔</span> Status em tempo real</li>
                        <li className="text-white font-bold" data-aos="fade-left" data-aos-duration="2500"><span className="text-[#3a0eb6]">✔</span> Controle de prazos</li>
                        <li className="text-white font-bold" data-aos="fade-left" data-aos-duration="2700"><span className="text-[#3a0eb6]">✔</span> Histórico de serviços</li>
                        <li className="text-white font-bold" data-aos="fade-left" data-aos-duration="3000"><span className="text-[#3a0eb6]">✔</span> Gestão simplificada</li>
                    </ul>
                </div>
            </section>
            <section className="max-w-screen flex items-center justify-center" id="proposal">
                <div className="flex flex-col items-center justify-center max-w-4xl">
                    <div className="max-w-4xl flex items-center flex-col">
                        <h2 className="text-white text-4xl text-center font-bold" data-aos="fade-up" data-aos-duration="3000">Objetivo da Plataforma?</h2>
                        <p className="text-gray-500 mt-5 text-center leading-7" data-aos="fade-up" data-aos-duration="2800">A plataforma foi criada para ajudar microempreendedores e profissionais de manutenção técnica a organizarem e controlarem seus serviços em um único lugar. Com ela, é possível registrar manutenções, acompanhar prazos, gerenciar valores, identificar serviços ativos ou finalizados e manter um histórico completo de cada atendimento.</p>
                    </div>
                    <div className="flex flex-wrap mt-15 items-center justify-center gap-9">
                        <div data-aos="zoom-in" data-aos-duration="2700">
                            <div className="max-w-sm bg-black rounded-lg p-10 h-70 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                                <div className="bg-[#000000] border border-solid border-[#3a0eb6] w-13 h-13 flex items-center justify-center rounded-lg">
                                    <MdOutlineDashboard className="text-4xl text-[#3a0eb6]"/>
                                </div>
                                <p className="font-bold text-lg mt-5 text-white">Dashboard</p>
                                <p className="mt-5 text-gray-400">Visão geral do sistema com resumo de serviços, manutenções ativas e finalizadas, além de acesso rápido aos principais dados.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="2500">
                            <div className="max-w-sm bg-black rounded-lg p-10 h-70 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                                <div className="bg-[#000000] border border-solid border-[#3a0eb6] w-13 h-13 flex items-center justify-center rounded-lg">
                                    <FaTools className="text-3xl text-[#3a0eb6]"/>
                                </div>
                                <p className="font-bold text-lg mt-5 text-white">Manutenções</p>
                                <p className="mt-5 text-gray-400">Registre e gerencie manutenções com informações completas, como equipamento, cliente, valores, prazos e tipo de serviço.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="2300">
                            <div className="max-w-sm bg-black rounded-lg p-10 h-70 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                                <div className="bg-[#000000] border border-solid border-[#3a0eb6] w-13 h-13 flex items-center justify-center rounded-lg">
                                    <FaRegCalendarCheck className="text-4xl text-[#3a0eb6]"/>
                                </div>
                                <p className="font-bold text-lg mt-5 text-white">Ativas</p>
                                <p className="mt-5 text-gray-400">Acompanhe todas as manutenções em andamento, visualize prazos e mantenha o controle dos serviços ativos.</p>
                            </div>
                        </div>
                        <div data-aos="zoom-in" data-aos-duration="2100">
                            <div className="max-w-sm bg-black rounded-lg p-10 h-70 hover:scale-105 duration-300 ease-in-out border border-solid border-gray-400/20 hover:border-[#3a0eb6]">
                                <div className="bg-[#000000] border border-solid border-[#3a0eb6] w-13 h-13 flex items-center justify-center rounded-lg">
                                    <RiFolderCloseFill className="text-4xl text-[#3a0eb6]"/>
                                </div>
                                <p className="font-bold text-lg mt-5 text-white">Finalizadas</p>
                                <p className="mt-5 text-gray-400">Consulte somente as manutenções finalizadas e acompanhe o histórico de acesso aos serviços já concluídos.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <FooterHome/>
        </div>
    )
}