import { Grid, Card, CardContent, CardHeader, Typography, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { useState } from 'react';
import { CollapsibleCardContent } from './CollapsibleCardContent';

const cardWidth = 480;
const cardPadding = "10px";


const selectedNodeAsCard = function (selectedNode, openMain) {

    const generalMap = new Map();
    generalMap.set('Feature', selectedNode.feature);
    generalMap.set('Option', selectedNode.option);
    generalMap.set('Additional Info', selectedNode.optionComment);
    generalMap.set('Valid Until', selectedNode.validUntil);
    generalMap.set('Catalog Page', selectedNode.catalogPage);
    
    const pricingMap = new Map();
    pricingMap.set('Price', selectedNode.price);
    pricingMap.set('Price Type', selectedNode.priceType);
    pricingMap.set('Base Unit', selectedNode.priceTypeBasicUnit);
    pricingMap.set('Depth', selectedNode.priceTypeDepth);
    pricingMap.set('Width', selectedNode.priceTypeWidth);
    pricingMap.set('Height', selectedNode.priceTypeHeight);

    const dimensionHeaders = ['Dimension', 'Nominal Value', 'Minimum Size', 'Maximum Size'];
    const dimensionMap = [];
    if(selectedNode.shapeParams) {
        selectedNode.shapeParams.forEach((shapeParam) => {
            const dims = []
            dims.push(shapeParam.name);
            dims.push(shapeParam.nominalValue);
            dims.push(shapeParam.minSize);
            dims.push(shapeParam.maxSize);
            dimensionMap.push(dims);
        });
    }   

    return (
        <Card key={4} variant="outlined" sx={{ width: cardWidth, margin: 2, padding: cardPadding, backgroundColor: "rgb(245, 245, 245)" }}>
            <div style={{ marginBottom: 25 }}>
                <div style={{ marginBottom: 5 }}>
                    <CardHeader title={selectedNode.label} />
                </div>
            </div>
            <CollapsibleCardContent title='General Information' content={generalMap} />
            <CollapsibleCardContent title='Pricing Information' content={pricingMap} />
            <CollapsibleCardContent title='Dimension Information' content={dimensionMap} headers={dimensionHeaders} />
        </Card>
    )
};

export const GridWithCards = (props) => {



    const [openMain, setOpenMain] = useState(true);


    const toggleMain = () => {
        setOpenMain(!openMain);
    }



    const newCards = []
    for (const selectedNode of props.selectedNodes) {
        newCards.push(selectedNodeAsCard(selectedNode, openMain))
    }

    return (
        <Grid container style={{ display: "flex", justifyContent: "center" }}>
            {newCards}
        </Grid>
    );

};

