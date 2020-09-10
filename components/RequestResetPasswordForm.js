import React, { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import { useRequestResetPassword } from "../hooks/userHooks";

const RequestResetPasswordForm = () => {
  const { requestReset, loading, error, data } = useRequestResetPassword();
  const [email, setEmail] = useState("mail@carlos-bolanos.com");

  if (data) {
    Router.push({
      pathname: "resetInProgress",
    });
  }

  const handleInputChange = ({ target }) => {
    const { name, type, value } = target;
    setEmail(value);
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
          requestReset({ variables: { email } });
        }}
      >
        <fieldset className="w-1/2">
          <legend className="pb-5 text-xl font-semibold">Sign In</legend>
          {error && (
            <div className="text-red-500">
              {" "}
              something went wrong, try again! errorCode:{" "}
              {error.graphQLErrors.map((err) => err.code).join(",")}
            </div>
          )}
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
              value={email}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-white hover:text-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Request reset password link
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default RequestResetPasswordForm;
