
import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

const profile_item=(props)=>{
    const ifHasvsl= props.val? <ListGroupItem id="items">{props.title} : {props.val}</ListGroupItem>:null
    return(
            <dev>
                {ifHasvsl}
            </dev>
    )
}

export default profile_item;