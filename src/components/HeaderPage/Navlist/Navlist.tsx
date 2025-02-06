import Link from "next/link";

export default function Navlist(){
    return(
        <>
        <ul className="flex gap-6 pt-2">
           <li className=" hover:text-[#5E3BEE]"><Link href={"/"}>Home</Link></li> 
           <li className=" hover:text-[#5E3BEE]"><Link href={"/project"}>Project</Link></li>
           <li className=" hover:text-[#5E3BEE]"><Link href={"/about"}>About me</Link></li>
           <li className=" hover:text-[#5E3BEE]"><Link href={"/testimonials"}>Testimonials</Link></li>
        </ul>
        </>
    )
}