import Link from "next/link";

export default function HeaderButtton(){
    return(
        <>
        <button className=" p-2 border-2 text-[#5E3BEE] border-[#5E3BEE] rounded-md hover:text-white  hover:bg-[#5E3BEE]"><Link href={""}>Contact Me</Link></button>
        </>
    )
}