import { BsTools } from "react-icons/bs";
import { Link } from "react-router";
export function HeaderHome(){
function scrollToSection(id: string){
    const element = document.getElementById(id)
    if (element) element.scrollIntoView({behavior: "smooth"})
}    
    return(
        <div className="hidden max-w-6xl w-full lg:block md:block">
            <div className="bg-black rounded-lg mt-8 min-h-17 flex justify-between items-center pl-7 pr-7">
                <Link to={"/"} className="flex items-center gap-3">
                    <BsTools className="text-white"/>
                    <h1 className="font-bold text-lg text-white">PrevSystem</h1>
                </Link>
                <nav className="flex gap-7">
                    <button className="text-sm hover:bg-[#3a0eb6] text-white pt-2 pb-2 pl-3 pr-3 duration-300 ease-in-out rounded-sm cursor-pointer" onClick={() => scrollToSection("about")}>Sobre</button>
                    <button className="text-sm hover:bg-[#3a0eb6] text-white pt-2 pb-2 pl-3 pr-3 duration-300 ease-in-out rounded-sm cursor-pointer" onClick={() => scrollToSection("app")}>App</button>
                    <button className="text-sm hover:bg-[#3a0eb6] text-white pt-2 pb-2 pl-3 pr-3 duration-300 ease-in-out rounded-sm cursor-pointer" onClick={() => scrollToSection("proposal")}>Proposta</button>
                </nav>
                <div className="flex gap-7">
                    <Link to={"/login"}><button className="text-sm cursor-pointer text-white hover:bg-[#c7c2c262] duration-300 ease-in-out rounded-sm pt-2 pb-2 pl-3 pr-3">Entrar</button></Link>
                    <Link to={"/signup"}><button className="text-sm cursor-pointer bg-white hover:bg-[#3a0eb6] hover:text-white duration-300 ease-in-out rounded-sm text-black pt-2 pb-2 pl-3 pr-3">Criar conta</button></Link>
                </div>
            </div>
        </div>
    )
}