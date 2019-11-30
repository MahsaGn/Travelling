import React from "react";
import { ListGroupItem } from "reactstrap";
function GetIfItemExist(props) {
  return props.val != null && props.val != "NotSet" ? (
    <div>
      <ListGroupItem id="tab_content_info_item_nam">{props.name}</ListGroupItem>
      <ListGroupItem id="tab_content_info_item_val">{props.val}</ListGroupItem>
    </div>
  ) : null;
}
export default GetIfItemExist;
