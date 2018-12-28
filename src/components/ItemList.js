import React from "react";
import Item from "./todoItems/Item.js";

const ItemList = (props) => {
    //console.log(todoLists);
    //console.log(props);
    const item = props.todoLists.map((term) => {
        return <Item 
                content={term} 
                key={props.todoLists.indexOf(term)}
                id={props.todoLists.indexOf(term)}
                onDelete={props.onDelete}/>
    });
    return(
        <div className="ui relaxed divided list">
            {item}
        </div>
    );
}

export default ItemList;