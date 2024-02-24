import React, { useContext } from 'react'
import counterContext from './counterContext'
const Blog = () => {
const {count,handleCount}=useContext(counterContext)

  return (
    <div>
        {/* <p>{count}</p>
        <button onClick={handleCount}>click</button> */}
    </div>
  )
}

export default Blog