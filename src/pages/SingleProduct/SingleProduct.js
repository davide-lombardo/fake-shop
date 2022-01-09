import { useEffect } from "react"

import styles from './SingleProduct.module.scss'

import Loading from '../../components/Loading/Loading'
import Footer from "../../components/Footer/Footer";

import PropTypes from 'prop-types'

import { useParams, Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { fetchSingleProduct, setLoading } from '../../redux/actions/productActions'


const SingleProduct = () => {

  const { singleProduct } = useSelector(state => ({...state.shop}))
  const { loading } = useSelector(state => ({...state.shop}))
  const { id } = useParams()

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading())
    dispatch(fetchSingleProduct(id))
  }, [dispatch, id])

  
 const { 
    title, 
    image, 
    description,  
    category, 
    price,
 } = singleProduct


  return (
    <>
        {
        loading ? <Loading/> :
        <div className={styles.flexContainer}>
            <div className={styles.main}>
                <div className={styles.aside}></div>

                <div className={styles.article}>
                    <div>
                        <div className={styles.imgContainer}>
                            <img src={image} alt='img' />
                        </div>
                    </div>
                    <section> 
                        <div className={styles.infoContainer}>
                            <h3 className={styles.title}>{title}</h3>        
                            <section>
                                <h4 className={styles.priceTag}>$ {price}</h4>
                                <h4 className={styles.categoryTag}>{category}</h4>
                                <p className={styles.desc}>{description}</p>                        
                            </section>

                            <div className={styles.buttonContainer}>
                                <Link to='/'>
                                    <button className={styles.productBtn}>
                                        Back Home
                                    </button>
                                </Link>
                            </div>
                        </div> 
                    </section>
                </div>

                <div className={styles.nav}></div>
            </div> 

            <Footer/> 
        </div>
        }
    </>
    );
};



SingleProduct.defaultProps = {
    title: '',
    image: '',
    id: 0,
    price: 0,
    category: '',
    description: '',
    rate: 0,
}

SingleProduct.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    rate: PropTypes.number.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default SingleProduct