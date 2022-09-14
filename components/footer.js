
import Link from 'next/link';
import styles from '../styles/Footer.module.css';

const Footer = () => {
  return (
  
    <nav className={styles.navbar}>
      
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <button className={styles.btn}><Link href="/"><i className="fa fa-home"></i></Link></button>
        </li>
        
        <li className={styles.navlink}>
        <button className={styles.btn}>  <Link href="/cart"><i className="fa fa-heart"></i></Link></button>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;


