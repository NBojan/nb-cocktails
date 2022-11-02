import { useGlobalContext } from "../context";
import Loading from "./Loading";
import Cocktail from "./Cocktail";

const CocktailList = () => {
    const {cocktails, loading} = useGlobalContext();

    if(loading){
        return <Loading />
    }
    return (  
        <div className="cocktailContainer">
            {cocktails.length === 0 && <h3 className="ta-center">No Cocktails Matched Your Search Criteria</h3>}

            {cocktails.length > 0 && <>
                <h2 className="title">Cocktails</h2>
                
                <ul className="no-style d-flex align-center space-between flex-wrap cocktailList">
                    {cocktails.map(item => <Cocktail key={item.id} {...item}/>)}
                </ul>
            </>}
        </div>
    );
}
 
export default CocktailList;