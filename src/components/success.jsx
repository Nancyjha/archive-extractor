import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";
import WestOutlinedIcon from "@mui/icons-material/WestOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { experimentalStyled as styled } from "@mui/material/styles";

import FavoriteIcon from "@mui/icons-material/Favorite";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);
const theme = createTheme({
  palette: {
    neutral: {
      main: "#64748B",
      contrastText: "#fff",
    },
  },
});

const style = {
  width: "100%",
  height: "85vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Success() {
  return (
    <div style={style}>
      <Card
        variant="outlined"
        sx={{ width: 1 / 2, height: 1 / 2 }}
        style={{
          borderRadius: "5px",
        }}
      >
        <CardContent>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              fontSize: 18,
              fontWeight: "bold",
              alignItems: "left",
              justifyContent: "left",
              display: "flex",
            }}
          >
            Archive successfully extracted
          </Typography>
          <Typography
            variant="subtitle2"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              alignItems: "left",
              justifyContent: "left",
              display: "flex",
            }}
          >
            Click on a file to download it.
          </Typography>
          <Button
            variant="contained"
            style={{ textTransform: "none" }}
            sx={{
              alignItems: "left",
              justifyContent: "left",
              display: "flex",
              marginTop: "11px",
            }}
            startIcon={<FileDownloadOutlinedIcon />}
          >
            Save all as ZIP
          </Button>
          <ThemeProvider theme={theme}>
            <Button
              sx={{
                alignItems: "left",
                justifyContent: "left",
                display: "flex",
              }}
              style={{ textTransform: "none" }}
              variant="contained"
              size="small"
              color="neutral"
              startIcon={<WestOutlinedIcon />}
            >
              Extract another archive
            </Button>
            <Button
              style={{ textTransform: "none" }}
              variant="contained"
              size="small"
              color="neutral"
              startIcon={<FavoriteIcon />}
            >
              Rate us
            </Button>
          </ThemeProvider>
        </CardContent>
      </Card>
    </div>
  );
}
