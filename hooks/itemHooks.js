import {useQuery, useMutation} from '@apollo/client';
import {GET_ITEM, ALL_ITEMS_QUERY} from './queries';
import {CREATE_ITEM_MUTATION, DELETE_ITEM_MUTATION, UPDATE_ITEM_MUTATION} from './mutations';

export const useGetItems = () => {
  const { loading, error, data } = useQuery(ALL_ITEMS_QUERY);
  return {loading, error, data}
}

export const useGetItemById = (id) => {
  const { loading, error, data } = useQuery(GET_ITEM, {variables: {id}});
  return { loading, error, data }
}

export const useCreateItem = () => {
  const [createItem, {loading, error, data}] = useMutation(CREATE_ITEM_MUTATION);
  let result;

  if(data){
    result = data?.createItem;
  }

  return {
    createItem, loading, error, result
  }
}

export const useUpdateItem = () => {
  const [updateItem, {loading, error, data}] = useMutation(UPDATE_ITEM_MUTATION);
  let result;

  if(data){
    result = data?.updateItem;
  }

  return {
    updateItem, loading, error, result
  }
}

export const useDeleteItem = () => {
  const [deleteItem, {loading, error, data, called}] = useMutation(DELETE_ITEM_MUTATION);
  let result;
  console.log('f: useDeleteItem', data);

  if(data){
    result = data?.deleteItem
  }

  return {
    deleteItem, loading, error, data, called
  }
}
