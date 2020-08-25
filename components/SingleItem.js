import Head from 'next/head';

const SingleItem = ({ item }) => {
    const { id, title, description, price, image, largeImage } = item;

    return <div className="flex pt-5">
        <Head>
            <title>Sick Fits | {item.title} </title>
        </Head>
        <div >
            <img src={image} alt={image.title} />
        </div>
        <div className="pl-5">
            <p className="text-xl font-semibold">{title}</p>
            <p className="text-base">{description}</p>
        </div>
    </div>
}

export default SingleItem;