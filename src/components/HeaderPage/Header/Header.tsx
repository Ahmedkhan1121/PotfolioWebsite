
import HeaderButtton from "../HeaderButtton/HeaderButtton";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";



export default function Header(){
    return(
        <>
    <div className="flex justify-around p-4">
    <Logo/>
    <Navbar/>
    <HeaderButtton/>

    </div>
        </>
    )
}