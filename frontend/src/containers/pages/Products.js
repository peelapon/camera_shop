import React from 'react'
import Allproducts from '../../components/Allproducts'
import Footer from '../../components/Footer'
import Menubar from '../../components/Menubar'
import Navbar from '../../components/Navbar'

function Products() {
    return (
        <div>
            <Navbar/>
            <Menubar/>
            <Allproducts/>
            <Footer/>
        </div>
    )
}

export default Products
