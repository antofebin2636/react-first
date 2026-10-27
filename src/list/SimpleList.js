import React from "react";  
import ListItem from "./ListItem";


function SimpleList(props){

    const {data, onAction, onLabelClick, onButtonClick} = props;

    return (
          <div className='app-list'>
                    {
                       data.map((obj) => {
                            return <ListItem 
                                key={obj.title}
                                title={obj.title}
                                descr={obj.descr} 
                                isActive={obj.isActive}
                                onLabelClick = {onLabelClick}
                                onDelete = {
                                    () => {
                                        onAction(obj);
                                    }
                                }
                                onButtonClick = {
                                    () =>{
                                        onButtonClick(obj)
                                    }
                                }
                                />
                        })
                    }
                </div>
    )
}

export default SimpleList;