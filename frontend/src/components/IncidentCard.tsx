import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function IncidentCard() {
    return (
        <Card sx={{ width: '100%', minHeight: 320 }}>
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Incident Summary
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Placeholder incident panel for the selected asset. This section will later list open incidents, severity, and quick actions.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Add Incident</Button>
                <Button size="small">Set Status</Button>
            </CardActions>
        </Card>
    );
}
