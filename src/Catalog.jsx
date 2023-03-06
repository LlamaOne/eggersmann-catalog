import React, { Component, useMemo, useState, memo } from 'react';
import DropdownTreeSelect from "react-dropdown-tree-select";
import 'react-dropdown-tree-select/dist/styles.css';
import importedData from "./data.json";
import { GridWithCards } from './GridWithCards';

function Catalog() {

  const [state, setState] = useState({selectedNodes: []});

  const onChange = (currentNode, selectedNodes) => {
    setState({selectedNodes: selectedNodes});
  };

  const assignObjectPaths = function (obj, stack) {
    Object.keys(obj).forEach(k => {
      const node = obj[k];
      if (typeof node === "object") {
        node.path = stack ? `${stack}.${k}` : k;
        assignObjectPaths(node, node.path);
      }
    });
  };

  const onAction = (node, action) => {
    console.log('onAction::', action, node)
  }
  const onNodeToggle = currentNode => {
    console.log('onNodeToggle::', currentNode)
  }
  
  return (
    <>

        <DropdownTreeSelect data={importedData} onChange={onChange} />
        <GridWithCards selectedNodes={state.selectedNodes} />
      
    </>
  )

}

export default Catalog;
