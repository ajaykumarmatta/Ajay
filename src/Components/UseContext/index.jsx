import { useState,createContext } from "react"
import Childone from "./ChildOne"
import Childthree from "./ChildThree"
import Childtwo from "./ChildTwo"

//creat context
export const ProductContext = createContext();
const Parent = () =>{
    const [product,setProduct] = useState({name:"Mac Book Air",desc:"Dummy data",price:234567});
    return(
        <>
            <ProductContext.Provider value={product}>
                <h1>I am parent Component</h1>
                <Childone />
                <Childtwo />
                <Childthree />
            </ProductContext.Provider>
        </>
    )
}

export default Parent;