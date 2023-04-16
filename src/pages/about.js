import React from 'react';
import aboutStyles from '../styles/about.module.css';
import List, {ListItem} from '../components/list';

export default function AboutPage() {
  return(
    <>
    <List>
        <ListItem image='/images/owner.jpg'
        header='The Owner:' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.'/>
    </List>

    <List>
        <ListItem image='/images/co-owner.png'
        header='The Co-Owner:' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.'/>
    </List>

    <div className={aboutStyles.owners}>

        <h1 className={aboutStyles.head}>About</h1>
        {/* <div className={aboutStyles.owner}>
            <img src="/images/owner.jpg"></img>
        
        <div className={aboutStyles.description}>
            <h1>The Owner:</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.</span>
        </div>
        </div>
        <div className={aboutStyles.coOwner}>
            <img src="/images/co-owner.png"></img>
        
        <div className={aboutStyles.description}>
            <h1>The Co-Owner:</h1>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ac bibendum quam, vel finibus leo. Morbi mattis, odio sed fermentum convallis, dolor lorem porta magna, eu consequat lorem magna a turpis. Vivamus ultrices elit risus, at egestas enim tempus non. Vivamus molestie lacinia dui in tincidunt. Morbi vulputate accumsan scelerisque. Nunc justo turpis, blandit ac vestibulum congue, ullamcorper mattis orci.</span>
        </div>
        </div> */}
    </div>
    </>
  )
}