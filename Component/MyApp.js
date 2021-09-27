import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Todo from './Todo';
import Prop from './Prop';
import "./style.css";
import Joke from './Joke';
import Product from './Product';
import ProductsData from "./vschoolProduct"
function MyApp() {
    const ProductComponents = ProductsData.map(item => <Product product={item} />)
    return (
        <>

            <Header />
            <Main />
            <Footer />
            <Todo />
            <Prop />
            <Joke />
            {ProductComponents}
        </>
    )

}
export default MyApp