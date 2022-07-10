import { useState,useEffect } from "react";
import Footer from "../Layout/Footer";
import Header from "../Layout/Header";
import Slider from "../Layout/Slider";
import ProductList from "../Products/ProductList";

const Mobiles = () => {
    const [heading,setHeading] = useState("");
    const [albums,setAlbumns] = useState([]);

    useEffect(()=>{
        setHeading('Popular Mobiles');
          fetch("https://jsonplaceholder.typicode.com/albums")
            .then((res) => res.json())
            .then(data => {
               setAlbumns(data);
               console.log(albums);
            });

            //side effects of our component can be cleared inside return() method,This method works similar like componentWillUnMount()
            return () =>{
                //alll the side effect we must clear here
            }
    },[]);

    return(
        <>
            <ProductList />
        </>
    )
}

export default Mobiles;