import { useContext } from "react";
import { PagePropsContext } from "../context";

export const usePageProps = () => {
  const { query } = useContext(PagePropsContext);
  return { query };
};
