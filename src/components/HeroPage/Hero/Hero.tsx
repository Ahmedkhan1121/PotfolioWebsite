
import Herocontent from "../Herocontent/Herocontent";
import Heroimg from "../Heroimg/Heroimg";

export default function Hero(){
    return(
        <>
        <div id="Hero" className=" flex justify-between bg-[#F5FCFF] items-center h-[100vh]">
        <Herocontent/>
        <Heroimg/>
        </div>
        </>
    )
}