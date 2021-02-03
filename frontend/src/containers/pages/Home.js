import React from 'react'
import Footer from '../../components/Footer'
import Location from '../../components/Location'
import Menubar from '../../components/Menubar'
import Navbar from '../../components/Navbar'
import Newitem from '../../components/Newitem'
import Shopfor from '../../components/Shopfor'

function Home() {
    return (
        <div>
            <Navbar/> 
            <Menubar/> 
            <Newitem/>            
            <Shopfor/>
            <Location/>
            <Footer/>
        </div>
    )
}

export default Home
