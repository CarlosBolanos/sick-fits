import Head from 'next/head';
import Link from 'next/link';
import { useGetPaginatedItems } from '../hooks/itemHooks';

const Pagination = (props) => {
    const perPage = 6;
    const currentPage = parseInt(props?.query?.page || 1);
    const { loading, error, data } = useGetPaginatedItems();

    if (!data) return null;

    const count = data.itemsConnection.aggregate.count;
    const pages = Math.ceil(count / perPage);

    return <div className="text-center">
        <Head>
            <title>Sick Fits! - Page {currentPage} of {pages}</title>
        </Head>
        {
            currentPage > 1 ?
                <Link prefetch href={{ pathname: 'items', query: { page: (currentPage - 1) } }}>
                    <a>prev </a>
                </Link> :
                null
        }
         | Page {currentPage} of {pages} - ({count}) items total |
        {
            currentPage !== pages ?
                <Link prefetch href={{ pathname: 'items', query: { page: (currentPage + 1) } }}>
                    <a> next</a>
                </Link> :
                null
        }
    </div >
}

export default Pagination;