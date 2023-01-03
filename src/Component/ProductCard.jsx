import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const ProductCard = () => {

  const [data, setData] =  useState([])

  // https://dummyjson.com/products

   const getData = async() => {

    let r = await axios.get('https://dummyjson.com/products')
    setData(r.data.products)


   }

   useEffect(() => {
   
    getData()

  }, [])
  
  console.log("data", data)


  return (
    <div>
      <h1>OUR PRODUCTS</h1>
        {data?.map(item => (
           <div key={item.thumbnail}>
              <img src={item.thumbnail} alt=""/>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <p>Brand : {item.brand}</p>
              <p>Price : {item.price}</p>
           </div>
        ))}



    </div>
  )
}
