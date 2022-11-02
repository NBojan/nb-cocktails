import { Link } from "react-router-dom";

const Error = () => {
    return (  
        <div className="d-flex flex-column justify-center align-center">
            <h2 className="title">404 Not Found</h2>
            <Link to="/" className="btn btn-primary">Back Home</Link>
        </div>
    );
}
 
export default Error;