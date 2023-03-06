import React from "react";
import DropdownTreeSelect from "react-dropdown-tree-select";



export const ComponentDef = (props) => {
    return <DropdownTreeSelect data={props.data} onChange={props.onChange} />;
}

export const DropdownTreeMemoized = React.memo(ComponentDef, (prevProps, nextProps) => true);