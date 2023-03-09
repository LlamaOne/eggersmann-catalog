import { CardContent, CardHeader, Typography, Button } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import TableHead from '@mui/material/TableHead';
import Paper from '@mui/material/Paper';
import { useState } from 'react';

export const getTableHeaders = (headers) => {

    if (headers) {
        const cols = []
        headers.forEach((content) => {
            cols.push(
                <TableCell component="th" scope="row">{content}</TableCell>
            )
        })
        return (
            <TableHead>
                {cols}
            </TableHead>
        )
    }
}

export const getTableRows = (content) => {

    const rows = []
    if (content instanceof Map) {
        content.forEach((value, key) => {
            rows.push(
                <TableRow >
                    <TableCell component="th" scope="row">
                        <Typography><strong>{key}</strong></Typography>
                    </TableCell>
                    <TableCell align="right">{value}</TableCell>
                </TableRow>
            )
        })
    } else {
        content.forEach((singleRow) => {
            const cols = []
            singleRow.forEach((row) => {
                cols.push(
                    <TableCell>{row}</TableCell>
                )
            })
            rows.push(
                <TableRow>
                    {cols}
                </TableRow>
            )
        })
    }
    return (
        <TableBody>
            {rows}
        </TableBody>
    )

}


export const CollapsibleCardContent = (props) => {

    const [open, setOpen] = useState(false);

    const toggle = () => {
        setOpen(!open);
    };



    return (
        <CardContent>
            <div style={{ marginBottom: 5 }}>
                <Button onClick={toggle}>{props.title}</Button>
            </div>
            {open && <CardContent>
                <TableContainer component={Paper}>
                    <Table aria-label="simple table" stickyHeader>
                        {getTableHeaders(props.headers)}
                        {getTableRows(props.content)}

                    </Table>
                </TableContainer>
            </CardContent>
            }
        </CardContent>
    )

}

