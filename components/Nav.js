import Link from 'next/link';

const Nav = () => (
    <div>
      <Link href="/items">
        <a>Shop</a>
      </Link>
      <Link href="/sell">
        <a>Sell</a>
      </Link>
      <Link href="/orders">
        <a>Orders</a>
      </Link>
      <Link href="/myaccount">
        <a>My Account</a>
      </Link>
      <Link href="/signup">
        <a>Signup!</a>
      </Link>

      <Link href="/me">
        <a>Me!</a>
      </Link>
    </div>
)

export default Nav;
