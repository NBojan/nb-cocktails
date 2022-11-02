import CocktailList from "./components/CocktailList";
import SearchForm from "./components/SearchForm";

const Home = () => {
    return (  
        <section className="home containerBoot m-auto">
            <SearchForm />
            <CocktailList />
        </section>
    );
}
 
export default Home;