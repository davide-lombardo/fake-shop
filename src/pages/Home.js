import React from 'react';
//import { useEffect } from "react"

import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductList from '../components/ProductList'
import styles from '../style/Home.module.scss';


//import { useDispatch, useSelector } from "react-redux";
//import { fetchProductsHome, setLoading } from '../redux/actions/productActions'

function Home() {

    //const dispatch = useDispatch();

    //const { products } = useSelector(state => ({...state.products}))

    // useEffect(() => {
    //     dispatch(setLoading())
    //     dispatch(fetchProductsHome()); 
    //   }, [dispatch])


    return (
    <>
        <div>
            <Header/>
        </div>
        <div className={styles.home}>
            <div className={styles.homeContainer}>
                <img 
                    className={styles.homeImage}
                    src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                    alt="full bled cover"/>
            </div>
        </div>

        
        <ProductList/> 
        

        <div>
            <Footer/>
        </div>
    </>
    )
}

export default Home;

