
import Link from 'next/link';
import styles from '../styles/Navbar.module.css';
import noon from '../public/noon-logo.png'
import Image from 'next/image';

const Navbar = () => {
  return (
  
    <nav className={styles.navbar}>
    <Image src={noon} height={100} width={100} />    
      <ul className={styles.links}>
        <li className={styles.navlink}>
          <Link href="/">Home</Link>
        </li>
        
        <li className={styles.navlink}>
          <Link href="/cart">Liked</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;


