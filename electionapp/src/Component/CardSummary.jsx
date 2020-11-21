import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';



const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

export default function CardSummary({ city, polls, data }) {
    const classes = useStyles();

    return (
        <div >
            <div >
                <Card className={classes.root} style={{ width: "400px" }}>
                    <CardActionArea>
                        <CardContent>
                            <Typography style={{ display: "flex" }} gutterBottom variant="h5" color="primary" component="h2">
                                <small style={{ flex: "1" }}>city: {city}</small>
                                <small style={{ flex: "1" }}>polls: {polls.length}</small>
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions style={{ display: "flex" }}>
                        <Button style={{ flex: "1" }} size="small" color="primary">
                            <Link href="http://localhost:3000/{city}" variant="body2">
                                {"More Detail"}
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}


export { CardSummary };
