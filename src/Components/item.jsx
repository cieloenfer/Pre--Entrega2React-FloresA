import { Card, CardBody, Center } from "@chakra-ui/react";
import {Link } from "react-router-dom";

const item = (id, name, stock, category,image) =>{
    return(
        <div>
        <div key={id}/>
        <Center p="1rem"/>
        <Card className="card-main"/>
        <CardBody/>
        <image borderRadius="ig" src={image}/>
        </div>
    )

}