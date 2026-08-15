import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ConnectingAirportsIcon from '@mui/icons-material/ConnectingAirports';

type SidebarProps = {
    open: boolean;
    onClose: () => void;
}
export default function Sidebar({ open, onClose }: SidebarProps) {
    const appBarHeight = 64;
    const drawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={onClose}>
            <List>
                {['Dashboard', 'Assets', 'Incidents', 'Reports'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <DashboardIcon /> : <ConnectingAirportsIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
            <Divider />
        </Box>
    );

    return (
        <Drawer open={open} onClose={onClose} slotProps={{
            paper: {
                sx: {
                    top: `${appBarHeight}px`,
                    height: `calc(100% - ${appBarHeight}px)`,
                },
            },
            backdrop: {
                sx: {
                    top: `${appBarHeight}px`,
                    height: `calc(100% - ${appBarHeight}px)`,
                },
            },
        }}>
            {drawerList}
        </Drawer>
    );
}