export default function MyPortfolioCard(props:{h1:string}){
    return(
        <>
   
     <div className=" mt-[70px] mb-[84px]  w-[300px] shadow-lg">
            <img className="" src="/images/potfolioimg/Image.png" alt="" />
            <h1 className="pl4 pt-5 pb-3 text-2xl font-bold text-[#282938] ">{props.h1}</h1>
            <p className="ple pb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.</p>
            <div className="pt-2 pb-4 flex relative ">
            <button >View In Dribbble</button>
            <img className="h-[40%] absolute right-36 pr-2 " src="/images/potfolioimg/Vector.png" alt="" />
            </div>
        </div>
     
        </>
    )
}