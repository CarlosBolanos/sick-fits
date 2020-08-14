import Link from 'next/link';
import styles from './nav.module.css';

const Nav = () => (
    <ul className="grid grid-flow-col divide-x divide-gray-400">
      <li className={styles.navItem}>
        <Link href="/items">
          <a>Shop</a>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/sell">
          <a>Sell</a>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/orders">
          <a>Orders</a>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/signup">
          <a>Signup!</a>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/me">
          <a>Me!</a>
        </Link>
      </li>
    </ul>
)

export default Nav;
