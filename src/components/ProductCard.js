import styles from '../style/ProductCard.module.scss'

import PropTypes from 'prop-types'

import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from '../redux/actions/productActions'

const ProductCard = () => {

    const { products } = useSelector(state => ({...state.shop}))
  
    const dispatch = useDispatch();

    const renderList = products.map((product, index) => {

        const { id, title, image, price } = product
  
        const addToCart = () => {
            dispatch(addToBasket(id))
        }  

        return (
        <div key={index}>
            <div className={styles.product}>
                <Link to={`/${id}`} className='text-decoration-none text-muted'>
                    <img 
                        src={image} 
                        alt="thumbnail" 
                        className={styles.productThumbnail}
                    /> 
                    <div className={styles.productDetails}>
                        <p className={styles.productTitle}>
                            {title}
                        </p>
                        <p className={styles.productPrice}>
                            <small>$</small>
                            <strong>{price}</strong>
                        </p>
                    </div>                    
                </Link>
                <button 
                    type='button' 
                    onClick={addToCart} 
                    className={styles.productBtn}
                >   Add to basket
                </button>   
                   
            </div>
        </div>
        );
    })

    return <>{renderList}</> 
    
}

ProductCard.defaultProps = {
    title: '',
    thumbnail: '',
    id: '',
    price: 0,
}

ProductCard.propTypes = {
    title: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
}

export default ProductCard;
