import CustomerCard from "../CustomerCard/CustomerCard";
import Heading from "../Heading/Heading";

export default function CustomerTestimonials(){
    return(
        <>
        <div className="">
        <Heading/>
        
        {/* card */}
        <div className="flex justify-around pt-[40px] ">

        <CustomerCard 
        imgUrl="/images/Constomer/Avatar Image.png"
        name="Dianne Russell"
        p="Starbucks"
        />

        <CustomerCard 
        imgUrl="/images/Constomer/Avatar Image (1).png"
        name="Kristin Watson"
        p="Louis Vuitton"
        />

        <CustomerCard 
        imgUrl="/images/Constomer/Avatar Image (2).png"
        name="Kathryn Murphy"
        p="McDonald's"
        />
        </div>
        

        
        </div>
        </>
    )
}