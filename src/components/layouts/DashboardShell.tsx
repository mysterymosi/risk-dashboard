import { Box, Grid } from "@mui/material";
import React from "react";
import { Sidebar } from "@/components/layouts";


const drawerWidth = 80;


const DashboardShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', minHeight: '100vh', background: '#F9F8FF' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { sm: `calc(${drawerWidth}px + 10px)`, xs: 0 },
          pl: { md: "46.84px", xs: 2 },
          pr: { md: "35px", xs: 2 },
          pt: { md: "34px", xs: 2 },
          pb: { md: "40px", xs: 2 },
          width: { sm: `calc(100vw - ${drawerWidth}px)` },
          minHeight: '100vh',
          overflowX: 'hidden',
        }}
      >
        <Grid container spacing={"20px"}>
          {children}
        </Grid>
      </Box>
    </Box>
  );
};

export default DashboardShell;