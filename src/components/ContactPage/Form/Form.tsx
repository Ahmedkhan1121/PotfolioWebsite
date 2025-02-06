export default function Form(){
    return(
        <>
        <form action="" className="flex flex-col items-center py-4" >
        
        {/* name&lastname */}
        <div className="flex  gap-5">
            <div className="flex flex-col">
                <label className="pb-2" htmlFor="First name">First name</label>
                <input className="w-[300px] outline-none border-[#613cf8] border-[1px] rounded-md pt-2  hover:border-[#613cf8]e hovr:border-[2px]" type="text" />
            </div>
            <div className="flex flex-col">
            <label className="pb-2" htmlFor="Last name">Last name</label>
            <input className="w-[300px] outline-none border-[#613cf8] border-[1px] rounded-md pt-2  hover:border-[#613cf8]e hovr:border-[2px]" type="text" />
            </div>
        </div>

        {/* Email&ohoneNumber */}
        <div className="flex gap-5">
            <div className="flex flex-col">
                <label className="pb-2" htmlFor="Eamil">Email</label>
                <input className="outline-none border-[#613cf8] border-[1px] rounded-md pt-2 w-[300px] hover:border-[#613cf8]e hovr:border-[2px]" type="Email" />
            </div>
            <div className="flex flex-col">
            <label className="pb-2" htmlFor="">Phone number</label>
            <input className="outline-none border-[#613cf8] border-[1px] rounded-md pt-2  hover:border-[#613cf8]e hovr:border-[2px] w-[300px]" type="Phone number" />
            </div>
        </div>
        {/* choose the topic */}
        <div  >
            <div className="flex flex-col ">
            <label className="pt-2 pb-2" htmlFor="choose the topic">choose the topic</label>
            <select className="outline-none border-[#613cf8] border-[1px] rounded-md w-[620px] pt-3 " name="" id="select"> 
                <option value="select one..."  >select one...</option>
                <option value="BlockChain">BlockChain</option>
                <option value="Ai">Ai</option>
                <option value="python">python</option>
            </select>
            </div>
        </div>
        {/* Message */}
        <div>
             <div className="flex flex-col ">
            <label className=" pt-2 pb-2" htmlFor="choose the topic">Message</label>
            <textarea className="outline-none border-[#613cf8] border-[1px] rounded-md w-[620px] pt-2"  name="" id="" rows={5} placeholder="Type your Message..."></textarea>
            </div>
        </div>
        {/* I accept the terms */}
        
        <div className="relative -left-56 pt-4">
            <div >
                <input type="checkbox"  id="checkbox"/>
                <label  className=" pl-2"  htmlFor="checkbox">I accept the terms</label>
            </div>
        </div>

        
            <button className=" mb-3 py-3 px-6 bg-[#5E3BEE] rounded-md mt-2 text-white ">Submit</button>
        
        
        
        </form>
        

        </>


    )
}