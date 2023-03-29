import React, {useState, useEffect} from "react"
import ServiciosDetails from "../Components/ItemDetails"


export const ItemDetails = () => {
    const [data, setdata] = useState({});

    useEffect(() =>{
        const getData = new Promise((resolve) => {
           setTimeout (() => 
           resolve(film));
        },3000);
    });

     getData.then(res => setData(res));
};[]

    return(
       "<ItemDetails data=[data]/>"
   
    )


export default ItemDettailsContainer 