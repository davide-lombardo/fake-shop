import ProductCard from './ProductCard'

import { useSelector } from "react-redux";


const ProductRenderList = () => {

    const { products } = useSelector(state => ({...state.shop}))

    const renderList = products.map((product, index) => {

        return (
            <ProductCard key={index} product={product}/>
        );
    })

    return <>{renderList}</> 
    
}


export default ProductRenderList;
