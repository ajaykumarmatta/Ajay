import { useContext  } from "react";
import { ProductContext } from ".";

const ChildThree = () =>{
    const product = useContext(ProductContext);
    return(
        <>
            <h1>I am Child three component</h1>
            <div>{product.name}</div>
            <div>{product.desc}</div>
            <div>{product.price}</div>
        </>
    )
}

export default ChildThree;