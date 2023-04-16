import React from 'react';
import ListStyles from '../styles/list.module.css';
import Link from 'next/link';

function List({children}){
    console.log(children);
    return(
        <>
        <section className={ListStyles.List}>{children}</section>
        </>
    );
}

export function ListItem({image, header, text, href}) {

    if (href){
        return(
            <>
        <div className={ListStyles.owner}>
        <Link href={href}>     
        <img src={image}></img>
        </Link>
        <div className={ListStyles.description}>
            <Link href={href}>
            <h1>{header}</h1>
            </Link>
        <span>{text}</span>
        </div>
        </div>
            </>
        )
    }


    return(
        <>
         <div className={ListStyles.owner}>
            <img src={image}></img>
        
        <div className={ListStyles.description}>
            <h1>{header}</h1>
            <span>{text}</span>
        </div>
        </div>
        </>
    );
}

export default List; 
