import CategoryCard from '../components/CategoryCard';
import styles from '../styles/Home.module.css';
import Image from 'next/image';

const HomePage = () => {
  return (
    <main className={styles.container}>
      <div className={styles.small}>
        <CategoryCard image="https://imgur.com/uKQqsuA.png" name="Xbox" />
	  </div>
	  <div className={styles.small}>
        <CategoryCard image="https://imgur.com/3Y1DLYC.png" name="PS5" />
	  </div>
	  <div className={styles.small}>
        <CategoryCard image="https://imgur.com/Dm212HS.png" name="Switch" />
      </div>
      <div className={styles.large}>
        <CategoryCard image="https://imgur.com/qb6IW1f.png" name="PC" />
	 </div> 
	  <div className={styles.large}>
        <CategoryCard
          image="https://imgur.com/HsUfuRU.png"
          name="Accessories"
        />
      </div>
    </main>
  );
};

export default HomePage;