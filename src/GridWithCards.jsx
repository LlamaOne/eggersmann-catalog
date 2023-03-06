import { Grid, Card, CardContent, Typography } from '@mui/material';


const cardWidth = 480;
const cardPadding = "10px";

const selectedNodeAsCard = function (selectedNode) {
    return (
      <Card key={4} sx={{ width: cardWidth, margin: 2, padding: cardPadding, backgroundColor: "rgb(245, 245, 245)" }}>
        <div style={{ marginBottom: 25 }}>
          <Typography component="span" gutterBottom variant="h6" style={{ fontWeight: "bold", verticalAlign: "sub" }}>
            {selectedNode.label}
          </Typography>
        </div>
        <CardContent>

        </CardContent>
      </Card>
    )
  };

export const GridWithCards = (props) => {

    const newCards = []
    for (const selectedNode of props.selectedNodes) {
        newCards.push(selectedNodeAsCard(selectedNode))
    }

    return (        
        <Grid container style={{ display: "flex", justifyContent: "center" }}>
          {newCards}
        </Grid>
    );

};

