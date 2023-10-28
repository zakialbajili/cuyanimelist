"use client"
import { FileSearch } from "@phosphor-icons/react"
import Link from "next/link"

const Page = () => {
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center flex-col">
                <FileSearch size={44} className="text-color-accent"/>
                <div className="text-color-accent text-4xl gap-4">NOT FOUND</div>
                <Link href="/" className="text-color-primary hover:text-color-accent transition-all underline gap-4">Kembali Ke Halaman Awal</Link>
            </div>
        </div>
    )
}
export default Page