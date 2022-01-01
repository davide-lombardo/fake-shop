import styles from '../style/Home.module.scss'

import Header from '../components/Header'
import Footer from '../components/Footer'
import ProductList from '../components/ProductList'

import { useSelector } from 'react-redux'

function Home() {

    const { products } = useSelector(state => ({...state.shop}))

    return (
    <>  
        <Header/>
     
        <div className={styles.home}>
            <div className={styles.homeContainer}>
                <img 
                    className={styles.homeImage}
                    src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                    alt="full bled cover"/>
            </div>
        </div>

        {
            (!products.length) 
            ? 
            <>
                <div className={styles.emptySearch}>
                    <h3>Unfortunately no products matched your search,</h3>
                    <h3>please try another input</h3>
                </div>
            </>
            :
            <ProductList/>
        }
        
                
        <Footer/>
    </>
    )
}

export default Home;

