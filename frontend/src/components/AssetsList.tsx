import * as React from 'react';
import type { Asset } from '../types/Asset';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

type AssetsListProps = {
    assets: Asset[];
}
interface Column {
    id: 'icon' | 'name' | 'type' | 'status' | 'lastUpdated';
    label: string;
    minWidth?: number;
    align?: 'left';
}

const columns: readonly Column[] = [
    { id: 'icon', label: 'Icon', minWidth: 100 },
    { id: 'name', label: 'Name', minWidth: 100 },
    {
        id: 'type',
        label: 'Type',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'left',
    },
    {
        id: 'lastUpdated',
        label: 'Last Updated',
        minWidth: 170,
        align: 'left',
    },
];

export default function AssetsList({ assets }: AssetsListProps) {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (_event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ minHeight: '80vh' }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            assets.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((asset) => {
                                    return (
                                        <TableRow key={asset.id}>
                                            <TableCell></TableCell>
                                            <TableCell>{asset.name}</TableCell>
                                            <TableCell>{asset.type}</TableCell>
                                            <TableCell>{asset.status}</TableCell>
                                            <TableCell></TableCell>
                                        </TableRow>
                                    );
                                })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={assets.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
