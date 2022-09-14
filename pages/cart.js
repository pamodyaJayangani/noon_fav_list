import Image from 'next/image';
import { useSelector, useDispatch } from 'react-redux';
// Importing actions from  fav.slice.js
import {
  removeFromFav,
} from '../redux/fav.slice';
import styles from '../styles/CartPage.module.css';

const CartPage = () => {

  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      {cart.length === 0 ? (
        <h1>Wish List is Empty!</h1>
      ) : (
        
		<>
		<div><h2>Wish List</h2></div>
          <div className={styles.header}>
            <div>Product</div>
            <div>Actions</div>            
          </div>
          {cart.map((item) => (
            <div className={styles.body}>
              <p>{item.payload}</p>              
              <div className={styles.buttons}>                
                <button onClick={() => dispatch(removeFromFav(item.payload))}>
                  <i class="fa fa-trash"></i>
                </button>
              </div>
              
            </div>
          ))}
          
        </>
      )}
    </div>
  );
};

export default CartPage;
