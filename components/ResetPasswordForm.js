import React, { useState } from "react";
import Router from "next/router";
import Link from "next/link";
import { useResetPassword, useMe } from "../hooks/userHooks";
import { usePageProps } from "../hooks/appHooks";

const ResetPasswordForm = () => {
  const { query } = usePageProps();
  const { resetPassword, loading, error, result } = useResetPassword();
  const { user } = useMe();

  const [resetPasswordData, setResetPasswordData] = useState({
    resetToken: query.resetToken,
    password: "password",
    passwordConfirm: "password",
  });

  if (user.isLoggedIn) {
    Router.push("/me");
  }

  const handleInputChange = ({ target }) => {
    const { name, type, value } = target;
    setResetPasswordData({ ...resetPasswordData, [name]: value });
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
          resetPassword({ variables: { ...resetPasswordData } });
        }}
      >
        <fieldset className="w-1/2">
          <legend className="pb-5 text-xl font-semibold">
            Password reset form
          </legend>
          {error && (
            <div className="text-red-500">
              {" "}
              something went wrong, try again! errorCode:{" "}
              {error.graphQLErrors.map((err) => err.code).join(",")}
            </div>
          )}
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
            type="hidden"
            name="resetToken"
            id="resetToken"
            placeholder="enter your email address"
            required
            disabled
            value={resetPasswordData.resetToken}
          />
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
              value={resetPasswordData.password}
            />
          </div>
          <div className="mb-4">
            <label className="text-lg font-semibold" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-700 leading-tight focus:outline-none focus:shadow-outline mt-2"
              type="password"
              name="passwordConfirm"
              id="passwordConfirm"
              placeholder="confirm your password"
              required
              onChange={handleInputChange}
              value={resetPasswordData.passwordConfirm}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-red-500 hover:bg-white hover:text-red-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default ResetPasswordForm;
