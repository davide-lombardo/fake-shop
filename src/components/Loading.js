import LoadingGif from '../images/gif/1494.gif'
import styles from '../style/Loading.module.scss'

const Loading = () => {
    return (
        <div className={styles.loading}>
           <h4>Products data loading...</h4> 
           <div>
             <img src={LoadingGif} alt=''/>
           </div>   
        </div>
    )
}

export default Loading