import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore} from "Firebase/Firestore";

const ItemListContainer = () => {
 
const[mediacion, setMediacion]  =  useState([]);
const{category}  = useParams();
console.log(category)

useEffect (() => {
const db = getFirestore ();
const mediacionCollection = collection(db, "mediacion");
getDocs(mediacionCollection).then((querySnapshot) =>{
const mediacion = querySnapshot.doc.map ((doc) => ({
...doc.data(),
id: doc.id, 
}));
 setMediacion(mediacion);
});
},[]);

const catFilter = mediacion.filter((mediacion) => mediacion.category === category);

return(
<div>
{category ? <ItemList mediacion={catFilter}/> : <ItemList mediacion={mediacion}/>}
</div>
)
}

export default ItemListContainer;
