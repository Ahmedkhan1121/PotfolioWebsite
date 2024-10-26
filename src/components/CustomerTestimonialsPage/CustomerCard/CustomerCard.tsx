export default function CustomerCard(props:{ imgUrl:string ,name:string,p:string}){
    return(
        <>
        <div className="pt-[25px] pl-[30px] w-[354px] h-[40%] border-[#006B6A] border-2 " >
            <div className="flex justify-evenly h-[18px] w-[100px]">
            <img src="/images/stars/Vector__5_-removebg-preview.png" alt="stars" />
            <img src="/images/stars/Vector__5_-removebg-preview.png" alt="stars" />
            <img src="/images/stars/Vector__5_-removebg-preview.png" alt="stars" />
            <img src="/images/stars/Vector__5_-removebg-preview.png" alt="stars" />
            <img src="/images/stars/Vector__5_-removebg-preview.png" alt="stars" />

            </div>
            <p className="pt-[25px] pb-[30px]">"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra.</p>
            
            <div className="flex pb-[6px] ">
                <img className="h-[50px]" src={props.imgUrl} alt="img" />
               <div className="pt-[8px] pl-[10px]">
               <h5 className="font-bold">{props.name}</h5>
               <p className="pb-[5px]">{props.p}</p>
               </div>

            </div>
            

        </div>
        </>
    )
}