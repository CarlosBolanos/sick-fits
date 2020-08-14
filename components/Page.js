import React from "react";
import Header from './Header';
import Meta from './Meta';

const Page = (props) => {
    return (
      <div>
        <Meta />
        <Header />
        <div>{props.children}</div>
      </div>
    );
}

export default Page;

