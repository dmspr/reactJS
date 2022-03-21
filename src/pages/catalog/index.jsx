import React from 'react'
import Header from '../../component/header'
import Navbar from '../../component/navbar'
import ProductList from '../../component/ProductList'
import Result from '../../component/result'




export default function Catalog() {


    return (
        <div>
            <Header />
            <Navbar />
            <Result />
            <ProductList />
        </div>
    )
}