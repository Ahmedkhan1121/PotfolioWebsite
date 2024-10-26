import Logo from "@/components/HeaderPage/Logo/Logo";
import Navlist from "@/components/HeaderPage/Navlist/Navlist";
import Icons from "../Icons/Icons";



export default function Footer(){
    return(
        <>
        <div className="flex justify-around align-middle bg-[#F5FCFF] py-[69px]">
            <div><Logo/></div>
            <div><Navlist/></div>
            <div><Icons/></div>
        </div>

        <div><hr className="border-[#282938]"/></div>

        <div className="flex justify-between  px-[105px] pt-[50px] pb-[82px] bg-[#F5FCFF]">
        <div className="">
            <h5>Made with 💖 by Airdokan</h5>
        </div>
        <ul className="flex  gap-5">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookies Settings</li>
        </ul>
        </div>
        </>
    )
}