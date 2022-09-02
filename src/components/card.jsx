import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const style = {
  width: "100%",
  height: "85vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};

export default function Cardzip() {
  return (
    <div style={style}>
      <Card variant="outlined"
        sx={{ width: 1 / 2,height:1/2,}}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "5px",
        }}
      >
        <CardContent>
          <Button
            variant="contained"
            size="medium"
            sx={{
              display: "block",
              paddingX: "40px",
              backgroundColor: "#2962ff",
            }}
            style={{ textTransform: "none" }}
          >
            <Typography variant="h6" color="white" component="div">
              Choose file
            </Typography>
            <Typography
              sx={{ fontSize: 11 , opacity: "60%"}}
              variant="caption"
              color="white"
              gutterBottom
            >
              from your computer
            </Typography>
          </Button>

          <Typography   variant="body1" gutterBottom style={{ color: "#949494",paddingTop:"20px" }}>
          or drag and drop file here...
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
