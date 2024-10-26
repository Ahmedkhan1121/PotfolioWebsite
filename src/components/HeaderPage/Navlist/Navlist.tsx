import Link from "next/link";

export default function Navlist(){
    return(
        <>
        <ul className="flex gap-6 pt-2">
           <li className=" hover:text-[#5E3BEE]"><Link href={""}>Home</Link></li> 
           <li className=" hover:text-[#5E3BEE]"><Link href={""}>Portfolio</Link></li>
           <li className=" hover:text-[#5E3BEE]"><Link href={""}></Link>About me</li>
           <li className=" hover:text-[#5E3BEE]"><Link href={""}></Link>Testimonials</li>
        </ul>
        </>
    )
}