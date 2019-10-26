import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { tsPropertySignature } from '@babel/types';
function GetIfItemExist(props){
    return(
        props.val!=null &&  props.val!="NotSet" ? 
        <div>
        <ListGroupItem id="tab_content_info_item_nam">{props.name}</ListGroupItem> <ListGroupItem id="tab_content_info_item_val"> {props.val}</ListGroupItem> 
        </div>
        : null
    );
}
export default GetIfItemExist;