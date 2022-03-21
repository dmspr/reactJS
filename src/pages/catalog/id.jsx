import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

export default function CatalogById() {


    const params = useParams();
    const [data, setData] = useState();

    const getData = async () => {
        await axios.get(`http://localhost:8080/products/${params.id}`)
            .then((res) => {
                setData(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {

        getData()
    }, [])

    return (
        <>
            catalogbyid: {params.id}
            <div>
                name : {data.category}
                <br />
                price : Rp. {data.price}

            </div>
        </>
    )
}