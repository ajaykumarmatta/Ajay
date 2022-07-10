import { useContext  } from "react";
import { ProductContext } from ".";

const SubChild = () =>{
    const product = useContext(ProductContext);
    return(
        <>
            <div>{product.name}</div>
            <div>{product.desc}</div>
            <div>{product.price}</div>
        </>
    )
}

export default SubChild;