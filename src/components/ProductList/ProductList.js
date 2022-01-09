import styles from  './ProductList.module.scss'

import Loading from '../Loading/Loading'
import ProductRenderList from '../ProductRenderList/ProductRenderList'

import { useSelector } from 'react-redux'

const ProductList = ( ) => {

  const { loading } = useSelector(state => ({...state.shop}))

  return (
  <>
    {
      (loading) ? <Loading/> :
      <div className={styles.cardContainer}>
        <ProductRenderList/>
      </div>
    }
  </>
  )     
}


export default ProductList