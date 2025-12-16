import { Link } from "react-router"
export function Notfound(){
    return(
        <div className="max-w-screen min-h-screen bg-black flex items-center justify-center">
            <div className="flex items-center justify-center flex-col">
                <div className="flex gap-3">
                    <h1 className="text-[#3b0eb642] font-bold text-9xl">4</h1>
                    <div className="relative w-30 h-30 flex items-center justify-center">
                    <div
                        className="absolute inset-0 rounded-full bg-linear-to-r from-purple-800 via-purple-800 to-purple-800 blur-2xl opacity-70">
                    </div>
                    <div className="relative w-30 h-30 rounded-full bg-black"></div>
                    </div>
                    <h1 className="text-[#3b0eb642] font-bold text-9xl">4</h1>
                </div>
                <p className="text-gray-400 mt-8">Essa página não existe. <Link to={"/"}> <span className="font-bold text-[#4400ff85] hover:text-[#430addc0] duration-300">Volte para a página inicial.</span></Link></p>
            </div>
        </div>
    )
}