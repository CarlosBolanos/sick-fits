import {useQuery, useMutation} from '@apollo/client';
import {ALL_ITEMS_QUERY} from './queries';
import {CREATE_ITEM_MUTATION, DELETE_ITEM_MUTATION} from './mutations';

export const useGetItems = () => {
  const { loading, error, data } = useQuery(ALL_ITEMS_QUERY);
  return {loading, error, data}
}

export const useCreateItem = () => {
  const [createItem, {loading, error, data, called}] = useMutation(CREATE_ITEM_MUTATION);
  let result;

  if(data){
    result = data?.createItem;
  }

  return {
    createItem, loading, error, result
  }
}

export const useDeleteItem = () => {
  const [deleteItem, {loading, error, data, called}] = useMutation(DELETE_ITEM_MUTATION);
  let result;
  if(data){
    result = data?.deleteItem
  }

  return {
    deleteItem, loading, error, data, called
  }
}
