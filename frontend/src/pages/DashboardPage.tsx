import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import TopBar from '../components/TopBar';
import AssetsList from '../components/AssetsList';
import AssetDetailCard from '../components/AssetDetailCard';
import IncidentCard from '../components/IncidentCard';
import Box from '@mui/material/Box';

function DashboardPage() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleOpenSidebar = () => {
        setSidebarOpen(true);
    }
    const handleCloseSidebar = () => {
        setSidebarOpen(false);

    };
    return (
        <>
            <TopBar onMenuClick={handleOpenSidebar} />
            <Sidebar open={sidebarOpen} onClose={handleCloseSidebar} />
            <Box sx={{ display: 'flex', gap: 2, p: 2 }}>
                <Box sx={{ flex: 2 }}>
                    <AssetsList />
                </Box>
                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <AssetDetailCard />
                    <IncidentCard />
                </Box>
            </Box>
        </>
    );
}

export default DashboardPage;