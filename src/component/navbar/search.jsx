import { InputGroup, Input } from "@chakra-ui/react"
import React, { useState } from "react"
import { useDispatch } from 'react-redux'
import { search } from "../../lib/redux/productSlice"


const Search = () => {
    const [keyword, setKeyword] = useState('')
    const dispatch = useDispatch()


    const handleChange = (e) => {
        setKeyword(e.target.value);
        dispatch(search(e.target.value))

    };


    return (
        <InputGroup w="200%">
            <Input type="text" bg="white" onChange={handleChange} value={keyword} placeholder="Search...." />
        </InputGroup>

    )
}

export default Search