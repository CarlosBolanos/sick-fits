import { useQuery, useMutation, gql } from '@apollo/client';
import { GET_ITEM, ALL_ITEMS_QUERY, GET_ITEMS_PAGINATED_QUERY } from './queries';
import { CREATE_ITEM_MUTATION, DELETE_ITEM_MUTATION, UPDATE_ITEM_MUTATION } from './mutations';

export const useGetItems = (skip, first) => {
  const { loading, error, data } = useQuery(
    ALL_ITEMS_QUERY,
    { variables: { skip, first } }
  );
  return { loading, error, data }
}

export const useGetPaginatedItems = () => {
  const { loading, error, data } = useQuery(GET_ITEMS_PAGINATED_QUERY);
  return { loading, error, data }
}

export const useGetItemById = (id) => {
  const { loading, error, data } = useQuery(GET_ITEM, { variables: { id } });
  return { loading, error, data }
}

export const useCreateItem = () => {
  const [createItem, { loading, error, data }] = useMutation(CREATE_ITEM_MUTATION,
    {
      refetchQueries: [
        { query: ALL_ITEMS_QUERY, variables: { skip: 0, first: 6 } },
        { query: GET_ITEMS_PAGINATED_QUERY }
      ]
    });
  let result;

  if (data) {
    result = data?.createItem;
  }

  return {
    createItem, loading, error, result
  }
}

export const useUpdateItem = () => {
  const [updateItem, { loading, error, data }] = useMutation(UPDATE_ITEM_MUTATION);
  let result;

  if (data) {
    result = data?.updateItem;
  }

  return {
    updateItem, loading, error, result
  }
}

export const useDeleteItem = () => {
  // currently not in use, this approach can be taken when wanting to manually override apollo cache.
  const updateItemCache = (cache, payload) => {
    const { id } = payload.data.deleteItem;

    const data = cache.readQuery({ query: ALL_ITEMS_QUERY, variables: { skip: 0, first: 6 } });
    const newItems = data.items.filter(item => item.id !== id);
    cache.writeQuery({ query: ALL_ITEMS_QUERY, variables: { skip: 0, first: 6 }, data: { items: newItems } });
  }

  const [deleteItem, { loading, error, data, called }] = useMutation(
    DELETE_ITEM_MUTATION, {
    refetchQueries: [
      { query: ALL_ITEMS_QUERY, variables: { skip: 0, first: 6 } },
      { query: GET_ITEMS_PAGINATED_QUERY },
    ]
  }
  );

  let result;

  if (data) {
    result = data?.deleteItem
  }

  return {
    deleteItem, loading, error, data, called
  }
}
