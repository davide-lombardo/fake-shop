import { useEffect } from "react"

import styles from '../style/SingleProduct.module.scss'
import { TrashIcon } from '@heroicons/react/solid';

//import { StarIcon } from '@heroicons/react/solid';

import Loading from '../components/Loading'
import Header from "../components/Header";
import Footer from "../components/Footer";

import PropTypes from 'prop-types'

import { useParams, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct, setLoading, addToBasket, removeFromBasket } from '../redux/actions/productActions'


const SingleProduct = () => {

  const { product } = useSelector(state => ({...state.shop}))
  const { loading } = useSelector(state => ({...state.shop}))
  const { basket } = useSelector(state => ({ ...state.shop}))
  const { id } = useParams()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading())
    dispatch(fetchSingleProduct(id));
  }, [id, dispatch])

  const addToCart = () => {
    dispatch(addToBasket(id))
  }

 const { 
    title, 
    image, 
    description,  
    category, 
    price,
 } = product

// const { rating: {rate} } = product

  return (
    <>
        <Header/>
        {
        loading ? <Loading/> :
        <section className='container'>
            <div className='row my-5'>
                <div className='col-md-6 col-sm-12'>
                    <div className={styles.imgContainer}>
                        <img src={image} alt='img' />
                    </div>
                </div>
                <div className='col-md-6 col-sm-12'> 
                    <div className={styles.infoContainer}>
                        <h3>{title}</h3>
                        <article className={styles.ratingContainer}>
                           
                        </article>
                    
                        <article >
                            <h4><p className={styles.priceTag}>$ {price}</p></h4>
                            <h4 className={styles.categoryTag}>{category}</h4>
                            <p>{description}</p>                        
                        </article>

                        <div className={styles.buttonContainer} tabIndex="0">
                            <Link to='/'>
                                <button className={styles.productBtn}>
                                    Back Home
                                </button>
                            </Link>
                            <button 
                                type="button" 
                                onClick={addToCart} 
                                className={styles.productBtn}
                            >   Add to basket
                            </button>  
                        </div>
                    </div> 
                </div>
            </div>
        </section>
        }
        <Footer/>
    </>
    );
};



SingleProduct.defaultProps = {
    title: '',
    image: '',
    id: '',
    price: 0,
    category: '',
    description: '',
    rate: 0,
}

SingleProduct.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default SingleProduct