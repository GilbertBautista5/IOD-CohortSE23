import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import CustomCard from "./CustomCard";

// layout cards in a grid
export default function BasicGrid() {
  // Outermost Grid is a container
  return (
    <Grid container spacing={5} my={2}>
      {/* Inner Grids (columns) are items */}
      <Grid item xs={4} lg={3}>
        {" "}
        {/* use 4/12 columns on xs screens up */}
        <CustomCard title="First Column" buttonText="Click Me!">First column is wider</CustomCard>
      </Grid>
      <Grid item xs={2}>
        middle item
      </Grid>
      <Grid item xs={2}>
        middle item
      </Grid>
      <Grid item xs={4} lg={3}>
        <CustomCard title="Last Column" buttonText="Don't Click Me!">Last column is wider</CustomCard>
      </Grid>
      <Grid item xs={6} lg={4}>
        <CustomCard title="New Row" buttonText="Button" imageURL="https://robohash.org/random?size=250x150&set=set5">This one may overflow the first row and go to a new one</CustomCard>
      </Grid>     
      <Grid item xs={6} lg={4}>
        <CustomCard title="New Row #2" buttonText="Button #2" imageURL="https://robohash.org/random2?size=250x150&set=set5">This one may overflow the first row and go to a new one</CustomCard>
      </Grid>        
    </Grid>
  ); // 4 + 2 + 2 + 4 = 12, so grid will be 4 columns on one row
}

// ++ Create some different Cards and lay them out in a Grid
// see https://mui.com/material-ui/react-grid/ for more options