import React from 'react';
import productStyles from '../styles/product.module.css';
import List, {ListItem} from '../components/list';
import { products } from '../data/productsData';

export default function productsPage() {

    const soapList = products.map(products=> {
        return(
            <ListItem
            key={products.id}
             header={products.name}
            image={`/images/${products.image}`} 
            text={products.description}
            href={`/products/${products.id}`}/>
        )
    })

  return(
    <>
    <List>{soapList}</List>

     {/* <List>
        <ListItem image='/images/butter-almond-soap.jpg'
        header='Butter Almond Soap:' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.'/>
    </List>

    <List>
        <ListItem image='/images/rose-gold-soap.jpg'
        header='Rose-Gold Soap:' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.'/>
    </List>

    <List>
        <ListItem image='/images/luxury-soap.jpg'
        header='Luxury Soap:' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.'/>
    </List> */}

    <div className={productStyles.product}>
        <h1 className={productStyles.head}>Product</h1>
    {/* <div className={productStyles.butterAlmond}>
    <img src='/images/butter-almond-soap.jpg'></img>
    <div className={productStyles.description}>
    <h1>Butter Almond Soap:</h1>
        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.</span>
    </div>
    </div>
    <div className={productStyles.roseGold}>
    <img src='/images/rose-gold-soap.jpg'></img>
    <div className={productStyles.description}>
    <h1>Rose-Gold Soap:</h1>
        <span>Curabitur tellus erat, commodo at dapibus ac, tempus quis justo. Suspendisse tempor arcu risus, at euismod nisi ullamcorper id. Sed eros quam, elementum at consequat sit amet, fringilla sed metus. Sed laoreet fermentum augue. Quisque viverra magna vitae vehicula sodales. Mauris scelerisque pellentesque maximus. Praesent sed augue luctus, sollicitudin tortor at, aliquam ex. </span>
    </div>
    </div>
    <div className={productStyles.Lux}>
    <img className={productStyles.luximg} src='/images/luxury-soap.jpg'></img>    <div className={productStyles.description}>
        <h1>Luxury Soap:</h1>
        <span>Vivamus nisl elit, mollis ut magna sit amet, luctus pulvinar velit. Nam egestas velit diam, efficitur lobortis magna pretium a. Mauris eu posuere nisi, in condimentum tortor. In consectetur blandit lacus ut pellentesque. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</span>
    </div>
    </div> */}
    </div>
    </>
  )
}