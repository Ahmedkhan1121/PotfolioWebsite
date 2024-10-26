import { ImGift } from "react-icons/im";

export default function MySkillCard(props:{img:string, h1:string ,p:string}){
    return(
        <>
        <div className="flex-col  mt-[50px] w-[260px] border-spacing-10 bg-[#F5FCFF]">
        <img className="h-[100px]" src={props.img} alt="" />  
        <h1 className=" pl-5 pt-3 pb-3 pr-[5px] text-2xl font-bold " >{props.h1 }</h1> 
        <p className="pl-5 pt-3 pb-3 pr-[5px]">{props.p}</p>
        </div>
        </>
    )
}