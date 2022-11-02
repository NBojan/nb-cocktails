import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import useFetch from "../useFetch";
import Loading from "./Loading";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

const SingleCocktail = () => {
    const {id} = useParams();
    const {data,loading} = useFetch(`${url}${id}`);
    const [singleCocktail, setSingleCocktail] = useState(null);

    useEffect(() => {
        if(data.drinks){
            const {strDrink, strDrinkThumb, strGlass, strAlcoholic, strCategory, strInstructions,
            strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5} = data.drinks[0];

            const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];

            setSingleCocktail({name: strDrink, image: strDrinkThumb, glass: strGlass, info: strAlcoholic, category: strCategory,
            instructions: strInstructions, ingredients});
        } else {
            setSingleCocktail(null);
        }
    }, [data])


    if(loading){
        return <Loading />;
    }
    if(!singleCocktail){
        return (
            <div className="d-flex justify-center flex-column align-center">
                <h3 className="title">This cocktail is missing</h3>
                <Link to="/" className="btn btn-primary">Go Back</Link>
            </div>
        )
    }
    const {name, image, category, info, glass, instructions, ingredients} = singleCocktail;
    if(singleCocktail){
        return (
            <section className="containerBoot singleCocktail m-auto">
                <div className="d-flex justify-center align-center flex-column">
                    <Link to="/" className="btn btn-primary">Back Home</Link>
                    <h3 className="title">{name}</h3>
                </div>

                <div className="item">
                    <div className="singleImage d-flex">
                        <img src={image} alt={name} />
                    </div>
                    <div className="singleInfo">
                        <p><span className="spanBtn">Name :</span>{name}</p>
                        <p><span className="spanBtn">Category :</span>{category}</p>
                        <p><span className="spanBtn">Info :</span>{info}</p>
                        <p><span className="spanBtn">Glass :</span>{glass}</p>
                        <p><span className="spanBtn">Instructions :</span>{instructions}</p>
                        <p>
                            <span className="spanBtn">Ingredients :</span>
                            {ingredients.map((item, index) => item ? <span key={index}>{item}, </span> : null)}
                        </p>
                    </div>
                </div>
            </section>
        )
    }
}
 
export default SingleCocktail;