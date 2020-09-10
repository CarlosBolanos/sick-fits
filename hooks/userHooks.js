import { useMutation, useQuery } from '@apollo/client';
import { SIGNUP_MUTATTION, SIGN_IN_MUTATION, SIGN_OUT_MUTATION } from './mutations';
import { ME_QUERY } from './queries';

export const useSignUp = () => {
  const [signup, { loading, error, data }] = useMutation(SIGNUP_MUTATTION, {
    refetchQueries: [
      { query: ME_QUERY }
    ]
  });

  let result;

  if (data) {
    result = data?.signup;
  }

  return {
    signup, loading, error, result
  }
}

export const useSignIn = () => {
  const [signin, { loading, error, data }] = useMutation(SIGN_IN_MUTATION, {
    refetchQueries: [
      { query: ME_QUERY }
    ]
  });

  let result;

  if (data) {
    result = data?.signin;
  }

  return {
    signin, loading, error, result
  }
}

export const useSignOut = () => {
  const [signout, { loading, error, data }] = useMutation(SIGN_OUT_MUTATION, {
    refetchQueries: [
      { query: ME_QUERY }
    ]
  });

  let result;

  if (data) {
    result = data?.signout;
  }

  return {
    signout, loading, error, result
  }
}

export const useMe = () => {
  let user = { isLoggedIn: false };
  const { loading, error, data } = useQuery(ME_QUERY);

  if (data?.me) {
    user = { ...data.me, isLoggedIn: true }
  }

  return {
    loading, error, user
  }
}
