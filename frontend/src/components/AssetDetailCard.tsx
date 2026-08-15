import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import f16 from '../assets/images/f-16.png';

export default function AssetDetailCard() {
    return (
        <Card sx={{ width: '100%', minHeight: 320 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={f16}
                title="F-16"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    F-16 Fighting Falcon
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Placeholder detail panel for the selected asset. This will later show operational status, serial number, and asset metadata.
                </Typography>
            </CardContent>
        </Card>
    );
}
