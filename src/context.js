import React, { useContext, useEffect, useState } from "react";
import useFetch from "./useFetch";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [searchTerm, setSearchTerm] = useState("a");
    const {data, loading} = useFetch(`${url}${searchTerm}`);
    const [cocktails, setCocktails] = useState([]);

    useEffect(() => {
        if(data.drinks){
            const tmpArr = data.drinks.map(item => {
                const {idDrink, strDrink, strDrinkThumb, strGlass, strAlcoholic} = item;
                return {id: idDrink, name: strDrink, image: strDrinkThumb, glass:strGlass, alcoholic: strAlcoholic};
            })
            setCocktails(tmpArr);
        } else {
            setCocktails([]);
        }
    }, [data])


    return (
        <AppContext.Provider value={{cocktails, loading, setSearchTerm}}>{children}</AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext); 

export {AppProvider}