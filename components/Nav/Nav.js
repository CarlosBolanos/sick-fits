import Link from 'next/link';
import styles from './nav.module.css';
import { useMe } from '../../hooks/userHooks';
import { useSignOut } from '../../hooks/userHooks';


const Nav = () => {
  const { user } = useMe();
  const { signout, error, result } = useSignOut();

  return (
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
      {!user.isLoggedIn && <li className={styles.navItem}>
        <Link href="/signup">
          <a>Signup!</a>
        </Link>
      </li>}
      {!user.isLoggedIn && <li className={styles.navItem}>
        <Link href="/signin">
          <a>Signin!</a>
        </Link>
      </li>}
      {user.isLoggedIn && <li className={styles.navItem}>
        <a className="cursor-pointer" onClick={signout}>Sign out</a>
      </li>
      }
    </ul>
  )
}

export default Nav;
