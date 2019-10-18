import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { tsPropertySignature } from '@babel/types';
function NavItem_info(props){
    return(
        <ListGroup id="tab_content_info">
        <ListGroupItem id="tab_content_info_item">نام : {props.info.name}</ListGroupItem>
        <ListGroupItem id="tab_content_info_item">متوسط زمان بازدید : {props.info.duration}</ListGroupItem>
        <ListGroupItem id="tab_content_info_item">زمان شروع : {props.info.startTime}</ListGroupItem>
        <ListGroupItem id="tab_content_info_item">زمان پایان : {props.info.endTime}</ListGroupItem>
        <ListGroupItem id="tab_content_info_item">محبوبیت : {props.info.rate}</ListGroupItem>
        <ListGroupItem id="tab_content_info_item">آدرس : {props.info.address},{props.info.city}</ListGroupItem>
        <ListGroupItem id="tab_content_info_item">درجه سختی : {props.info.hardness}</ListGroupItem>
      </ListGroup>  
    );
}
export default NavItem_info;