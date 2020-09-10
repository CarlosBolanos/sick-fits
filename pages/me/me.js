import React from "react";
import Router from "next/router";
import { useMe } from "../../hooks/userHooks";

const Me = () => {
  const { me, loading, called, error, user } = useMe();

  if (!loading && !user.isLoggedIn) {
    Router.push("/auth/signin");
  }

  return user ? <div>Welcome {user.name}</div> : null;
};

export default Me;
