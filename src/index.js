import React from "react";
import ReactDOM from "react-dom";
import { Grid, Card, Fab, Button, Typography } from "@material-ui/core";
import { SaveAlt } from "@material-ui/icons";
import "./styles.css";

var list = [
  "Dog is on the street and you got",
  "Cat",
  "Mouse",
  "Pig",
  "Lion",
  "Tiger",
  "Wolf"
];

function App() {
  return (
    <Grid container>
      <Grid container component={Card} className="App">
        <Grid
          container
          direction="column"
          wrap="nowrap"
          style={{
            height: 638
          }}
        >
          <Grid
            item
            container
            justify="center"
            style={{
              margin: "20px 0"
            }}
          >
            <Typography component="h4" variant="h4">
              FILES TO DOWNLOAD
            </Typography>
          </Grid>
          <Grid
            item
            container
            justify="center"
            style={{
              padding: 28
            }}
          >
            <Fab color="primary" variant="extended">
              Download All
            </Fab>
          </Grid>

          <Grid
            item
            container
            style={{
              padding: 28,
              flexGrow: 0.1,
              overflowY: "auto"
            }}
          >
            {list.map((animal, index) => {
              return (
                <Grid
                  container
                  key={index}
                  style={{
                    height: 100
                  }}
                >
                  <Grid item container>
                    <Button
                      variant="text"
                      disableRipple
                      color="primary"
                      style={{
                        backgroundColor: "white"
                      }}
                    >
                      <SaveAlt
                        style={{
                          marginRight: 12
                        }}
                      />
                      <Typography>{animal}</Typography>
                    </Button>
                  </Grid>
                  <Grid
                    item
                    container
                    style={{
                      height: "min-content"
                    }}
                    direction="row"
                    justify="flex-start"
                  >
                    <Grid
                      item
                      style={{
                        margin: 8
                      }}
                    >
                      <Typography>AlphaID</Typography>
                    </Grid>
                    <Grid
                      item
                      style={{
                        margin: 8
                      }}
                    >
                      <Typography>AlphaName</Typography>
                    </Grid>
                    <Grid
                      item
                      style={{
                        margin: 8
                      }}
                    >
                      <Typography>AlphaOwner</Typography>
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
