import React from 'react';
import ListStyles from '../../styles/list.module.css';
import { products } from '../../data/productsData';
import { useRouter } from 'next/router';


export default function ProductViewPage() {
    const router = useRouter();
    const { productId } = router.query;

    const currentProduct = products.find(product => product.id === productId);

    if (!currentProduct){
        return(
            <>
            <h1>Sorry, we couldn't find that product.</h1>
            </>
        );
    }

    console.log(currentProduct);

    return(
        <>
        <div className={ListStyles.product}>
        <img src={`/images/${currentProduct.image}`}/>
        <div className={ListStyles.text}>
        <h1>{currentProduct.name}</h1>
        <p>{currentProduct.description}</p>
        </div>
        </div>
        </>
    );
}