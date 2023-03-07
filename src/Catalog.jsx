import React, { Component, useMemo, useState, memo, useCallback } from 'react';
import DropdownTreeSelect from "react-dropdown-tree-select";
import 'react-dropdown-tree-select/dist/styles.css';
import importedData from "./data.json";
import { Grid, Card, CardContent, Typography } from '@mui/material';
import {DropdownTreeMemoized} from './DropDownTreeMemoized.js'
import { GridWithCards } from './GridWithCards';


function Catalog() {

  const cardWidth = 480;
  const cardPadding = "10px";
  const [selectedNodes, setSelectedNodes] = useState([]);

  const onChange = useCallback((currentNode, selectedNodes) => setSelectedNodes(selectedNodes), []);

  const selectedNodeAsCard = function (selectedNode) {
    return (
      <Card key={4} sx={{ width: cardWidth, margin: 2, padding: cardPadding, backgroundColor: "rgb(245, 245, 245)" }}>
        <div style={{ marginBottom: 25 }}>
          <Typography component="span" gutterBottom variant="h6" style={{ fontWeight: "bold", verticalAlign: "sub" }}>
            {selectedNode.label}
          </Typography>
        </div>
        <CardContent>

        </CardContent>
      </Card>
    )
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

  const getCards = () => {
    const newCards = []
    for (const selectedNode of selectedNodes) {
      newCards.push(selectedNodeAsCard(selectedNode))
    }
    return(
      <>
        {newCards}
      </>
    )
  }

  const onAction = (node, action) => {
    console.log('onAction::', action, node)
  }
  const onNodeToggle = currentNode => {
    console.log('onNodeToggle::', currentNode)
  }

  return (
    <>

      <DropdownTreeMemoized data={importedData} onChange={onChange} />
      <GridWithCards selectedNodes={selectedNodes} />        

    </>
  )

}

export default Catalog;
