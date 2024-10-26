export default function MyPortfolioHeading(){
    return(
        <>
        <div className="  flex justify-between pt-[50px]">

        <div className="  pl-[75px] pt-3">
            <h5 className="pb-[4px]">Recent Projects</h5>
            <h1 className="text-4xl font-bold">My Portfolio</h1>
        </div>

        <div className="pt-5 relative pr-[50px] ">
            <img className="absolute pt-3 pl-3 h-[50%] " src="/images/potfolioimg/Vector (5).png" alt="" />
            <button className=" p-3 pl-12 text-white bg-[#E62872] border-[#E62872] rounded-md ">Visit My Dribbble</button>
        </div>

        </div>
        </>
    )
}