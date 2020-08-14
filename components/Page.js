import React from "react";
import Header from './Header/Header';
import Meta from './Meta';

const Page = (props) => {
    return (
      <>
        <Meta />
        <Header />
        <div className="container mx-auto">{props.children}</div>
      </>
    );
}

export default Page;

