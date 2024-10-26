import MyPortfolioCard from "../MyPortfolioCard/MyPortfolioCard";
import MyPortfolioHeading from "../MyPortfolioHeading/MyPortfolioHeading";

export default function MyPortfolio(){
    return(
        <>
        <MyPortfolioHeading/>

       <div className="flex justify-around">
       <MyPortfolioCard 
        h1="Ahuse"/>

        <MyPortfolioCard 
        h1="App Dashboard"/>

        <MyPortfolioCard 
        h1="Easy Rent"/>
       </div>


        </>
    )
}