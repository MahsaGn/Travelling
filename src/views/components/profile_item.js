
import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

const profile_item=(props)=>{
    const ifHasvsl= props.val?
    <div >
    <ListGroupItem id="tab_content_info_item_nam" >{props.title}</ListGroupItem>
    <ListGroupItem id="tab_content_info_item_val"> {props.val}</ListGroupItem> 
    </div>
    : null
    return(
            <dev>
                {ifHasvsl}
            </dev>
    )
}

export default profile_item;