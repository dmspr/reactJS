import { Container, SimpleGrid } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import Product from "./ProductList/product";
import axios from "axios";


const ProductList = () => {


    const [data, setData] = useState([])

    const getData = async () => {
        await axios.get('http://localhost:8080/products')
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        getData()
    }, [])
    return (
        <Container maxW="container.xl" mx="auto" my="4">
            <SimpleGrid columns={4} spacing={4}>

                {data.map((v) => (
                    <Product meta={v} key={v.id} />
                ))}

            </SimpleGrid>
        </Container>
    );
};

export default ProductList;