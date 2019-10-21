import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { tsPropertySignature } from '@babel/types';
function GetIfItemExist(props){
    return(
        props.val!=null &&  props.val!="NotSet" ? <ListGroupItem id="tab_content_info_item">{props.name} : {props.val}</ListGroupItem> : null
    );
}
export default GetIfItemExist;