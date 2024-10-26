import MySkillCard from "../MySkillCard/MySkillCard";
import MySkillHeading from "../MySkillHa/MySkillHeading";

export default function MySkill(){
    return(
        <>
   <div >

   <MySkillHeading/>

    <div className="flex gap-12">

    <MySkillCard
     img="/images/skillimg/Strategy___Direction-removebg-preview.png" 
    h1="Strategy & Direction"
     p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."/>

     <MySkillCard
        img="/images/skillimg/Branding___Logo-removebg-preview.png"
        h1="Branding & Logo"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
     />
       <MySkillCard
        img="/images/skillimg/UI___UX_Design__1_-removebg-preview.png"
        h1="UI & UX Design"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
     />

<MySkillCard
        img="/images/skillimg/Webflow_Development__1_-removebg-preview.png"
        h1="Webflow Development"
        p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique."
     />

     </div>
   </div>
     </>
    )
}  