import { Box, Grid } from "@mui/material";
import Navbar from "./Navbar";

export default function Layout({ children }) {

  const Drawer = () =>{
    return(
      <Box sx={{
        height:'35vh',
        background:'black',
        position:'fixed',
        bottom:0
      }}>

      </Box>
    )
  }
  return (
    <Box
      sx={{
        height: "100vh",
        width: "100%",
      }}
    >
      <Navbar />
      <Grid container >
        <Grid
         item
         md={12}
         lg={8}
         sx={{
           height: "85vh",
           overflowY: "scroll",
           overFlowY: "hidden",
        //    padding:'12px'
         }}
        >
            {children}
         <Drawer />
        </Grid>
        <Grid
          item
          md={12}
          lg={4}
          sx={{
            height: "100vh",
            background: "pink",
          }}
        >
          <iframe
            src="https://iframe.iono.fm/p/277?layout=legacy&amp;lang=en&amp;playlist=latest&amp;accent=ed3d96&amp;background=000000&amp;border=000000&amp;text=ffffff&amp;rounded=19&amp;artwork=0&amp;description=0&amp;sharing=1&amp;waveform=0&amp;download=1"
            style={{
              height: "100%",
              width: "100%",
              background: "#000",
              margin: "0",
              padding: '0',
            }}
            frameBorder="0"
            title="iono player"
          ></iframe>
        </Grid>
      </Grid>
    </Box>
  );
}
