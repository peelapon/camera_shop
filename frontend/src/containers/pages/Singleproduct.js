import React from 'react'
import Footer from '../../components/Footer'
import Menubar from '../../components/Menubar'
import Navbar from '../../components/Navbar'
import Singleitem from '../../components/Singleitem'


function Singleproduct() {
    return (
        <div>
            <Navbar />
            <Menubar/> 
            <Singleitem/>          
            <Footer />
        </div>
    )
}

export default Singleproduct
