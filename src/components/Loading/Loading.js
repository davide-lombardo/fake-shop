import loadingGif from '../../images/gif/1494.gif'
import styles from './Loading.module.scss'

const Loading = () => {
    return (
      <div className={styles.loading}>
        <h4>Loading...</h4> 
        <div >
          <img src={loadingGif} alt='loading gif'/> 
        </div>   
      </div>
    )
}



export default Loading