import LoadingGif from '../images/gif/1494.gif'
import styles from '../style/Loading.module.scss'

const Loading = () => {
    return (

      
      <div className={styles.loading}>
        <h4>Loading...</h4> 
        <div >
          <img src={LoadingGif} alt='loading gif'/> 
        </div>   
      </div>
    )
}



export default Loading