import styles from './Home.module.scss'

import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProductList from '../../components/ProductList/ProductList'

import { useSelector } from 'react-redux'

const Home = () => {

    const { products } = useSelector(state => ({...state.shop}))

    return (
    <div className={styles.flexContainer}>  
        <Header/>
     
        <div className={styles.main}>
            <div className={styles.aside}></div>
            
            <div className={styles.article}>  
                <div className={styles.homeContainer}>
                    <img 
                        className={styles.homeImage}
                        src="https://images.unsplash.com/photo-1580828343064-fde4fc206bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80"
                        alt="full bled cover"
                    />
                </div>
               
                {
                    (!products?.length) 
                    ? 
                    <>
                        <div className={styles.emptySearch}>
                            <p>
                                Unfortunately no products matched your search,
                                please try another input
                            </p>
                        </div>
                    </>
                    :
                    <ProductList/>
                }
            </div>
        
            <div className={styles.nav}></div>
        </div>
    
        <Footer/>
    </div>
    )
}

export default Home;

