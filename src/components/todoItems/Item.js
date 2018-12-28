import React from "react";
import Content from './Content.js';
import DeleteButton from './DeleteButton.js';

const Item = (props) => {
    //console.log(props);
    return(
        <div className="item">
            <DeleteButton 
                content={props.content} 
                id={props.id}
                onDelete={props.onDelete}/>
            <i className="large thumbtack middle alignd icon"></i> 
            <Content content={props.content}/>
        </div>
    );
};

export default Item;