import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const Detail = () => {
    const [data,setData]=useState({})
  const { sid } = useParams();
    const fetchApi=async()=>{
        const response=await fetch(`http://localhost:3000/student/${sid}`)
        const result =await response.json()
        setData(result)
    }
    useEffect(()=>{
        fetchApi()
    },[])
  return (
    <>details
    <h3>{data.name}</h3>
    <p>number {data.phone}</p>
    <p> <b>{data.email}</b></p>
    </>
  )
}

export default Detail