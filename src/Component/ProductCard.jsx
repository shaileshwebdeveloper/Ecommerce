import { SimpleGrid } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Pagination } from './Pagination'

export const ProductCard = () => {

  const [data, setData] =  useState([])
  const [skip, setSkip] = useState(0)
  const [page, setPage] = useState(1)


  const handleChange = (page, skip) => {

    setPage(page)

    setSkip(skip)

 }

  // https://dummyjson.com/products

   const getData = async(skip) => {
    let r = await axios.get(`https://dummyjson.com/products?limit=12&skip=${skip}`)
    setData(r.data.products)
   }

   useEffect(() => {
   
    getData(skip)

  }, [page, skip])
  
  console.log("data", data)


  return (
    <>
    <SimpleGrid columns={4} spacing={10}>
        {data?.map(item => (
           <Box key={item.thumbnail}>
              <img src={item.thumbnail} alt=""/>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>Brand : {item.brand}</p>
              <p>Price : {item.price}</p>
           </Box>
        ))}



    </SimpleGrid>

    <Pagination page={page} skip={skip} changeSkip = {handleChange}/>
    </>
  )
}
