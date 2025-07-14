"use client"

import React, { useState } from "react"
import { Box, List, ListItem, ListItemButton, ListItemIcon, Avatar, Paper, Divider, IconButton, Drawer } from "@mui/material"
import { menuItems } from "@/constants"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Icons } from "@/components/ui";

const SidebarContent: React.FC<{ onClose?: () => void }> = ({ onClose }) => {
  const theme = useTheme();
  const dividerIndex = 3;
  return (
    <Paper
      elevation={0}
      sx={{
        width: 55,
        height: "100%",
        bgcolor: "#F9F8FF",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Logo at the top */}
      <Box sx={{ display: 'flex', justifyContent: 'center', pb: "37.28px" }}>
        <img
          src="/logo.png"
          alt="Logo"
          style={{
            width: 34.19,
            height: 40.29,
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </Box>
      <List sx={{ flexGrow: 1, pt: 0, px: 0.5 }}>
        {menuItems.map((item, index) => (
          <React.Fragment key={index}>
            <ListItem disablePadding sx={{ mb: 1.5 }}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: "center",
                  borderRadius: 2.5,
                  bgcolor: item.active ? theme.palette.custom.sidebarHover : "transparent",
                  "&:hover": {
                    bgcolor: theme.palette.custom.sidebarHover,
                  },
                  "&:focus-visible": {
                    bgcolor: theme.palette.custom.sidebarHover,
                  },
                }}
                aria-label={item.label}
                onClick={onClose}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    justifyContent: "center",
                    color: item.active ? theme.palette.primary.main : theme.palette.text.disabled,
                  }}
                >
                  <item.icon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            {index === dividerIndex && (
              <Divider
                sx={{
                  my: 2,
                  mx: "auto",
                  width: 39.05,
                  borderColor: theme.palette.custom.sidebarDivider,
                }}
              />
            )}
          </React.Fragment>
        ))}
      </List>
      <Box sx={{ p: 1, pb: 2 }}>
        <Avatar
          sx={{ width: 40, height: 40, mx: "auto" }}
          src="/avatar.png?height=40&width=40"
          alt="User profile"
        />
      </Box>
    </Paper>
  );
};

const Sidebar: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [open, setOpen] = useState(false);

  // Sidebar for desktop
  if (!isMobile) {
    return (
      <Box
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 1200,
          padding: "24px 0px 0px 40px",
          width: 80,
          height: "100vh",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <SidebarContent />
      </Box>
    );
  }

  // Sidebar for mobile
  return (
    <>
      {/* Trigger button, always visible on mobile, toggles open/close */}
      <IconButton
        color="primary"
        aria-label={open ? "close sidebar" : "open sidebar"}
        onClick={() => setOpen((prev) => !prev)}
        sx={{
          position: 'fixed',
          top: 16,
          right: 16,
          zIndex: 1300,
          bgcolor: 'background.paper',
          display: { xs: 'flex', sm: 'none' },
        }}
      >
        {open ? <Icons.panelLeftClose /> : <Icons.panelLeftOpen />}
      </IconButton>
      <Drawer
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
        PaperProps={{
          sx: {
            width: 80,
            bgcolor: 'transparent',
            boxShadow: 0,
            border: 'none',
            overflow: 'visible',
          }
        }}
        ModalProps={{ keepMounted: true }}
      >
        <SidebarContent onClose={() => setOpen(false)} />
      </Drawer>
    </>
  );
}

export default Sidebar;
