import AboutPage from "@/components/AboutPage/AboutPage";
import ContactPage from "@/components/ContactPage/ContactPage";
import CustomerTestimonialsPage from "@/components/CustomerTestimonialsPage/CustomerTestimonialsPage";
import HeroPage from "@/components/HeroPage/HeroPage";
import MyPortfoliopage from "@/components/MyPortfoliopage/MyPortfoliopage";
import MySkillpage from "@/components/MyskillPage/MyskillPage";




export default function Home() {
  return (
   <>
    <main className="">
      {/* Hero */}
      <section id="Hero">
        <HeroPage/>
      </section>

      {/* myskill */}
      <section className="pt-[100px] pb-[100px] pl-[70px]">
      <MySkillpage/>
      </section>
    
    {/* {my About} */}
    <section>
      <AboutPage/>
    </section>

    {/* myMyPortfolio */}
    <section>
      <MyPortfoliopage/>
    </section>

    {/* CustomerTestimonialsPage */}
    <section>
    <CustomerTestimonialsPage/>
    </section>

    {/* contact me */}
    <section>
      <ContactPage/>
    </section>

    </main>
   </>
  );
}
