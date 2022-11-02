import { Link } from "react-router-dom";

const Cocktail = ({id, name, glass, alcoholic, image}) => {
    return (  
        <li key={id}>
            <img src={image} alt={name} />

            <div className="info">
                <h3>{name}</h3>
                <h4>{glass}</h4>
                <p className="category mb-8">{alcoholic}</p>
                <Link to={`/cocktails/${id}`} className="btn btn-primary">Details</Link>
            </div>
        </li>
    );
}
 
export default Cocktail;