import { Grid, Card, CardContent, CardHeader, Typography, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

const cardWidth = 480;
const cardPadding = "10px";


const selectedNodeAsCard = function (selectedNode, openMain) {

    return (
        <Card key={4} variant="outlined" sx={{ width: cardWidth, margin: 2, padding: cardPadding, backgroundColor: "rgb(245, 245, 245)" }}>
            <div style={{ marginBottom: 25 }}>
                <div style={{ marginBottom: 5 }}>
                    <CardHeader title={selectedNode.label} />
                </div>
            </div>
            <CardContent>
                <div style={{ marginBottom: 5 }}>
                <CardHeader title='General Information' />
                </div>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" stickyHeader>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography><strong>Feature</strong></Typography>
                                    </TableCell>
                                    <TableCell align="right">{selectedNode.feature}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography><strong>Option</strong></Typography>
                                    </TableCell>
                                    <TableCell align="right">{selectedNode.option}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography><strong>Additional Info</strong></Typography>
                                    </TableCell>
                                    <TableCell align="right">{selectedNode.optionComment}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography><strong>Valid Until</strong></Typography>
                                    </TableCell>
                                    <TableCell align="right">{selectedNode.validUntil}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography><strong>Catalog Page</strong></Typography>
                                    </TableCell>
                                    <TableCell align="right">{selectedNode.catalogPage}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </CardContent>
            <CardContent>
                <div style={{ marginBottom: 5 }}>
                    <CardHeader title='Pricing Information' />
                </div>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" stickyHeader>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography><strong>Price</strong></Typography>
                                    </TableCell>
                                    <TableCell align="right">{selectedNode.price}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography><strong>Price Type</strong></Typography>
                                    </TableCell>
                                    <TableCell align="right">{selectedNode.priceType}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography><strong>Base Unit</strong></Typography>
                                    </TableCell>
                                    <TableCell align="right">{selectedNode.priceTypeBasicUnit}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography><strong>Depth</strong></Typography>
                                    </TableCell>
                                    <TableCell align="right">{selectedNode.priceTypeDepth}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography><strong>Width</strong></Typography>
                                    </TableCell>
                                    <TableCell align="right">{selectedNode.priceTypeWidth}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        <Typography><strong>Height</strong></Typography>
                                    </TableCell>
                                    <TableCell align="right">{selectedNode.priceTypeHeight}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </CardContent>
            <CardContent>
                <div style={{ marginBottom: 5 }}>
                    <CardHeader title='Dimension Information' />
                </div>
                <CardContent>
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table" stickyHeader>
                            <TableHead>
                                <TableCell component="th" scope="row">Dimension</TableCell>
                                <TableCell align="right">Nominal Value</TableCell>
                                <TableCell align="right">Minimum Size</TableCell>
                                <TableCell align="right">Maximum Size</TableCell>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">{selectedNode.shapeParams[0].name}</TableCell>
                                    <TableCell align="right">{selectedNode.shapeParams[0].nominalValue}</TableCell>
                                    <TableCell align="right">{selectedNode.shapeParams[0].minSize}</TableCell>
                                    <TableCell align="right">{selectedNode.shapeParams[0].maxSize}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">{selectedNode.shapeParams[1].name}</TableCell>
                                    <TableCell align="right">{selectedNode.shapeParams[1].nominalValue}</TableCell>
                                    <TableCell align="right">{selectedNode.shapeParams[1].minSize}</TableCell>
                                    <TableCell align="right">{selectedNode.shapeParams[1].maxSize}</TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">{selectedNode.shapeParams[2].name}</TableCell>
                                    <TableCell align="right">{selectedNode.shapeParams[2].nominalValue}</TableCell>
                                    <TableCell align="right">{selectedNode.shapeParams[2].minSize}</TableCell>
                                    <TableCell align="right">{selectedNode.shapeParams[2].maxSize}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </CardContent>
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

