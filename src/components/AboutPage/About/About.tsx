import AboutContent from "../AboutContent/AboutContent";
import AboutImg from "../AboutImg/AboutImg";

export default function About(){
    return(
        <>


        <div className="  flex justify-around pt-[100px]">
            <AboutImg/>
        <AboutContent/>
        </div>
        </>
    )
}