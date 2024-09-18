import React from 'react'
import Layout from '../Components/Layout'
import { useContext } from 'react'
import myContext from '../context/mycontext'
const Home = () => {
  const data =useContext(myContext)
  return (
    <div>
        <Layout>
            <p>Home</p>
            <p></p>
        </Layout>
    </div>
  )
}

export default Home