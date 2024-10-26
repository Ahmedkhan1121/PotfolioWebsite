import Link from "next/link";

export default function Herocontent(){
    return(
        <>
        <div className="ml-[60px]">
        <h5>Hey, I am Ahmed Raza</h5>
        <h1 className="text-4xl mt-2 font-bold  ">I create  <span className="text-[#5E3BEE]">product design</span>  and brand experience</h1>
        <p className="mt-2 font-medium w-[440px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
        <button className="p-3 bg-[#5E3BEE] rounded-md mt-2 text-white " ><Link href={""}>Get In Touch</Link></button>
        </div>
        </>
    )
}