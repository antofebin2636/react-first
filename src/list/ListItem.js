import React, { useEffect } from 'react';
import Label2 from './Label2';
import './ListItem.css';

function ListItem(props) {

    const {title,descr,isActive, onDelete,onLabelClick, onButtonClick} = props;

    useEffect(() => {
      console.log('Hello ' + title);
    })

    return (
      <div className='list-item'>
        <div className='list-title'>
          <h4>{title}</h4>
          <label onClick={onDelete} >Delete</label>
        </div>
        <div className='list-descr'>
          <p>{descr}</p>
        </div>
        <div className='list-label'>
          <Label2 onActive = {()=> console.log('Parent Clicked')} title= {title} isActive = {isActive} onButtonClick = {onButtonClick} onAction ={onLabelClick}/>
        </div>
      </div>
    );
  }


  export default ListItem;