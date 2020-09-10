import { useMutation, useQuery } from "@apollo/client";
import {
  SIGNUP_MUTATTION,
  SIGN_IN_MUTATION,
  SIGN_OUT_MUTATION,
  REQUEST_RESET_PASSWORD_MUTATION,
  RESET_PASSWORD_MUTATION,
} from "../apollo/mutations";
import { ME_QUERY } from "../apollo/queries";

export const useSignUp = () => {
  const [signup, { loading, error, data }] = useMutation(SIGNUP_MUTATTION, {
    refetchQueries: [{ query: ME_QUERY }],
  });

  let result;

  if (data) {
    result = data?.signup;
  }

  return {
    signup,
    loading,
    error,
    result,
  };
};

export const useSignIn = () => {
  const [signin, { loading, error, data }] = useMutation(SIGN_IN_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }],
  });

  let result;

  if (data) {
    result = data?.signin;
  }

  return {
    signin,
    loading,
    error,
    result,
  };
};

export const useSignOut = () => {
  const [signout, { loading, error, data }] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [{ query: ME_QUERY }],
  });

  let result;

  if (data) {
    result = data?.signout;
  }

  return {
    signout,
    loading,
    error,
    result,
  };
};

export const useRequestResetPassword = () => {
  const [requestReset, { loading, error, data }] = useMutation(
    REQUEST_RESET_PASSWORD_MUTATION,
    {
      refetchQueries: [{ query: ME_QUERY }],
    }
  );

  return { requestReset, loading, error, data };
};

export const useResetPassword = () => {
  const [resetPassword, { loading, error, data }] = useMutation(
    RESET_PASSWORD_MUTATION,
    {
      refetchQueries: [{ query: ME_QUERY }],
    }
  );

  return { resetPassword, loading, error, data };
};

export const useMe = () => {
  let user = { isLoggedIn: false };
  const { loading, error, called, data } = useQuery(ME_QUERY);

  if (data?.me) {
    user = { ...data.me, isLoggedIn: true };
  }

  return {
    loading,
    called,
    error,
    user,
  };
};
