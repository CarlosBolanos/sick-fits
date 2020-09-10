import React, { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { useSignUp, useMe } from "../hooks/userHooks";

const SignUpForm = () => {
  const { signup, loading, error, result } = useSignUp();
  const { user } = useMe();

  const [userData, setUser] = useState({
    name: "carlos",
    email: "mail@carlos-bolanos.com",
    password: "password",
  });

  if (user.isLoggedIn) {
    Router.push("/me");
  }

  const handleInputChange = ({ target }) => {
    const { name, type, value } = target;
    setUser({ ...userData, [name]: value });
  };

  return (
    <div>
      <form
        className=" shadow-md rounded p-10"
        method="post"
        disabled={loading}
        aria-busy={loading}
        onSubmit={(e) => {
          e.preventDefault();
          signup({ variables: { ...userData } });
        }}
      >
        <fieldset className="w-1/2">
          <legend className="pb-5 text-xl font-semibold">
            Sign up for an account
          </legend>
          {error && (
            <div className="text-red-500">
              {" "}
              something went wrong, try again! errorCode:{" "}
              {error.graphQLErrors.map((err) => err.code).join(",")}
            </div>
          )}

          <div className="mb-4">
            <label className="text-lg font-semibold" htmlFor="name">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="text"
              name="name"
              id="name"
              placeholder="enter your name"
              required
              onChange={handleInputChange}
              value={userData.name}
            />
          </div>
          <div className="mb-4">
            <label className="text-lg font-semibold" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="text"
              name="email"
              id="email"
              placeholder="enter your email address"
              required
              onChange={handleInputChange}
              value={userData.email}
            />
          </div>
          <div className="mb-4">
            <label className="text-lg font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="password"
              name="password"
              id="password"
              placeholder="enter your password"
              required
              onChange={handleInputChange}
              value={userData.password}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-white hover:text-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
            <Link href="/password/requestReset">
              <a className="hover:text-red-400 text-red-500 font-bold ">
                Reset password
              </a>
            </Link>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default SignUpForm;
