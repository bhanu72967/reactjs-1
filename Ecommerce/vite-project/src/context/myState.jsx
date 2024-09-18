import React from 'react'

const MyState = (props) => {
    const state ={
      name:"bhanu",
      phno:123456789,
    }
  return (
 
    <myContext.Provider value={props}>

    </myContext.Provider>
  )
}

export default MyState;