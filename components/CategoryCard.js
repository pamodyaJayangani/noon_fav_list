import Link from 'next/link';
import Image from 'next/image';
import styles from '../styles/CategoryCard.module.css';
import { useDispatch } from 'react-redux';
import { addToFav } from '../redux/fav.slice';

const CategoryCard = ({ image, name }) => {
	const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <Image className={styles.image} src={image} height={700} width={1300} />      
        <div className={styles.info}>
          <h3>{name}</h3> 
		  <p> <button onClick={() => dispatch(addToFav(name))} className={styles.btn}><i className="fa fa-heart"></i></button></p>		 
        </div>
        
	 
    </div>
  );
};
export default CategoryCard;