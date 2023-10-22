import Link from "next/link"
import InputSearch from "./InputSearch"

const Navbar=()=>{
    return (
        <header className="bg-indigo-500">
            <div className="flex md:flex-row flex-col gap-2 justify-between p-4">
                <Link href='/' className="font-bold text-2xl text-white">CuyAnimeList</Link>
                <InputSearch />
            </div>
        </header>
    )
}
export default Navbar