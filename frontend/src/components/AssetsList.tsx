import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import FlightIcon from "@mui/icons-material/Flight";
import RadarIcon from "@mui/icons-material/Radar";

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

type AssetStatus = 'READY' | 'MAINTENANCE' | 'OFFLINE';
type AssetRow = {
    id: number;
    icon: React.ReactNode;
    name: string;
    type: string;
    status: AssetStatus;
    lastUpdated: string;
}

const rows: AssetRow[] = [
    { id: 1, icon: <FlightIcon />, name: 'F-16 Fighting Falcon', type: 'F-16', status: 'READY', lastUpdated: '2026-06-01' },
    { id: 2, icon: <RadarIcon />, name: 'EIRS Early Warning', type: 'Radar System', status: 'OFFLINE', lastUpdated: '2023-09-01' },
    { id: 3, icon: <FlightIcon />, name: 'F-35 Lightning II', type: 'F-35', status: 'MAINTENANCE', lastUpdated: '2026-06-01' },
    { id: 4, icon: <FlightIcon />, name: 'MQ-9 Predator', type: 'UAV', status: 'READY', lastUpdated: '2026-06-01' },
    { id: 5, icon: <RadarIcon />, name: 'KALKAN-II', type: 'Radar System', status: 'READY', lastUpdated: '2026-06-01' },
    { id: 6, icon: <FlightIcon />, name: 'F-4 Phantom II', type: 'F-4', status: 'OFFLINE', lastUpdated: '2026-05-22' },
    { id: 7, icon: <FlightIcon />, name: 'Bayraktar TB2', type: 'UAV', status: 'READY', lastUpdated: '2026-06-14' },
    { id: 8, icon: <RadarIcon />, name: 'Mobile Tracking Radar', type: 'Radar System', status: 'MAINTENANCE', lastUpdated: '2026-04-18' },
    { id: 9, icon: <FlightIcon />, name: 'C-130 Hercules', type: 'Transport', status: 'READY', lastUpdated: '2026-06-11' },
];

export default function AssetsList() {
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
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
