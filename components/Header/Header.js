import React from "react";
import Link from 'next/link';
import Router from 'next/router';
import NProgress from 'nprogress';
import Nav from '../Nav/Nav';
import styles from './header.module.css';

Router.onRouteChangeStart = () => { NProgress.start(); };
Router.onRouteChangeComplete = () => { NProgress.done(); };
Router.onRouteChangeError = () => { NProgress.done(); };

const Header = () => (
  <div>
    <div className="flex items-center justify-between flex-wrap ">
      <div className={styles.logo}>
        <Link href="/">
          <a className="font-mono font-bold text-lg text-white bg-red-500 p-4">Sick Fits</a>
        </Link>
      </div>
      <Nav />
    </div>
    <div className="sub-bar">
      <p>Search</p>
    </div>
    <div>Cart</div>
  </div>
);

export default Header;
